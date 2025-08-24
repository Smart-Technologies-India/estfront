import type { LoaderArgs, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  Fa6SolidMagnifyingGlass,
  Fa6SolidXmark,
} from "~/components/icons/icons";
import Pagination from "~/components/pagination";
import { userPrefs } from "~/cookies";
import { usePagination } from "~/hooks/usepagination";
import { ApiCall } from "~/services/api";
import { authusertorole } from "~/utils";

export const loader: LoaderFunction = async (props: LoaderArgs) => {
  const cookieHeader = props.request.headers.get("Cookie");
  const cookie: any = await userPrefs.parse(cookieHeader);
  const department = await ApiCall({
    query: `
        query filterCommon($filterCommonInput:FilterCommonInput!){
            filterCommon(filterCommonInput:$filterCommonInput){
                id,
                village,
                name,
                form_type,
                user_id,
                auth_user_id,
                focal_user_id,
                intra_user_id,
                inter_user_id,
                number,
                event_date,
                form_status,
                query_status,
                form_id
            }
          }
      `,
    veriables: {
      filterCommonInput: {
        user_type: cookie.role == "USER" ? "USER" : "DEPARTMENT",
        user_id: parseInt(cookie.id!),
      },
    },
  });

  return json({
    user: cookie,
    department: department.data.filterCommon ?? [],
  });
};

const Dashboard: React.FC = (): JSX.Element => {
  const loader = useLoaderData();

  const user = loader.user;

  const [department, setDepartment] = useState<unknown[]>([]);
  const [filteredDepartment, setFilteredDepartment] = useState<unknown[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>("ALL");

  const pagination = usePagination(filteredDepartment);

  const searchRef = useRef<HTMLInputElement>(null);
  const [isSearch, setIsSearch] = useState<boolean>();
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const init = () => {
    const customOrder = [
      "NONE",
      "QUERYRAISED",
      "INPROCESS",
      "SUBMIT",
      "REJECTED",
      "COMPLETED",
      "CERTIFICATEGRANT",
      "APPROVED",
    ];
    // loader.department.sort((a: any, b: any) => {
    //     const statusA = customOrder.indexOf(a.query_status);
    //     const statusB = customOrder.indexOf(b.query_status);
    //     return statusA - statusB;
    // });

    // console.log(loader.department);

    // loader.department.sort((a: any, b: any) => {
    //     const dateA = new Date(a.event_date.split('/').reverse().join('-'));
    //     const dateB = new Date(b.event_date.split('/').reverse().join('-'));

    //     return dateA.getTime() - dateB.getTime();
    // });

    loader.department.sort((a: any, b: any) => {
      const statusA = customOrder.indexOf(a.query_status);
      const statusB = customOrder.indexOf(b.query_status);

      if (statusA !== statusB) {
        return statusA - statusB;
      } else {
        const dateA = new Date(a.event_date.split("/").reverse().join("-"));
        const dateB = new Date(b.event_date.split("/").reverse().join("-"));

        return dateA.getTime() - dateB.getTime();
      }
    });

    setDepartment(loader.department);
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (filterStatus === "ALL") {
      setFilteredDepartment(department);
    } else if (filterStatus === "OTHER") {
      const otherStatuses = ["REJECTED", "INPROCESS", "APPROVED"];
      setFilteredDepartment(
        department.filter((d: any) => !otherStatuses.includes(d.query_status))
      );
    } else {
      setFilteredDepartment(
        department.filter((d: any) => d.query_status === filterStatus)
      );
    }
  }, [filterStatus, department]);

  const search = async () => {
    setIsSearching((val) => true);
    if (
      searchRef.current?.value == null ||
      searchRef.current?.value == undefined ||
      searchRef.current?.value == ""
    ) {
      setIsSearching((val) => false);
      return toast.error("Enter search keyword", { theme: "light" });
    }

    const data = await ApiCall({
      query: `
            query searchCommon($searchCommonInput:SearchCommonInput!){
                searchCommon(searchCommonInput:$searchCommonInput){
                    id,
                    village,
                    name,
                    form_type,
                    user_id,
                    auth_user_id,
                    focal_user_id,
                    intra_user_id,
                    inter_user_id,
                    number,
                    event_date,
                    form_status,
                    query_status,
                    form_id
                }
            }
            `,
      veriables: {
        searchCommonInput: {
          name: searchRef.current?.value,
        },
      },
    });
    if (!data.status) {
      setIsSearching((val) => false);
      return toast.error(data.message, { theme: "light" });
    } else {
      setIsSearching((val) => true);
      setIsSearch((val) => true);
      setDepartment(data.data.searchCommon);
    }
    setIsSearching((val) => false);
  };

  const clearsearch = async () => {
    setIsSearch((val) => false);
    init();
  };

  const getViewLink = (value: string, id: number): string => {
    if (value == "MARRIAGE") {
      return `/home/marriageview/${id}`;
    } else if (value == "RELIGIOUS") {
      return `/home/religiousview/${id}`;
    } else if (value == "ROADSHOW") {
      return `/home/roadshowview/${id}`;
    } else if (value == "GENERIC") {
      return `/home/genericview/${id}`;
    } else {
      return "/home";
    }
  };

  const getname = (value: string): string => {
    if (value == "MARRIAGE") {
      return `MRG`;
    } else if (value == "RELIGIOUS") {
      return `RLG`;
    } else if (value == "ROADSHOW") {
      return `RD`;
    } else if (value == "GENERIC") {
      return `GEN`;
    } else {
      return "GEN";
    }
  };

  return (
    <>
      <div className="bg-white rounded-md shadow-lg p-4 my-4 mb-10">
        <div className="flex items-center gap-2">
          <h1 className="text-gray-800 text-2xl font-semibold text-center">
            Dashboard
          </h1>
          <div className="grow"></div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => setFilterStatus("ALL")}
              className={`text-sm text-center py-1 px-2 rounded-md font-semibold ${
                filterStatus == "ALL"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setFilterStatus("REJECTED")}
              className={`text-sm text-center py-1 px-2 rounded-md font-semibold ${
                filterStatus == "REJECTED"
                  ? "bg-rose-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              REJECTED
            </button>
            <button
              onClick={() => setFilterStatus("INPROCESS")}
              className={`text-sm text-center py-1 px-2 rounded-md font-semibold ${
                filterStatus == "INPROCESS"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              INPROCESS
            </button>
            <button
              onClick={() => setFilterStatus("APPROVED")}
              className={`text-sm text-center py-1 px-2 rounded-md font-semibold ${
                filterStatus == "APPROVED"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              APPROVED
            </button>
            <button
              onClick={() => setFilterStatus("OTHER")}
              className={`text-sm text-center py-1 px-2 rounded-md font-semibold ${
                filterStatus == "OTHER"
                  ? "bg-gray-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              OTHER
            </button>
          </div>
          {user.role == "USER" ? null : isSearch ? (
            <>
              <div className="grid place-items-center rounded-md bg-[#0984e3] shadow-md h-full p-2 text-white">
                Found : {department.length} result
              </div>
              <button
                onClick={clearsearch}
                className="rounded-md bg-rose-500 shadow-md h-full p-2 text-white flex gap-2 items-center"
              >
                <Fa6SolidXmark></Fa6SolidXmark> Clear
              </button>
            </>
          ) : isSearching ? (
            <div className="r rounded-md bg-[#0984e3] shadow-md h-full p-2 text-white flex gap-2 items-center">
              <Fa6SolidMagnifyingGlass></Fa6SolidMagnifyingGlass> Searching for
              text {searchRef.current?.value}
            </div>
          ) : (
            <>
              <div className="grid place-items-center">
                <input
                  ref={searchRef}
                  type="text"
                  className="bg-[#eeeeee] rounded-md outline-none focus:outline-none py-1 px-4"
                  placeholder="Enter Search Text.."
                />
              </div>
              <button
                onClick={search}
                className="grid place-items-center rounded-md bg-[#0984e3] shadow-md h-full p-2 text-white"
              >
                <Fa6SolidMagnifyingGlass></Fa6SolidMagnifyingGlass>
              </button>
            </>
          )}
        </div>

        {pagination.paginatedItems == undefined ||
        pagination.paginatedItems.length == 0 ||
        pagination.paginatedItems == null ? (
          <h3 className="text-lg md:text-xl font-semibold text-center bg-rose-500 bg-opacity-25 rounded-md border-l-4 border-rose-500 py-2  text-rose-500">
            You do not have any pending forms.
          </h3>
        ) : (
          <div className="overflow-x-scroll overflow-y-visible sm:mx-0.5 my-2">
            <table className="min-w-full rounded-md">
              <thead>
                <tr className="rounded-md bg-[#0984e3] border-b border-t transition duration-300 ease-in-out">
                  <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl text-left">
                    Form Id
                  </th>
                  <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl text-left">
                    File With
                  </th>
                  <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl text-left">
                    Applicant
                  </th>
                  <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl text-left">
                    Village
                  </th>
                  <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">
                    Status
                  </th>
                  <th className="px-6 py-4 whitespace-nowrap font-medium text-white text-xl">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {pagination.paginatedItems.map((val: any, index: number) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b border-t transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        EST-{getname(val.form_type)}-
                        {`0000${val.form_id}`.substring(
                          `0000${val.form_id}`.length - 4
                        )}
                      </td>
                      <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {authusertorole(val.auth_user_id)}
                      </td>
                      <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {val.name}
                      </td>
                      <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {val.village}
                      </td>
                      <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {val.query_status == "REJECTED" ? (
                          <div className="py-1 text-lg px-4 text-rose-500 bg-rose-500/20 border border-rose-500 text-center rounded-md font-medium">
                            {val.query_status}
                          </div>
                        ) : val.query_status == "INPROCESS" ? (
                          <div className="py-1 text-lg px-4 text-yellow-500 bg-yellow-500/20 border border-yellow-500 text-center rounded-xl font-medium">
                            {val.query_status}
                          </div>
                        ) : val.query_status == "APPROVED" ? (
                          <div className="py-1 text-lg px-4 text-green-500 bg-green-500/20 border border-green-500 text-center rounded-xl font-medium">
                            {val.query_status}
                          </div>
                        ) : (
                          <div className="py-1 text-lg px-4 text-blue-500 bg-blue-500/20 border border-blue-500 text-center rounded-xl font-medium">
                            {val.query_status}
                          </div>
                        )}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        <Link
                          to={getViewLink(val.form_type, val.form_id)}
                          className="py-1 w-full sm:w-auto block text-white text-lg px-4 bg-[#0984e3] text-center rounded-md font-medium"
                        >
                          VIEW
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <Pagination
          ChangePerPage={pagination.ChangePerPage}
          activePage={pagination.activePage}
          changeActivePage={pagination.changeActivePage}
          firstPage={pagination.firstPage}
          getMaxPage={pagination.getMaxPage}
          getTotalItemsLength={pagination.getTotalItemsLength}
          goToPage={pagination.goToPage}
          itemPerPage={pagination.itemPerPage}
          lastPage={pagination.lastPage}
          nextPage={pagination.nextPage}
          paginatedItems={pagination.paginatedItems}
          prevPage={pagination.prevPage}
          totalPages={pagination.totalPages}
        ></Pagination>
      </div>
    </>
  );
};
export default Dashboard;

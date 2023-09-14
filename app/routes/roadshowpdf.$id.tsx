import { Page, Text, View, Document, StyleSheet, Font, PDFViewer, PDFDownloadLink, renderToFile, usePDF, pdf, Image } from '@react-pdf/renderer';
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from '@remix-run/react';
import { useEffect, useState } from "react";
import { userPrefs } from "~/cookies";
import { ApiCall } from "~/services/api";

export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const id = props.params.id;
    const cookieHeader = props.request.headers.get("Cookie");
    const cookie: any = await userPrefs.parse(cookieHeader);
    const data = await ApiCall({
        query: `
        query getRoadshowById($id:Int!){
            getRoadshowById(id:$id){
              id,
              name,
              address,
              mobile,
              email,
              userId,
              user_uid,
              village_id,
              from_date,
              to_date,
              event_name,
              event_address,
              relation,
              route_info,
              signature_url,
              iagree,
              remarks,
              status,
              condition_to_follow
            }
          }
      `,
        veriables: {
            id: parseInt(id!)
        },
    });


    const village = await ApiCall({
        query: `
        query getVillageById($id:Int!){
            getVillageById(id:$id){
              id,
              name,
            }
          }
      `,
        veriables: {
            id: parseInt(data.data.getRoadshowById.village_id!)
        },
    });

    const common = await ApiCall({
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
              event_date,
              number,
              form_status,
              query_status, 
            }
          }
      `,
        veriables: {
            searchCommonInput: {
                form_id: parseInt(id!),
                form_type: "ROADSHOW"
            }
        },
    });


    return json({
        id: id,
        user: cookie,
        form: data.data.getRoadshowById,
        village: village.data.getVillageById.name,
        common: common.data.searchCommon
    });
}

const RoadshowPdfView = (): JSX.Element => {

    const loader = useLoaderData();
    const form = loader.form;
    const village = loader.village;

    // Register FontF
    Font.register({
        family: "Roboto",
        src:
            "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
    });
    Font.register({
        family: "Noto",
        src:
            "/fonts/NotoSans-Regular.ttf"
    });

    const styles = StyleSheet.create({
        body: {
            paddingTop: 15,
            paddingBottom: 35,
            paddingHorizontal: 30,
        },

        title: {
            marginTop: "10px",
            marginBottom: "10px",
            fontSize: 10,
            textAlign: 'center',
            color: 'grey',
            width: "100%"
        },
        divider: {
            height: "40px"
        },
        dividertwo: {
            height: "25px"
        },
        dividerthree: {
            height: "15px"
        },
        subtitle: {
            fontSize: 12,
            textAlign: 'left',
            color: 'grey',
            width: "100%"
        },
        header: {
            marginTop: "15px",
            marginBottom: "10px",
            backgroundColor: "#c1dafe",
            paddingVertical: '8px',
            fontSize: "14px",
            color: "#1f2937",
            textAlign: "center",
            fontWeight: "normal"
        },
        myflex: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            borderBottom: "1px solid #6b7280",
        },

        text: {
            fontSize: "12px",
            fontWeight: 'normal',
            color: "#374151",
            padding: "4px 0px",
        },

        img: {
            width: "140px",
            height: "60px",
            objectFit: "fill",
            objectPosition: "center",
        },

        flexbox: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            marginTop: "15px",
            alignItems: 'center'
        },
        flexbox1: {
            flex: 1,
            fontSize: "12px",
            fontWeight: 'normal',
            color: "#374151",
        },
        flexbox2: {
            flex: 2,
            fontSize: "12px",
            fontWeight: 'normal',
            color: "#374151",
        },
        flexbox3: {
            flex: 1,
            fontSize: "12px",
            fontWeight: 'normal',
            color: "#374151",
        },
        imgone: {
            width: "80px",
            height: "80px",
            objectFit: "fill",
            objectPosition: "center",
        },
        imgtwo: {
            width: "240px",
            height: "140px",
            objectFit: "fill",
            objectPosition: "center",
            margin: "0 auto 0"
        },
        imgthree: {
            width: "140px",
            height: "80px",
            objectFit: "fill",
            objectPosition: "center",
        },
        imgsign: {
            width: "120px",
            height: "60px",
            objectFit: "fill",
            objectPosition: "center",
            margin: "0 auto 0"
        },
        imgstamp: {
            width: "100px",
            height: "100px",
            objectFit: "fill",
            objectPosition: "center",
            margin: "0 auto 0"
        },
        signtext: {
            fontSize: "14px",
            fontWeight: 'normal',
            color: "#000000",
            textAlign: 'center'
        },
        heading: {
            fontSize: 24,
            textAlign: 'center',
            fontFamily: "Roboto",
            fontWeight: 'bold'
        },
        datetext: {
            color: "#000000",
            fontSize: 12,
            textAlign: 'right',
            fontFamily: "Roboto",
            fontWeight: 'bold'
        },
        filenametext: {
            color: "#000000",
            fontSize: 12,
            textAlign: 'left',
            fontFamily: "Roboto",
            fontWeight: 'bold'
        },
        para: {
            color: "#000000",
            fontSize: 12,
            fontWeight: 'bold',
            fontFamily: "Roboto",
            margin: "0px 20px"
        },
        centerpara: {
            color: "#000000",
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: "center"
        },

    });



    const RoadshowPdf = () => (
        <Document>
            <Page style={styles.body} size={'A4'} >
                <View fixed>
                    <View style={styles.flexbox} >
                        <View style={styles.flexbox1}>
                            <Image src={"/images/topleft.png"} style={styles.imgone} ></Image>
                        </View>
                        <View style={styles.flexbox2}>
                            <Image src={"/images/topcenter.png"} style={styles.imgtwo} ></Image>
                        </View>
                        <View style={styles.flexbox3}>
                            <Image src={"/images/topright.png"} style={styles.imgthree} ></Image>
                        </View>
                    </View>
                    <View style={styles.dividertwo}></View>
                </View>

                <View style={styles.flexbox}>
                    <View style={styles.flexbox1}>
                        <Text style={styles.filenametext}>No.  EST-RD-{`0000${form.id}`.substring(`0000${form.id}`.length - 4)}</Text>
                    </View>
                    <View style={styles.flexbox2}>
                    </View>
                    <View style={styles.flexbox3}>
                        <Text style={styles.datetext}>Date : {new Date(form.from_date).toJSON().slice(0, 10).split('-').reverse().join('/')}</Text>
                    </View>
                </View>
                <View style={styles.dividertwo}></View>
                <View>
                    <Text style={styles.heading}>Roadshow Event Permission</Text>
                </View>

                <View style={styles.dividerthree}></View>
                <View>
                    <Text style={styles.para}>Ref : EST-RD-{`0000${form.id}`.substring(`0000${form.id}`.length - 4)}
                    </Text>
                </View>
                <View>
                    <Text style={styles.para}>Subject: Permission for Roadshow Event
                    </Text>
                </View>

                <View style={styles.dividertwo}></View>
                <View>
                    <Text style={styles.para}>&nbsp;&nbsp;&nbsp;&nbsp; Please see the representation cited, wherein it has been requested to grant permission for a Peaceful Roadshow Event At {form.event_address} through the following route {form.route_info} From {new Date(form.from_date).toJSON().slice(0, 10).split('-').reverse().join('/')} To {new Date(form.to_date).toJSON().slice(0, 10).split('-').reverse().join('/')}.
                    </Text>
                </View>
                {form.query_status == "APPROVED" ?
                    <>
                        <View style={styles.dividerthree}></View>
                        <View>
                            <Text style={styles.centerpara}> Hence the request has been examined, considered and "Approved" : .
                            </Text>
                        </View>
                    </> :
                    form.query_status == "REJCTED" ?
                        <>
                            <View style={styles.dividerthree}></View>
                            <View>
                                <Text style={styles.centerpara}>Hence the request has been examined, Considered and Rejected
                                </Text>
                            </View>
                        </>
                        : null
                }


                <View style={styles.dividerthree}></View>
                <View>
                    <Text style={styles.heading}>Please abide by the below mentioned conditions</Text>
                </View>

                <View style={styles.dividerthree}></View>
                <View>
                    <Text style={styles.para}>{form.condition_to_follow.replace(/\\n/g, "\n")}
                    </Text>
                </View>
                {/* <View>
                    <Text style={styles.para}>Noise Control: - The event must adhere to noise pollution guidelines set by the local authority. Sound levels should not exceed [X] decibels during the event, especially during late hours. Live music and amplified sound should be directed away from neighboring properties to minimize noise disturbance.
                    </Text>
                </View>
                <View style={styles.dividerthree}></View>
                <View>
                    <Text style={styles.para}>Event Timings: - Events should not commence before [X] AM and should conclude by [X] PM. This timing is to prevent disturbance during late hours.Setup and dismantling activities should take place within specified timeframes to minimize disruption to the neighborhood.
                    </Text>
                </View>
                <View style={styles.dividerthree}></View>
                <View>
                    <Text style={styles.para}>Parking and Traffic Management: - Sufficient parking arrangements must be made within the premises or nearby designated areas to avoid congestion in the neighborhood. Traffic management measures should be implemented to ensure smooth flow and prevent road blockages.
                    </Text>
                </View>
                <View style={styles.dividerthree}></View>
                <View>
                    <Text style={styles.para}>Waste Management: - Event organizers are responsible for proper waste disposal. Trash generated during the event should be managed and disposed of appropriately. Cleanup should be completed promptly after the event's conclusion.
                    </Text>
                </View>
                <View style={styles.dividerthree}></View>
                <View>
                    <Text style={styles.para}>Security and Safety: - Adequate security measures should be in place to prevent unauthorized entry and ensure the safety of attendees.Emergency exits and evacuation plans should be clearly marked and communicated to attendees.
                    </Text>
                </View>
                <View style={styles.dividerthree}></View>
                <View>
                    <Text style={styles.para}>Guest Limit: - The maximum number of attendees allowed should not exceed [X] individuals. This limit is set to prevent overcrowding and maintain safety.
                    </Text>
                </View>
                <View style={styles.dividerthree}></View>
                <View>
                    <Text style={styles.para}>Public Nuisance: - The event should not cause any form of public nuisance or disturbance to the residents in the vicinity. Behavior and activities that may create public disturbances, such as loud arguments or disorderly conduct, should be avoided.
                    </Text>
                </View>
                <View style={styles.dividerthree}></View>
                <View>
                    <Text style={styles.para}>Compliance with Local Regulations: - All local regulations and guidelines related to health, safety, building codes, and event hosting must be strictly followed. Any additional permits required, such as alcohol permits, should be obtained as needed.
                    </Text>
                </View>
                <View style={styles.dividerthree}></View>
                <View>
                    <Text style={styles.para}>Neighborhood Notification: - The hosting citizen should inform neighboring residents about the upcoming event and provide them with contact information for addressing any concerns.
                    </Text>
                </View>
                <View style={styles.dividerthree}></View>
                <View>
                    <Text style={styles.para}>Environmental Impact: - Steps should be taken to minimize the environmental impact of the event, such as avoiding excessive lighting and unnecessary resource consumption.
                    </Text>
                </View>
                <View style={styles.dividerthree}></View>
                <View>
                    <Text style={styles.para}>Consequences of Non-Compliance: - Failure to adhere to these conditions may result in fines, penalties, or legal action as per local laws and regulations.
                    </Text>
                </View> */}


                <View style={styles.flexbox}>
                    <View style={styles.flexbox1}>
                    </View>
                    <View style={styles.flexbox2}>

                    </View>
                    <View style={styles.flexbox3}>
                        <View>
                            <Image src={"/images/stamp.png"} style={styles.imgstamp} ></Image>
                        </View>
                        <View>
                            <Image src={"/images/signtwo.jpg"} style={styles.imgsign} ></Image>
                        </View>
                        <Text style={styles.signtext}>Collector</Text>
                    </View>
                </View>


            </Page>
        </Document >
    );

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true);
    }, [])


    return (
        <>
            {isClient ?
                < div className='w-full h-scree'>
                    <PDFViewer style={{ width: '100%', height: '100vh' }}>
                        <RoadshowPdf />
                    </PDFViewer>
                </div >
                :
                <div className='h-screen w-full grid place-items-center bg-blue-500'>
                    <p className='text-white text-6xl'>Loading...</p>
                </div>}
        </>
    );

}

export default RoadshowPdfView;
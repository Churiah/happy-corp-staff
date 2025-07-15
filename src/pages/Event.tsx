import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonAlert, useIonModal, useIonPopover } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, chevronBackOutline, closeOutline, key, locateOutline, locationSharp, notificationsOutline, remove, searchOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import BranchModal from '../components/ModalBrand';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

type EventType = {
    name: string;
    images: string;
    active: string;
    content: string;
};
const Event: React.FC = () => {
    const history = useHistory();
    const { t, i18n } = useTranslation();
    const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);
    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            
            event.detail.complete();
        }, 2000);
    }
    const [present, dismiss] = useIonPopover(BranchModal, {
        onDismiss: () => dismiss(),
    });

    const [presentAlert] = useIonAlert();

    const [listEvent, setListEvent] = useState<EventType[]>([]);
    useEffect(() => {
        const token = localStorage.getItem("happy-corp-staff-token");
        const brand = localStorage.getItem("happy-corp-staff-brand") || "1";
        const data = {
            "token": token,
            "brand": brand
        }
        const api = axios.create({
            baseURL: "https://booking.happycorp.com.vn/api",
        });
        api.post("/events", data, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.data.status === "error") {
                dismiss();
                presentAlert({
                    cssClass: 'custom-alert',
                    header: "ERROR",
                    message: res.data.content,
                    buttons: ["OK"],
                });

            } else if (res.data.status === "success") {
                console.log(res.data.data);
                setListEvent(res.data.data);
            }
        })
            .catch((error) => {
                dismiss();
                presentAlert({
                    cssClass: 'custom-alert',
                    header: "ERROR",
                    message: "Unable to connect to server",
                    buttons: ["OK"],
                });

            });
    }, [])

    const [detail, setDetail] = useState<EventType>();
    function detailOnclick(e: any) {
        const token = localStorage.getItem("happy-corp-staff-token");
        const brand = localStorage.getItem("happy-corp-staff-brand") || "1";
        const data = {
            "token": token,
            "brand": brand,
            "active": e
        }
        const api = axios.create({
            baseURL: "https://booking.happycorp.com.vn/api",
        });
        api.post("/events/" + e, data, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.data.status === "error") {
                dismiss();
                presentAlert({
                    cssClass: 'custom-alert',
                    header: "ERROR",
                    message: res.data.content,
                    buttons: ["OK"],
                });

            } else if (res.data.status === "success") {
                console.log(res.data.data);
                setDetail(res.data.data);
                setIsModalOpenDetail(true);
            }
        })
            .catch((error) => {
                dismiss();
                presentAlert({
                    cssClass: 'custom-alert',
                    header: "ERROR",
                    message: "Unable to connect to server",
                    buttons: ["OK"],
                });

            });
    }
    return (
        <IonPage>
            {/* <IonHeader style={{ backdropFilter: "blur(50px)" }}>
                <IonToolbar className='shadow-none border border-0'>
                    <IonRow className='d-flex justify-content-between align-items-center p-1'>
                        <img src='../image/happy-corp-logo.png' alt='logo' className='' style={{ width: "70px" }}></img>
                        <div className='d-flex align-items-center'>
                            <button onClick={() => present()} className='rounded-circle p-2 bg-switch-box' style={{ width: "35px", height: "35px" }}> <IonIcon icon={businessOutline} size='15px'></IonIcon></button>
                            <Link to='/user-notification'>
                                <button className='rounded-circle p-2 bg-switch-box ms-2' style={{ width: "35px", height: "35px" }}> <IonIcon icon={notificationsOutline} size='15px'></IonIcon></button>
                            </Link>
                            <IonMenuToggle menu="end" autoHide={false}>
                                <img src='https://static-cse.canva.com/blob/1992462/1600w-vkBvE1d_xYA.jpg' alt='avatar' className='rounded-circle ms-2' style={{ width: "40px", height: "40px" }}></img>
                            </IonMenuToggle>
                        </div>
                    </IonRow>
                </IonToolbar>
            </IonHeader> */}
            <IonContent fullscreen className='page-background'>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonGrid className='p-3 pt-4'>
                    <IonRow className='d-flex align-items-center '>
                        <button className='text-center bg-none rounded-circle me-2' style={{ width: "40px", height: "40px" }} onClick={() => history.goBack()}>
                            <IonIcon icon={chevronBackOutline} color='dark' style={{ fontSize: "22px" }} />
                        </button>
                        <div className=' fw-bold ' style={{ fontSize: "17px" }}>{t("su-kien")}</div>
                    </IonRow>
                    {listEvent && listEvent.map((events, key) => {
                        return (
                            <>
                                <IonCard className='m-0 p-3 rounded-4 mt-3 shadow-sm ' onClick={() => { detailOnclick(events.active) }}>
                                    <div className='fw-bold fs-15'>{events.name}</div>
                                    <img src={`https://system.happycorp.com.vn/${events.images}`} className='w-100 rounded-4 mt-2'></img>
                                </IonCard>
                            </>
                        )
                    })}
                </IonGrid>

            </IonContent>

            <IonModal isOpen={isModalOpenDetail} onDidDismiss={() => { setIsModalOpenDetail(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className=' p-0 pb-3' >
                    <div className='text-end me-3 mt-3 fixed-header' ><IonIcon onClick={() => setIsModalOpenDetail(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon></div>
                    <IonGrid className='p-3 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "85vh"
                    }}>
                        {detail &&
                            <>
                                <div className='mb-3 fs-5 fw-bold text-center text-pink'>{detail.name}</div>
                                <img src={`https://system.happycorp.com.vn/${detail.images}`} className='w-100 rounded-4'></img>
                                <div className="mt-3">{detail.content}</div>
                            </>
                        }
                    </IonGrid>


                </div>

            </IonModal>

        </IonPage>
    );
};

export default Event;

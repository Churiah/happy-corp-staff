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
type EventContact = {
    name: string;
    active: string;
    avatar: string;
};
const Chat: React.FC = () => {
    const history = useHistory();
    const { t, i18n } = useTranslation();
    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }

    function detail(e: string) {
        history.push("/chat-detail");
    }
    const [present, dismiss] = useIonPopover(BranchModal, {
        onDismiss: () => dismiss(),
    });

    const [presentAlert] = useIonAlert();
    const [listContact, setListContact] = useState<EventContact[]>([]);
    useEffect(() => {
        const token = localStorage.getItem("happy-corp-staff-token");
        const data = {
            "token": token,
        }
        const api = axios.create({
            baseURL: "https://booking.happycorp.com.vn/api",
        });
        api.post("/contact", data, {
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
                setListContact(res.data.data);
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
                <div className="card-header mt-3 px-3">
                    <ul
                        className="nav nav-pills row d-flex justify-content-around"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className="nav-item col-4 px-0" role="presentation">
                            <button
                                className="nav-link active fs-13 d-flex align-items-center justify-content-center"
                                id="pills-chat-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#nav-chat"
                                type="button"
                                role="tab"
                                aria-controls="pills-chat"
                                aria-selected="true"
                            >
                                Tin nhắn
                            </button>
                        </li>
                        <li className="nav-item col-4 px-0" role="presentation">
                            <button
                                className="nav-link fs-13  d-flex align-items-center justify-content-center"
                                id="pills-friend-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#nav-friend"
                                type="button"
                                role="tab"
                                aria-controls="pills-friend"
                                aria-selected="false"
                            >
                                Bạn bè
                            </button>
                        </li>
                    </ul>
                </div>
                <form className=" tab-content overflowY pt-2 px-2">
                    <div className="tab-pane active" id="nav-chat">
                        <IonGrid className='p-3'>
                            <IonRow className='d-flex align-items-center '>
                                <IonCol size='5' className=' fw-bold ' style={{ fontSize: "17px" }}>Tin nhắn</IonCol>
                                <IonCol size='7' className=" d-flex align-items-center p-2 bg-switch-box rounded-pill shadow-sm" style={{ height: '45px' }}>

                                    <input
                                        type="text"
                                        className="form-control border-0 shadow-none bg-input-search"
                                        placeholder={t("tim-kiem")}
                                        style={{
                                            flex: 1,
                                            borderRadius: '50px',
                                        }}
                                    />
                                    <IonIcon icon={searchOutline} className="ms-3 me-2 " style={{ fontSize: '20px' }} />
                                </IonCol>
                            </IonRow>
                            <IonGrid>
                                <IonRow className='d-flex align-items-center fs-13 mt-3' >
                                    <img src='https://happy-booking.eclo.io/datas/avatar/avatar1.png' className='rounded-circle col-2' style={{ width: "45px", height: "45px" }}></img>
                                    <div className='col-10 ms-2'>
                                        <div className='d-flex align-items-center justify-content-between mb-1'>
                                            <div className='fw-bold fs-15'>Mia</div>
                                            <div>3 phút</div>
                                        </div>
                                        <div style={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis"
                                        }}>
                                            Hiện tại, tôi không biết bạn là ai. Bạn có thể giới thiệu về bản thân mình được không?
                                        </div>
                                    </div>
                                </IonRow>
                                <IonRow className='border-50 my-3'></IonRow>
                                <IonRow className='d-flex align-items-center fs-13 mt-3' >
                                    <img src='https://happy-booking.eclo.io/datas/avatar/avatar1.png' className='rounded-circle col-2' style={{ width: "45px", height: "45px" }}></img>
                                    <div className='col-10 ms-2'>
                                        <div className='d-flex align-items-center justify-content-between mb-1'>
                                            <div className='fw-bold fs-15'>Mia</div>
                                            <div>3 phút</div>
                                        </div>
                                        <div style={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis"
                                        }}>
                                            Hiện tại, tôi không biết bạn là ai. Bạn có thể giới thiệu về bản thân mình được không?
                                        </div>
                                    </div>
                                </IonRow>
                                <IonRow className='border-50 my-3'></IonRow>
                                <IonRow className='d-flex align-items-center fs-13 mt-3' >
                                    <img src='https://happy-booking.eclo.io/datas/avatar/avatar1.png' className='rounded-circle col-2' style={{ width: "45px", height: "45px" }}></img>
                                    <div className='col-10 ms-2'>
                                        <div className='d-flex align-items-center justify-content-between mb-1'>
                                            <div className='fw-bold fs-15'>Mia</div>
                                            <div>3 phút</div>
                                        </div>
                                        <div style={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis"
                                        }}>
                                            Hiện tại, tôi không biết bạn là ai. Bạn có thể giới thiệu về bản thân mình được không?
                                        </div>
                                    </div>
                                </IonRow>
                                <IonRow className='border-50 my-3'></IonRow>
                            </IonGrid>

                        </IonGrid>

                    </div>
                    <div className="tab-pane" id="nav-friend">
                        <IonGrid className='p-3 '>
                            <IonRow className='d-flex align-items-center '>
                                <IonCol size='5' className=' fw-bold ' style={{ fontSize: "17px" }}>Bạn bè</IonCol>
                                <IonCol size='7' className=" d-flex align-items-center p-2 bg-switch-box rounded-pill shadow-sm" style={{ height: '45px' }}>

                                    <input
                                        type="text"
                                        className="form-control border-0 shadow-none bg-input-search"
                                        placeholder={t("tim-kiem")}
                                        style={{
                                            flex: 1,
                                            borderRadius: '50px',
                                        }}
                                    />
                                    <IonIcon icon={searchOutline} className="ms-3 me-2 " style={{ fontSize: '20px' }} />
                                </IonCol>
                            </IonRow>
                            <IonGrid>
                                {listContact && listContact.map((contact, key) => {
                                    return (
                                        <>
                                            <IonRow className='d-flex align-items-center fs-13 mt-3' onClick={() => { detail(contact.active) }}>
                                                <img src={`https://booking.happycorp.com.vn/${contact.avatar}`} className='rounded-circle col-2' style={{ width: "45px", height: "45px" }}></img>
                                                <div className='col-10 ms-3'>
                                                    <div className='fs-15 fw-bold mb-1'>
                                                        {contact.name}
                                                    </div>
                                                </div>
                                            </IonRow>
                                            <IonRow className='border-50 my-3'></IonRow>
                                        </>
                                    )
                                })}

                            </IonGrid>

                        </IonGrid>

                    </div>
                </form>


            </IonContent>



        </IonPage>
    );
};

export default Chat;

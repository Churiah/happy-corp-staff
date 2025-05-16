import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal, useIonPopover } from '@ionic/react';
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
const Chat: React.FC = () => {
    const history = useHistory();

    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }

    function detail(){
        history.push("/chat-detail");
    }
    const [present, dismiss] = useIonPopover(BranchModal, {
        onDismiss: () => dismiss(),
    });
    return (
        <IonPage>
            <IonHeader style={{ backdropFilter: "blur(50px)" }}>
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
            </IonHeader>
            <IonContent fullscreen className='page-background'>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonGrid className='p-3 pt-4'>
                    <IonRow className='d-flex align-items-center '>
                        <IonCol size='5' className=' fw-bold ' style={{ fontSize: "17px" }}>Tin nhắn</IonCol>
                        <IonCol size='7' className=" d-flex align-items-center p-2 bg-switch-box rounded-pill shadow-sm" style={{ height: '45px' }}>
                           
                            <input
                                type="text"
                                className="form-control border-0 shadow-none bg-input-search"
                                placeholder="Tìm kiếm"
                                style={{
                                    flex: 1,
                                    borderRadius: '50px',
                                }}
                            />
                             <IonIcon icon={searchOutline} className="ms-3 me-2 " style={{ fontSize: '20px' }} />
                        </IonCol>
                    </IonRow>
                    <IonGrid>
                        <IonRow className='d-flex align-items-center fs-13 mt-3' onClick={()=>{detail()}}>
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
                        <IonRow className='d-flex align-items-center fs-13 mt-3' onClick={()=>{detail()}}>
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
                        <IonRow className='d-flex align-items-center fs-13 mt-3' onClick={()=>{detail()}}>
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

            </IonContent>



        </IonPage>
    );
};

export default Chat;

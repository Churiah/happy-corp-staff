import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, chevronBackOutline, key, keyOutline, listOutline, locateOutline, locationSharp, notificationsOutline, personOutline, remove, searchOutline, settingsOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useHistory } from 'react-router';
import BranchModal from '../components/ModalBrand';
import { Link } from 'react-router-dom';
const UserNotification: React.FC = () => {
    const history = useHistory();

    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }
   const [present, dismiss] = useIonModal(BranchModal, {
        onDismiss: () => dismiss(),
        cssClass: 'brand-modal',
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


                    <IonCard className='rounded-4 m-0 p-3 shadow-sm fs-13  mt-3'>
                        <input type='text' className=' rounded-3 fs-13 border border-0 w-100' style={{ backgroundColor: "#edf2ff", padding: "10px" }} placeholder='Nhập để tìm kiếm...'></input>
                        <IonList>
                            <IonItemSliding>
                                <IonItem button={true}>

                                    <IonLabel>Rick Astley</IonLabel>
                                </IonItem>
                                <IonItemOptions slot="end">
                                    <IonItemOption color="danger" expandable={true}>
                                        <IonIcon slot="icon-only" icon={trashOutline}></IonIcon>
                                    </IonItemOption>
                                </IonItemOptions>
                            </IonItemSliding>
                        </IonList>


                    </IonCard>

                    <IonRow className='fs-13 fw-bold mt-3'>Tài khoản</IonRow>
                    <IonCard className='rounded-4 m-0 p-3 shadow-sm fs-13  mt-3'>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={personOutline} className='me-2'></IonIcon> Thông tin
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={notificationsOutline} className='me-2'></IonIcon> Thông báo
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={listOutline} className='me-2'></IonIcon> Ngật ký
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={settingsOutline} className='me-2'></IonIcon> Cài đặt
                        </IonRow>
                    </IonCard>
                </IonGrid>

            </IonContent>

        </IonPage>
    );
};

export default UserNotification;

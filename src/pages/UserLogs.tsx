import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal, useIonPopover } from '@ionic/react';
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
import { useTranslation } from 'react-i18next';
const UserLogs: React.FC = () => {
    const history = useHistory();
    const { t, i18n } = useTranslation();
    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }

    const [present, dismiss] = useIonPopover(BranchModal, {
        onDismiss: () => dismiss(),
    });
    return (
        <IonPage>

            <IonContent fullscreen className='page-background'>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonGrid className='p-3 pt-4'>
                    <IonCard className='rounded-4 m-0 p-3 shadow-sm fs-13 mt-3'>
                        <IonAccordionGroup>
                            <IonAccordion value='1' className='rounded-4'>
                                <IonItem className='fs-13 rounded-4' slot="header">
                                    <IonLabel>
                                        <div ><span className='fw-bold text-pink'>Login </span>- IP:104.28.122.127</div>
                                        <div className='mt-2 '>Ngày: 14:00 05/05/2025</div>
                                    </IonLabel>

                                </IonItem>
                                <div className="ion-padding  rounded-bottom-3" slot="content">
                                    <IonRow className='d-flex justify-content-between align-items-center'>
                                        <div className='fw-bold'>Patch : </div> accounts
                                    </IonRow>
                                    <IonRow className='d-flex justify-content-between align-items-center mt-1'>
                                        <div className='fw-bold'>Hành động : </div> login
                                    </IonRow>
                                    <IonRow className='d-flex justify-content-between align-items-center mt-1'>
                                        <div className='fw-bold'>IP : </div> 104.28.122.127
                                    </IonRow>
                                    <IonRow className='d-flex justify-content-between align-items-center mt-1'>
                                        <div className='fw-bold'>URL : </div> https://happy-booking.eclo.io/users/logs
                                    </IonRow>
                                </div>
                            </IonAccordion>
                        </IonAccordionGroup>
                    </IonCard>

                    <IonRow className='fs-13 fw-bold mt-3'>Tài khoản</IonRow>
                    <IonCard className='rounded-4 m-0 p-3 shadow-sm fs-13 mt-3'>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={personOutline} className='me-2'></IonIcon> Thông tin
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={notificationsOutline} className='me-2'></IonIcon> Thông báo
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={listOutline} className='me-2'></IonIcon> Nhật ký
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

export default UserLogs;

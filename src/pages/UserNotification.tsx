import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal, useIonPopover } from '@ionic/react';
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
const UserNotification: React.FC = () => {
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
                <IonGrid className='p-3 pt-4'>
                    <IonRow className='d-flex align-items-center '>
                        <button className='text-center bg-none rounded-circle me-2' style={{ width: "40px", height: "40px" }} onClick={() => history.goBack()}>
                            <IonIcon icon={chevronBackOutline} color='dark' style={{ fontSize: "22px" }} />
                        </button>
                        <div className=' fw-bold ' style={{ fontSize: "17px" }}>{t("thong-bao")}</div>
                    </IonRow>

                    <IonList className='bg-none p-2'>
                        <IonRow className='fs-13'>
                            <div>
                                <div className='fw-bold d-flex align-items-center'>
                                    <div className='bg-danger rounded-circle me-2' style={{ width: "10px", height: "10px" }}></div>
                                    Tin nhắn
                                </div>
                                <div className='text-muted my-1'>2025-05-02 15:00</div>
                                <div>Xin chào bạn</div>
                            </div>
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='fs-13'>
                            <div>
                                <div className='fw-bold d-flex align-items-center'>
                                    <div className='bg-danger rounded-circle me-2' style={{ width: "10px", height: "10px" }}></div>
                                    Tin nhắn
                                </div>
                                <div className='text-muted my-1'>2025-05-02 15:00</div>
                                <div>Xin chào bạn</div>
                            </div>
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                    </IonList>


                    <IonRow className='d-flex justify-content-center fixed-bottom my-2'>
                        <button className='rounded-pill p-2 fs-13 text-white bg-pink'>{t("danh-dau-da-doc")}</button>
                    </IonRow>
                </IonGrid>

            </IonContent>

        </IonPage>
    );
};

export default UserNotification;

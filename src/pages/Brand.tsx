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
import BranchModal from '../components/ModalBrand';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

type EventBrand = {
    name: string;
    images: string;
    active: string;
    address: string;
    id: string;
    note: string;
};
const Brand: React.FC = () => {
    const history = useHistory();
    const { t, i18n } = useTranslation();
    const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);
    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }
    const [present, dismiss] = useIonPopover(BranchModal, {
        onDismiss: () => dismiss(),
    });

    const [presentAlert] = useIonAlert();
    const [listBrand, setListBrand] = useState<EventBrand[]>([]);
    useEffect(() => {
        const token = localStorage.getItem("happy-corp-staff-token");
        const data = {
            "token": token,
        }
        const api = axios.create({
            baseURL: "https://booking.happycorp.com.vn/api",
        });
        api.post("/brand", data, {
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
                console.log("MENU", res.data.data);
                setListBrand(res.data.data);
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

    const [detail, setDetail] = useState<EventBrand>();
    function detailOnclick(e: any) {
        const token = localStorage.getItem("happy-corp-staff-token");
        const data = {
            "token": token,
            "active": e
        }
        const api = axios.create({
            baseURL: "https://booking.happycorp.com.vn/api",
        });
        api.post("/brand/" + e, data, {
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
            <IonContent fullscreen className='page-background'>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonGrid className='p-3 pt-4'>
                    <IonRow className='d-flex align-items-center '>
                        <button className='text-center bg-none rounded-circle me-2' style={{ width: "40px", height: "40px" }} onClick={() => history.goBack()}>
                            <IonIcon icon={chevronBackOutline} color='dark' style={{ fontSize: "22px" }} />
                        </button>
                        <div className=' fw-bold ' style={{ fontSize: "17px" }}>{t("mha-hang")}</div>
                    </IonRow>
                    {listBrand && listBrand.map((brand, key) => {
                        return (
                            <>
                                <IonCard className='m-0 p-3 rounded-4 mt-3 shadow-sm ' onClick={() => { detailOnclick(brand.active) }}>
                                    <img src={`https://system.happycorp.com.vn/${brand.images}`} className='w-100 rounded-4'></img>
                                    <div className='fw-bold fs-6 mt-3'>{brand.name}</div>
                                    <div className='fs-13 mt-1'>{brand.address}</div>
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
                                <img src={`https://system.happycorp.com.vn/${detail.images}`} className='w-100 rounded-4'></img>
                                <div className="mt-3">
                                    <p>{detail.name}</p>
                                    <p>{detail.address}</p>
                                </div>
                            </>
                        }
                    </IonGrid>
                </div>
            </IonModal>

        </IonPage>
    );
};

export default Brand;

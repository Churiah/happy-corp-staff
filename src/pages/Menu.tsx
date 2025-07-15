import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonAlert, useIonModal, useIonPopover } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, chevronBackOutline, closeOutline, key, keyOutline, listOutline, locateOutline, locationSharp, notificationsOutline, personOutline, remove, searchOutline, settingsOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
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

type EventMenu = {
    name: string;
    images: string;
    active: string;
    price: string;
    type: string;
    categorys_name: string;
    categorys: string;
    content: string;
};
const Menu: React.FC = () => {
    const { t, i18n } = useTranslation();
    const history = useHistory();
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
    const [listMenu, setListMenu] = useState<EventMenu[]>([]);
    useEffect(() => {
        const token = localStorage.getItem("happy-corp-staff-token");
        const brand = localStorage.getItem("happy-corp-staff-brand") || "1";
        const data = {
            "token": token,
            "id_brand": brand
        }

        const api = axios.create({
            baseURL: "https://booking.happycorp.com.vn/api",
        });
        api.post("/menu", data, {
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
                setListMenu(res.data.data);
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

    const servicesMenu = listMenu?.filter(item => item.type === 'services');
    const servicesMenu1 = listMenu?.filter(item => item.type === 'menu');
    const servicesMenu2 = listMenu?.filter(item => item.type === 'combos');

    // Lấy danh sách các category duy nhất
    const uniqueCategories = [...new Set(servicesMenu?.map(item => item.categorys_name))];
    const uniqueCategoriesMenu = [...new Set(servicesMenu1?.map(item => item.categorys_name))];
    const uniqueCategoriesCombo = [...new Set(servicesMenu2?.map(item => item.categorys_name))];

    const [detail, setDetail] = useState<EventMenu>();
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
        api.post("/menu/" + e, data, {
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
                <IonGrid className='p-3 pt-3'>
                    <IonRow className='d-flex align-items-center '>
                        <button className='text-center bg-none rounded-circle me-2' style={{ width: "40px", height: "40px" }} onClick={() => history.goBack()}>
                            <IonIcon icon={chevronBackOutline} color='dark' style={{ fontSize: "22px" }} />
                        </button>
                        <div className=' fw-bold ' style={{ fontSize: "17px" }}>{t("thuc-don")}</div>
                    </IonRow>
                    <div className="card-header mt-3 px-3">
                        <ul
                            className="nav nav-pills row d-flex justify-content-around"
                            id="pills-tab"
                            role="tablist"
                        >
                            <li className="nav-item col-4 px-0" role="presentation">
                                <button
                                    className="nav-link active fs-13 d-flex align-items-center justify-content-center"
                                    id="pills-1-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#nav-1"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-1"
                                    aria-selected="true"
                                >
                                    Dịch vụ
                                </button>
                            </li>
                            <li className="nav-item col-4 px-0" role="presentation">
                                <button
                                    className="nav-link fs-13  d-flex align-items-center justify-content-center"
                                    id="pills-2-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#nav-2"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-2"
                                    aria-selected="false"
                                >
                                    Món ăn
                                </button>
                            </li>
                            <li className="nav-item col-4 px-0" role="presentation">
                                <button
                                    className="nav-link fs-13  d-flex align-items-center justify-content-center"
                                    id="pills-3-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#nav-3"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-3"
                                    aria-selected="false"
                                >
                                    Combo
                                </button>
                            </li>
                        </ul>
                    </div>
                    <form className=" tab-content overflowY pt-2 px-2">
                        <div className="tab-pane active" id="nav-1">
                            <IonAccordionGroup multiple>
                                {uniqueCategories.map((category, idx) => (
                                    <IonAccordion key={idx} value={category} className='rounded-4 bg-transparent mt-3'>
                                        <IonItem lines="none" className='fs-13 rounded-4 bg-white' slot="header">
                                            <IonLabel className='fw-bold py-2'>
                                                {category}
                                            </IonLabel>
                                        </IonItem>
                                        <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                            <IonRow className='d-flex align-items-center'>
                                                {servicesMenu
                                                    ?.filter(menu => menu.categorys_name === category)
                                                    .map((menuItem, index) => (
                                                        <IonCol size='6'>
                                                            <IonCard className='shadow-sm rounded-4 m-0 p-2 ' onClick={() => { detailOnclick(menuItem.active) }}>
                                                                {menuItem.images ?
                                                                    <img src={`https://system.happycorp.com.vn/${menuItem.images}`} className='w-100 rounded-4 p-1'></img>
                                                                    :
                                                                    <img src="../image/no-images.png" className='w-100 rounded-4 p-1 bg-white'></img>
                                                                }
                                                                <div className='mt-1 fw-bold ms-1'>{menuItem.name}</div>
                                                                <div className='ms-1'>{menuItem.price.toLocaleString()}đ</div>
                                                            </IonCard>
                                                        </IonCol>
                                                    ))}
                                            </IonRow>
                                        </div>
                                    </IonAccordion>
                                ))}
                            </IonAccordionGroup>
                        </div>
                        <div className="tab-pane active" id="nav-2">
                            <IonAccordionGroup multiple>
                                {uniqueCategoriesMenu.map((category, idx) => (
                                    <IonAccordion key={idx} value={category} className='rounded-4 bg-transparent mt-3'>
                                        <IonItem lines="none" className='fs-13 rounded-4 bg-white' slot="header">
                                            <IonLabel className='fw-bold py-2'>
                                                {category}
                                            </IonLabel>
                                        </IonItem>
                                        <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                            <IonRow className='d-flex align-items-center'>
                                                {servicesMenu1
                                                    ?.filter(menu => menu.categorys_name === category)
                                                    .map((menuItem, index) => (
                                                        <IonCol size='6'>
                                                            <IonCard className='shadow-sm rounded-4 m-0 p-2 ' onClick={() => { detailOnclick(menuItem.active) }}>
                                                                {menuItem.images ?
                                                                    <img src={`https://system.happycorp.com.vn/${menuItem.images}`} className='w-100 rounded-4 p-1'></img>
                                                                    :
                                                                    <img src="../image/no-images.png" className='w-100 rounded-4 p-1 bg-white'></img>
                                                                }
                                                                <div className='mt-1 fw-bold ms-1'>{menuItem.name}</div>
                                                                <div className='ms-1'>{menuItem.price.toLocaleString()}đ</div>
                                                            </IonCard>
                                                        </IonCol>
                                                    ))}
                                            </IonRow>
                                        </div>
                                    </IonAccordion>
                                ))}
                            </IonAccordionGroup>
                        </div>
                        <div className="tab-pane active" id="nav-3">
                            <IonAccordionGroup multiple>
                                {uniqueCategoriesCombo.map((category, idx) => (
                                    <IonAccordion key={idx} value={category} className='rounded-4 bg-transparent mt-3'>
                                        <IonItem lines="none" className='fs-13 rounded-4 bg-white' slot="header">
                                            <IonLabel className='fw-bold py-2'>
                                                {category}
                                            </IonLabel>
                                        </IonItem>
                                        <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                            <IonRow className='d-flex align-items-center'>
                                                {servicesMenu2
                                                    ?.filter(menu => menu.categorys_name === category)
                                                    .map((menuItem, index) => (
                                                        <IonCol size='6'>
                                                            <IonCard className='shadow-sm rounded-4 m-0 p-2 ' onClick={() => { detailOnclick(menuItem.active) }}>
                                                                {menuItem.images ?
                                                                    <img src={`https://system.happycorp.com.vn/${menuItem.images}`} className='w-100 rounded-4 p-1'></img>
                                                                    :
                                                                    <img src="../image/no-images.png" className='w-100 rounded-4 p-1 bg-white'></img>
                                                                }
                                                                <div className='mt-1 fw-bold ms-1'>{menuItem.name}</div>
                                                                <div className='ms-1'>{menuItem.price.toLocaleString()}đ</div>
                                                            </IonCard>
                                                        </IonCol>
                                                    ))}
                                            </IonRow>
                                        </div>
                                    </IonAccordion>
                                ))}
                            </IonAccordionGroup>
                        </div>
                    </form>
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
                                <IonRow className='d-flex justify-content-between align-items-center mt-3'>
                                    <div>
                                        <div className='fs-15'>{detail.name}</div>
                                        <div>{detail.price.toLocaleString()}đ</div>
                                    </div>
                                    <div>
                                        <button className='p-3 bg-pink rounded-pill text-white'>Đặt món</button>
                                        <button className='p-3 bg-pink rounded-pill text-white ms-2'>Chia sẻ</button>
                                    </div>
                                </IonRow>
                                <IonRow className='d-flex align-items-center mt-3'>
                                    <div className='bg-pink rounded-circle' style={{ width: "20px", height: "20px" }}></div>
                                    <div className='fs-13 fw-bold ms-2'>Mô tả</div>
                                </IonRow>
                                <div className="mt-3">
                                    {detail.content}
                                </div>
                            </>
                        }
                    </IonGrid>
                </div>
            </IonModal>

        </IonPage>
    );
};

export default Menu;

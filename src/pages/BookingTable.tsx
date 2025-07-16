import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRadio, IonRadioGroup, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonAlert, useIonModal, useIonPopover } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, chevronBackOutline, chevronForwardOutline, closeOutline, key, locateOutline, locationSharp, notificationsOutline, remove, searchOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
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
import moment from 'moment';
const BookingTable: React.FC = () => {
    const history = useHistory();
    const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const { t, i18n } = useTranslation();

    const [step, setStep] = useState(1);
    const [presentAlert] = useIonAlert();
    function success() {
        presentAlert({
            header: 'Success',
            message: 'Đặt bàn thành công',
            buttons: [
                {
                    text: 'OK',
                    handler: () => {
                        history.push('/booking-completed');
                    },
                },
            ],


        });
    }

    const [present, dismiss] = useIonPopover(BranchModal, {
        onDismiss: () => dismiss(),
    });
    const menu = [
        {
            id: 1,
            name: "Cơm chiên",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 2,
            name: "Cơm chiên hải sản",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 3,
            name: "Lẩu hải sản",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 4,
            name: "Trái cây tươi mát",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 5,
            name: "Cơm chiên hải sản ssfsdfg",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 6,
            name: "Lẩu hải sản fdhgbfd",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        },
        {
            id: 7,
            name: "Trái cây tươi mát fgsd",
            content: "Cơm chiên dương châu hải sản tôm Cơm chiên dương châu",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymLAQV-vretS_sqeJndN9p9L9nXHCPFCKhw&s",

        }
    ]

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
                <IonGrid className='p-3'>
                    <IonRow className='d-flex align-items-center '>
                        <button className='text-center bg-none rounded-circle me-2' style={{ width: "40px", height: "40px" }} onClick={() => history.goBack()}>
                            <IonIcon icon={chevronBackOutline} color='dark' style={{ fontSize: "22px" }} />
                        </button>
                        <div className=' fw-bold ' style={{ fontSize: "17px" }}>{t("dat-ban")}</div>
                    </IonRow>
                    {step === 1 && (
                        <>
                            <IonCard className='m-0  p-3 py-4 rounded-4 mt-3 fs-13 shadow-sm '>
                                <IonRow className='fw-bold'>Thông tin phòng</IonRow>
                                <IonRow className='my-2'>Tên: <span className='fw-bold ms-2'>Happy 1</span></IonRow>
                                <IonRow> Ngày đặt: <span className='fw-bold ms-2'>{moment().format("DD/MM/YYYY")}</span></IonRow>

                            </IonCard>
                            <IonCard className='m-0  p-3 py-4 rounded-4 mt-3 fs-13 shadow-sm '>
                                <IonRow className='d-flex justify-content-between align-items-center'>
                                    <div className='fw-bold'>{t("thong-tin-khach-hang")}</div>
                                    <IonIcon icon={searchOutline} style={{ fontSize: "24px" }}></IonIcon>
                                </IonRow>
                                <IonRow className=' fs-13 fw-bold mt-3'>{t("ten")} <span className='text-danger ms-1'>(*)</span></IonRow>
                                <IonRow className='mt-2'>
                                    <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder={t("ten")}></input>
                                </IonRow>
                                <IonRow className=' fs-13 fw-bold mt-3'>{t("dien-thoai")} <span className='text-danger ms-1'>(*)</span></IonRow>
                                <IonRow className='mt-2'>
                                    <input type='tel' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder={t("dien-thoai")}></input>
                                </IonRow>
                                <IonRow className=' fs-13 fw-bold mt-3'>Giờ <span className='text-danger ms-1'>(*)</span></IonRow>
                                <IonRow className='mt-2'>
                                    <input type='time' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' ></input>
                                </IonRow>
                                <IonRow className=' fs-13 fw-bold mt-3'>Số người <span className='text-danger ms-1'>(*)</span></IonRow>
                                <IonRow className='mt-2'>
                                    <input type='number' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="0"></input>
                                </IonRow>
                                <IonRow className=' fs-13 fw-bold mt-3'>Yêu cầu</IonRow>
                                <IonRow className='mt-2'>
                                    <textarea rows={5} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder="Yêu cầu"></textarea>
                                </IonRow>
                            </IonCard>
                            <IonRow className='p-2 mt-3'>
                                <button className='rounded-pill bg-pink text-white fs-13 p-3 w-100' onClick={() => setStep(2)}>{t("tiep-tuc")}</button>
                            </IonRow>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <IonCard className='m-0 p-3 py-4  rounded-4 mt-3 fs-13 shadow-sm '>
                                <div className='fw-bold'>{t("thong-tin-dat-phong")}</div>
                                <IonRow className=' fs-13 fw-bold mt-3'>{t("ngay")} <span className='text-danger ms-1'>(*)</span></IonRow>
                                <IonRow className='mt-2'>
                                    <input type='date' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='dd/mm/yyyy'></input>
                                </IonRow>
                                <IonRow className=' fs-13 fw-bold mt-3'>{t("gio")} <span className='text-danger ms-1'>(*)</span></IonRow>
                                <IonRow className='mt-2'>
                                    <input type='time' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Điện thoại'></input>
                                </IonRow>
                                <IonRow className=' fs-13 fw-bold mt-3'>{t("so-nguoi")} <span className='text-danger ms-1'>(*)</span></IonRow>
                                <IonRow className='mt-2'>
                                    <input type='number' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='0'></input>
                                </IonRow>
                                <IonRow className=' fs-13 fw-bold mt-3'>{t("yeu-cau")}</IonRow>
                                <IonRow className='mt-2'>
                                    <textarea rows={5} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder={t("yeu-cau")}></textarea>
                                </IonRow>
                            </IonCard>
                            <IonRow className='p-2 mt-3 d-flex align-items-center '>
                                <IonCol size='6'>
                                    <button className='rounded-pill bg-secondary text-white fs-13 p-3 w-100' onClick={() => setStep(1)}>{t("quay-lai")}</button>
                                </IonCol>
                                <IonCol size='6'>
                                    <button className='rounded-pill bg-pink text-white fs-13 p-3 w-100' onClick={() => setStep(3)}>{t("tiep-tuc")}</button>
                                </IonCol>
                            </IonRow>
                        </>
                    )}

                    {step === 4 && (
                        <>
                            <IonCard className='m-0 p-3  py-4 rounded-4 mt-3 fs-13 shadow'>
                                <div className='fw-bold'>{t("mon-an")} / {t("dich-vu")}</div>
                                <IonAccordionGroup multiple >
                                    <IonAccordion value='1' className='rounded-4 bg-transparent mt-3 shadow-sm'>
                                        <IonItem lines="none" className='fs-13 rounded-4 bg-white ' slot="header">
                                            <IonLabel className='fw-bold py-2'>
                                                Combo
                                            </IonLabel>
                                        </IonItem>
                                        <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                            <IonRow className='d-flex align-items-center'>
                                                <IonCol size='6'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2' onClick={() => { setIsModalOpenDetail(true) }}>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                        <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                        <div className='ms-1'>4.500.000đ</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='6'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2'>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                        <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                        <div className='ms-1'>4.500.000đ</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='6'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2'>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                        <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                        <div className='ms-1'>4.500.000đ</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='6'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2'>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                        <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                        <div className='ms-1'>4.500.000đ</div>
                                                    </IonCard>
                                                </IonCol>
                                            </IonRow>
                                        </div>
                                    </IonAccordion>
                                    <IonAccordion value='2' className='rounded-4 bg-transparent mt-4 shadow-sm'>
                                        <IonItem lines="none" className='fs-13 rounded-4 bg-white' slot="header">
                                            <IonLabel className='fw-bold py-2'>
                                                Món chính
                                            </IonLabel>
                                        </IonItem>
                                        <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                            <IonRow className='d-flex align-items-center'>
                                                <IonCol size='6'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                        <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                        <div className='ms-1'>4.500.000đ</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='6'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                        <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                        <div className='ms-1'>4.500.000đ</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='6'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                        <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                        <div className='ms-1'>4.500.000đ</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='6'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                        <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                        <div className='ms-1'>4.500.000đ</div>
                                                    </IonCard>
                                                </IonCol>
                                            </IonRow>
                                        </div>
                                    </IonAccordion>
                                    <IonAccordion value='3' className='rounded-4 bg-transparent mt-4 shadow-sm'>
                                        <IonItem lines="none" className='fs-13 rounded-4 bg-white' slot="header">
                                            <IonLabel className='fw-bold py-2'>
                                                Đồ uống
                                            </IonLabel>
                                        </IonItem>
                                        <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                            <IonRow className='d-flex align-items-center'>
                                                <IonCol size='6'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                        <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                        <div className='ms-1'>4.500.000đ</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='6'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                        <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                        <div className='ms-1'>4.500.000đ</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='6'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                        <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                        <div className='ms-1'>4.500.000đ</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='6'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark'>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                                        <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                                        <div className='ms-1'>4.500.000đ</div>
                                                    </IonCard>
                                                </IonCol>
                                            </IonRow>
                                        </div>
                                    </IonAccordion>
                                </IonAccordionGroup>
                            </IonCard>
                            <IonRow className='p-2 mt-3 d-flex align-items-center '>
                                <IonCol size='6'>
                                    <button className='rounded-pill bg-secondary text-white fs-13 p-3 w-100' onClick={() => setStep(3)}>{t("quay-lai")}</button>
                                </IonCol>
                                <IonCol size='6'>
                                    <button className='rounded-pill bg-pink text-white fs-13 p-3 w-100' onClick={() => setStep(5)}>{t("tiep-tuc")}</button>
                                </IonCol>
                            </IonRow>
                        </>
                    )}
                    {step === 5 && (
                        <>
                            <IonCard className='m-0 p-3  py-4 rounded-4 mt-3 fs-13 shadow'>
                                <div className='fw-bold'>{t("thong-tin-thanh-toan")}</div>
                                <IonRow className=' fs-13 fw-bold mt-3'>{t("coc-truoc")}</IonRow>
                                <IonRow className='mt-2'>
                                    <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder={t("coc-truoc")}></input>
                                </IonRow>

                                <IonRow className=' fs-13 fw-bold mt-3'>{t("hinh-thuc")}</IonRow>
                                <IonSegment value="1">
                                    <IonSegmentButton value="1">
                                        <IonLabel>{t("chuyen-khoan")}</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="2">
                                        <IonLabel>{t("tien-mat")}</IonLabel>
                                    </IonSegmentButton>
                                </IonSegment>

                            </IonCard>
                            <IonRow className='p-2 mt-3 d-flex align-items-center '>
                                <IonCol size='6'>
                                    <button className='rounded-pill bg-secondary text-white fs-13 p-3 w-100' onClick={() => setStep(4)}>{t("quay-lai")}</button>
                                </IonCol>
                                <IonCol size='6'>
                                    <button className='rounded-pill bg-pink text-white fs-13 p-3 w-100' onClick={() => { success() }}>Hoàn tất</button>
                                </IonCol>
                            </IonRow>
                        </>
                    )}
                    <IonRow className='d-flex justify-content-center mt-3 px-2'>
                        <button className='border border-danger text-danger bg-none rounded-pill fs-13 fw-bold p-3 w-100'>{t("huy")} / {t("lam-moi")}</button>
                    </IonRow>
                </IonGrid>

            </IonContent>

            <IonModal isOpen={isModalOpenDetail} onDidDismiss={() => { setIsModalOpenDetail(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className=' p-0 pb-3' >
                    <div className='text-end me-3 mt-3 fixed-header' ><IonIcon onClick={() => setIsModalOpenDetail(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon></div>
                    <IonGrid className='p-3 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "85vh"
                    }}>


                    </IonGrid>


                </div>
            </IonModal><IonModal
                id="example-modal-menu"
                isOpen={isOpenMenu}
                backdropDismiss={false}
                initialBreakpoint={1}
                breakpoints={[0.3, 0.5, 1]}
                className='custom-modal'
            >
                <IonHeader>
                    <IonToolbar>
                        <IonTitle className='fs-15'>Chọn món ăn</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonRow className=' d-flex align-items-center'>
                        <IonCol size='5'>
                            <select className='w-100 fs-13 p-2 border border-1 rounded-3 bg-light' >
                                <option value={1}>Quận 1</option>
                                <option value={2}>Quận 2</option>
                            </select>
                        </IonCol>
                        <IonCol size='7'>
                            <input className='rounded-3 p-2 fs-13 w-100 border border-1 bg-light' placeholder='search'></input>

                        </IonCol>

                    </IonRow>

                    <IonRow className='mt-2'>
                        {menu && menu.map((food, key) => {
                            return (
                                <>
                                    <IonCol size='6' key={key}>
                                        <IonCard className='m-0 p-3 rounded-3'>
                                            <img src={`${food.image}`} className='rounded-3'></img>
                                            <div className='text-pink fw-bold fs-13 text-center my-2'>{food.name}</div>
                                            <div className='text-secondary ' style={{ fontSize: "12px" }}>{food.content}</div>
                                        </IonCard>
                                    </IonCol>
                                </>
                            )
                        })}
                    </IonRow>

                </IonContent>
            </IonModal>

        </IonPage>
    );
};

export default BookingTable;

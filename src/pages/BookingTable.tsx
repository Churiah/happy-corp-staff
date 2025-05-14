import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRadio, IonRadioGroup, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, chevronBackOutline, chevronForwardOutline, closeOutline, key, locateOutline, locationSharp, notificationsOutline, remove, searchOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useHistory } from 'react-router';
const BookingTable: React.FC = () => {
    const history = useHistory();
    const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);


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

    return (
        <IonPage>
            <IonHeader style={{ backdropFilter: "blur(50px)" }}>
                <IonToolbar className='shadow-none border border-0'>
                    <IonRow className='d-flex justify-content-between align-items-center p-1'>
                        <img src='../image/happy-corp-logo.png' alt='logo' className='' style={{ width: "70px" }}></img>
                        <div className='d-flex align-items-center'>
                            <button className='rounded-circle p-2 bg-switch-box color-icon' style={{ width: "35px", height: "35px" }}> <IonIcon icon={businessOutline} size='15px'></IonIcon></button>
                            <button className='rounded-circle p-2 bg-switch-box color-icon ms-2' style={{ width: "35px", height: "35px" }}> <IonIcon icon={notificationsOutline} size='15px'></IonIcon></button>
                            <IonMenuToggle menu="end" autoHide={false}>
                                <img src='https://static-cse.canva.com/blob/1992462/1600w-vkBvE1d_xYA.jpg' alt='avatar' className='rounded-circle ms-2' style={{ width: "40px", height: "40px" }}></img>
                            </IonMenuToggle>
                        </div>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='page-background'>
                <IonGrid className='p-3'>
                    <IonRow className='d-flex align-items-center '>
                        <button className='text-center bg-none rounded-circle me-2' style={{ width: "40px", height: "40px" }} onClick={() => history.goBack()}>
                            <IonIcon icon={chevronBackOutline} color='dark' style={{ fontSize: "22px" }} />
                        </button>
                        <div className=' fw-bold ' style={{ fontSize: "17px" }}>Đặt bàn</div>
                    </IonRow>
                    {step === 1 && (
                        <>
                            <IonCard className='m-0  p-3 py-4 rounded-4 mt-3 fs-13 shadow-sm '>
                                <IonRow className='d-flex justify-content-between align-items-center'>
                                    <div className='fw-bold'>Thông tin khách hàng</div>
                                    <IonIcon icon={searchOutline} style={{ fontSize: "24px" }}></IonIcon>
                                </IonRow>
                                <IonRow className=' fs-13 fw-bold mt-3'>Tên <span className='text-danger ms-1'>(*)</span></IonRow>
                                <IonRow className='mt-2'>
                                    <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Tên'></input>
                                </IonRow>
                                <IonRow className=' fs-13 fw-bold mt-3'>Điện thoại <span className='text-danger ms-1'>(*)</span></IonRow>
                                <IonRow className='mt-2'>
                                    <input type='tel' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Điện thoại'></input>
                                </IonRow>
                                <IonRow className=' fs-13 fw-bold mt-3'>Ghi chú</IonRow>
                                <IonRow className='mt-2'>
                                    <textarea rows={5} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Ghi chú'></textarea>
                                </IonRow>
                            </IonCard>
                            <IonRow className='p-2 mt-3'>
                                <button className='rounded-pill bg-pink text-white fs-13 p-3 w-100' onClick={() => setStep(2)}>Tiếp tục</button>
                            </IonRow>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <IonCard className='m-0 p-3 py-4  rounded-4 mt-3 fs-13 shadow-sm '>
                                <div className='fw-bold'>Thông tin đặt phòng</div>
                                <IonRow className=' fs-13 fw-bold mt-3'>Ngày <span className='text-danger ms-1'>(*)</span></IonRow>
                                <IonRow className='mt-2'>
                                    <input type='date' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='dd/mm/yyyy'></input>
                                </IonRow>
                                <IonRow className=' fs-13 fw-bold mt-3'>Giờ <span className='text-danger ms-1'>(*)</span></IonRow>
                                <IonRow className='mt-2'>
                                    <input type='time' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Điện thoại'></input>
                                </IonRow>
                                <IonRow className=' fs-13 fw-bold mt-3'>Số người <span className='text-danger ms-1'>(*)</span></IonRow>
                                <IonRow className='mt-2'>
                                    <input type='number' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='0'></input>
                                </IonRow>
                                <IonRow className=' fs-13 fw-bold mt-3'>Yêu cầu</IonRow>
                                <IonRow className='mt-2'>
                                    <textarea rows={5} className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Yêu cầu'></textarea>
                                </IonRow>
                            </IonCard>
                            <IonRow className='p-2 mt-3 d-flex align-items-center '>
                                <IonCol size='6'>
                                    <button className='rounded-pill bg-secondary text-white fs-13 p-3 w-100' onClick={() => setStep(1)}>Quay lại</button>
                                </IonCol>
                                <IonCol size='6'>
                                    <button className='rounded-pill bg-pink text-white fs-13 p-3 w-100' onClick={() => setStep(3)}>Tiếp tục</button>
                                </IonCol>
                            </IonRow>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <IonCard className='m-0 p-3  py-4 rounded-4 mt-3 fs-13 shadow-sm '>
                                <div className='fw-bold'>Sơ đồ phòng</div>
                                <div className="d-flex justify-content-center align-items-center gap-4 mt-3 flex-wrap">
                                    <div className="d-flex align-items-center gap-1">
                                        <span className="badge bg-primary bg-opacity-75 mb-1" style={{ fontSize: "10px" }}> </span>
                                        <span className='fs-11'><span className='fw-bold'>1</span> Có khách</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-1">
                                        <span className={`badge bg-warning bg-opacity-75 mb-1`} style={{ fontSize: "10px" }}> </span>
                                        <span className='fs-11'><span className='fw-bold'>1</span> Đang chờ</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-1">
                                        <span className={`badge bg-danger bg-opacity-75 mb-1`} style={{ fontSize: "10px" }}> </span>
                                        <span className='fs-11'><span className='fw-bold'>1</span> Đang dọn</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-1">
                                        <span className={`badge bg-white mb-1 border border-1`} style={{ fontSize: "10px" }}> </span>
                                        <span className='fs-11'><span className='fw-bold'>1</span> Trống</span>
                                    </div>
                                </div>
                                <IonAccordionGroup multiple value={'1'}>
                                    <IonAccordion value='1' className='rounded-4 bg-transparent mt-3' >
                                        <IonItem lines="none" className='fs-15 rounded-4 bg-white shadow-sm' slot="header">
                                            <IonLabel className='fw-bold py-2'>
                                                Tầng 1
                                            </IonLabel>
                                        </IonItem>
                                        <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                            <IonRow className='d-flex align-items-center'>
                                                <IonCol size='4'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 '>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                                        <div className='mt-1 fs-13 fw-bold ms-1'>Happy 1</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='4'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-danger bg-opacity-75 '>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                                        <div className='mt-1 fs-13 fw-bold ms-1'>Happy 2</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='4'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2  bg-white '>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                                        <div className='mt-1 fs-13 fw-bold ms-1'>Happy 3</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='4'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2  bg-warning bg-opacity-75 '>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                                        <div className='mt-1 fs-13 fw-bold ms-1'>Happy 4</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='4'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 '>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                                        <div className='mt-1 fs-13 fw-bold ms-1'>Happy 5</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='4'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 '>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                                        <div className='mt-1 fs-13 fw-bold ms-1'>Happy 6</div>
                                                    </IonCard>
                                                </IonCol>
                                            </IonRow>
                                        </div>
                                    </IonAccordion>
                                    <IonAccordion value='2' className='rounded-4 bg-transparent mt-3'>
                                        <IonItem lines="none" className='fs-15 rounded-4 bg-white shadow-sm' slot="header">
                                            <IonLabel className='fw-bold py-2'>
                                                Tầng 2
                                            </IonLabel>
                                        </IonItem>
                                        <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                            <IonRow className='d-flex align-items-center'>
                                                <IonCol size='4'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 '>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                                        <div className='mt-1 fs-13 fw-bold ms-1'>Happy 1</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='4'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-danger bg-opacity-75 '>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                                        <div className='mt-1 fs-13 fw-bold ms-1'>Happy 2</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='4'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2  bg-white '>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                                        <div className='mt-1 fs-13 fw-bold ms-1'>Happy 3</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='4'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-dark bg-warning bg-opacity-75 '>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                                        <div className='mt-1 fs-13 fw-bold ms-1'>Happy 4</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='4'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 '>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                                        <div className='mt-1 fs-13 fw-bold ms-1'>Happy 5</div>
                                                    </IonCard>
                                                </IonCol>
                                                <IonCol size='4'>
                                                    <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 '>
                                                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                                        <div className='mt-1 fs-13 fw-bold ms-1'>Happy 6</div>
                                                    </IonCard>
                                                </IonCol>
                                            </IonRow>
                                        </div>
                                    </IonAccordion>
                                </IonAccordionGroup>
                            </IonCard>
                            <IonRow className='p-2 mt-3 d-flex align-items-center '>
                                <IonCol size='6'>
                                    <button className='rounded-pill bg-secondary text-white fs-13 p-3 w-100' onClick={() => setStep(2)}>Quay lại</button>
                                </IonCol>
                                <IonCol size='6'>
                                    <button className='rounded-pill bg-pink text-white fs-13 p-3 w-100' onClick={() => setStep(4)}>Tiếp tục</button>
                                </IonCol>
                            </IonRow>
                        </>
                    )}
                    {step === 4 && (
                        <>
                            <IonCard className='m-0 p-3  py-4 rounded-4 mt-3 fs-13 shadow'>
                                <div className='fw-bold'>Món ăn / Dịch vụ</div>
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
                                    <button className='rounded-pill bg-secondary text-white fs-13 p-3 w-100' onClick={() => setStep(3)}>Quay lại</button>
                                </IonCol>
                                <IonCol size='6'>
                                    <button className='rounded-pill bg-pink text-white fs-13 p-3 w-100' onClick={() => setStep(5)}>Tiếp tục</button>
                                </IonCol>
                            </IonRow>
                        </>
                    )}
                    {step === 5 && (
                        <>
                            <IonCard className='m-0 p-3  py-4 rounded-4 mt-3 fs-13 shadow'>
                                <div className='fw-bold'>Thông tin thanh toán</div>
                                <IonRow className=' fs-13 fw-bold mt-3'>Cọc trước</IonRow>
                                <IonRow className='mt-2'>
                                    <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Cọc trước'></input>
                                </IonRow>

                                <IonRow className=' fs-13 fw-bold mt-3'>Hình thức</IonRow>
                                <IonSegment value="1">
                                    <IonSegmentButton value="1">
                                        <IonLabel>Chuyển khoản</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="2">
                                        <IonLabel>Tiền mặt</IonLabel>
                                    </IonSegmentButton>
                                </IonSegment>

                            </IonCard>
                            <IonRow className='p-2 mt-3 d-flex align-items-center '>
                                <IonCol size='6'>
                                    <button className='rounded-pill bg-secondary text-white fs-13 p-3 w-100' onClick={() => setStep(4)}>Quay lại</button>
                                </IonCol>
                                <IonCol size='6'>
                                    <button className='rounded-pill bg-pink text-white fs-13 p-3 w-100' onClick={()=>{success()}}>Hoàn tất</button>
                                </IonCol>
                            </IonRow>
                        </>
                    )}
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
            </IonModal>

        </IonPage>
    );
};

export default BookingTable;

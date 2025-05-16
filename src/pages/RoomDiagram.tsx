import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, chevronBackOutline, chevronForwardOutline, closeOutline, cloudDoneOutline, key, locateOutline, locationSharp, notificationsOutline, remove, searchOutline, shareSocialOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useHistory } from 'react-router';
import BranchModal from '../components/ModalBrand';
import { Link } from 'react-router-dom';
const RoomDiagram: React.FC = () => {
    const history = useHistory();
    const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);
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
                    <IonRow className='d-flex align-items-center '>
                        <button className='text-center bg-none rounded-circle me-2' style={{ width: "40px", height: "40px" }} onClick={() => history.goBack()}>
                            <IonIcon icon={chevronBackOutline} color='dark' style={{ fontSize: "22px" }} />
                        </button>
                        <div className=' fw-bold ' style={{ fontSize: "17px" }}>Sơ đồ phòng</div>
                    </IonRow>

                    <div className="d-flex justify-content-center align-items-center gap-4 mt-3 flex-wrap">
                        <div className="d-flex align-items-center gap-1">
                            <span className="badge bg-primary bg-opacity-75 mb-1" style={{ fontSize: "10px" }}> </span>
                            <span className='fs-13'><span className='fw-bold'>1</span> Có khách</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            <span className={`badge bg-warning bg-opacity-75 mb-1`} style={{ fontSize: "10px" }}> </span>
                            <span className='fs-13'><span className='fw-bold'>1</span> Đang chờ</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            <span className={`badge bg-danger bg-opacity-75 mb-1`} style={{ fontSize: "10px" }}> </span>
                            <span className='fs-13'><span className='fw-bold'>1</span> Đang dọn</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            <span className={`badge bg-white mb-1`} style={{ fontSize: "10px" }}> </span>
                            <span className='fs-13'><span className='fw-bold'>1</span> Trống</span>
                        </div>
                    </div>
                    <IonAccordionGroup multiple value={['1', '2']}>
                        <IonAccordion value='1' className='rounded-4 bg-transparent mt-3' >
                            <IonItem lines="none" className='fs-15 rounded-4 bg-white shadow-sm' slot="header">
                                <IonLabel className='fw-bold py-2'>
                                    Tầng 1
                                </IonLabel>
                            </IonItem>
                            <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                <IonRow className='d-flex align-items-center'>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 1</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-danger bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 2</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2  bg-white ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 3</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2  bg-warning bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 4</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 5</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
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
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 1</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-danger bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 2</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2  bg-white ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 3</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2  bg-warning bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 4</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 5</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='4'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 text-white bg-primary bg-opacity-75 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                                            <div className='mt-1 fs-13 fw-bold ms-1'>Happy 6</div>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                            </div>
                        </IonAccordion>
                    </IonAccordionGroup>
                </IonGrid>

            </IonContent>

            <IonModal isOpen={isModalOpenDetail} onDidDismiss={() => { setIsModalOpenDetail(false) }} initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className=' p-0 pb-3' >
                    <div className='text-end me-3 mt-3 fixed-header' ><IonIcon onClick={() => setIsModalOpenDetail(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon></div>
                    <IonGrid className='p-3 pb-5 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "85vh"
                    }}>
                        <IonRow className='fw-bold'>Thông tin khách hàng</IonRow>
                        <IonCard className='rounded-4 m-0 border border-1 shadow-none fs-13  mt-3'>
                            <IonRow className='d-flex align-items-center justify-content-between p-3'>
                                Khách hàng <div className='fw-bold'>Mr Nick</div>
                            </IonRow>
                            <IonRow className='border-50 '></IonRow>
                            <IonRow className='d-flex align-items-center justify-content-between p-3'>
                                Điện thoại <div className='fw-bold'>0123456789</div>
                            </IonRow>
                            <IonRow className='border-50 '></IonRow>
                            <IonRow className='d-flex align-items-center justify-content-between p-3'>
                                Ghi chú <div className='fw-bold'>Chọn ems xinh</div>
                            </IonRow>
                            <IonRow className='border-50 '></IonRow>
                            <IonRow className='d-flex align-items-center justify-content-between p-3'>
                                Xác nhận <div className='fw-bold'>Đã xác nhận qua Zalo</div>
                            </IonRow>
                        </IonCard>

                        <IonRow className='fw-bold mt-3'>Thông tin đặt bàn</IonRow>
                        <IonCard className='rounded-4 m-0 border border-1 shadow-none fs-13  mt-3'>
                            <IonRow className='d-flex align-items-center justify-content-between p-3'>
                                Nhà hàng <div className='fw-bold'>90s House</div>
                            </IonRow>
                            <IonRow className='border-50 '></IonRow>
                            <IonRow className='d-flex align-items-center justify-content-between p-3'>
                                Mã booking <div className='fw-bold'>#002</div>
                            </IonRow>
                            <IonRow className='border-50 '></IonRow>
                            <IonRow className='d-flex align-items-center justify-content-between p-3'>
                                Ngày <div className='fw-bold'>15:00 05/05/2025</div>
                            </IonRow>
                            <IonRow className='border-50 '></IonRow>
                            <IonRow className='d-flex align-items-center justify-content-between p-3'>
                                Số người <div className='fw-bold'>10</div>
                            </IonRow>
                            <IonRow className='border-50 '></IonRow>
                            <IonRow className='d-flex align-items-center justify-content-between p-3'>
                                Khu vực / Phòng <div className='fw-bold'>Happy</div>
                            </IonRow>
                            <IonRow className='border-50 '></IonRow>
                            <IonRow className='d-flex align-items-center justify-content-between p-3'>
                                Trạng thái <div className='fw-bold text-success'>Đã chuẩn bị phòng</div>
                            </IonRow>
                            <IonRow className='border-50 '></IonRow>
                            <IonRow className='d-flex align-items-center justify-content-between p-3'>
                                Ghi chú <div className='fw-bold'>Yêu cầu có DJ</div>
                            </IonRow>
                        </IonCard>
                        <IonRow className='fw-bold mt-3'>
                            Chi tiết Dịch vụ / Món ăn
                        </IonRow>
                        <IonCard className='rounded-4 border border-1 shadow-none m-0 mt-2 fs-13  '>
                            <IonRow className='d-flex justify-content-between align-items-center p-3'>
                                <div className='text-secondary'>
                                    <div>Combo1 <span className='fw-bold text-pink'>x 1</span></div>
                                    <div>4.500.000đ</div>
                                </div>
                                <div className='fw-bold'>4.500.000đ</div>
                            </IonRow>
                            <IonRow className='border-50'></IonRow>
                            <IonRow className='d-flex justify-content-between align-items-center p-3'>
                                <div className='text-secondary'>
                                    <div>Combo1 <span className='fw-bold text-pink'>x 1</span></div>
                                    <div>4.500.000đ</div>
                                </div>
                                <div className='fw-bold'>4.500.000đ</div>
                            </IonRow>

                        </IonCard>
                        <IonRow className='fs-13 fw-bold mt-3'>
                            Thanh toán
                        </IonRow>
                        <IonCard className='rounded-4 border border-1 shadow-none m-0 mt-2 fs-13 '>
                            <IonRow className='d-flex justify-content-between align-items-center text-success fw-bold p-3'>
                                <div>Tổng cộng :</div>
                                <div>55.000.000đ</div>
                            </IonRow>
                            <IonRow className='border-50'></IonRow>
                            <IonRow className='d-flex justify-content-between align-items-center text-warning fw-bold  p-3'>
                                <div>Đã cọc :</div>
                                <div>5.000.000đ</div>
                            </IonRow>
                            <IonRow className='border-50'></IonRow>
                            <IonRow className='d-flex justify-content-between align-items-center text-danger fw-bold  p-3'>
                                <div>Giảm giá :</div>
                                <div>5.000.000đ</div>
                            </IonRow>
                            <IonRow className='border-50'></IonRow>
                            <IonRow className='d-flex justify-content-between align-items-center text-primary fw-bold  p-3'>
                                <div>VAT :</div>
                                <div>5.000.000đ</div>
                            </IonRow>
                            <IonRow className='border-50'></IonRow>
                            <IonRow className='d-flex justify-content-between align-items-center text-pink fw-bold  p-3'>
                                <div>Thanh toán :</div>
                                <div>50.000.000đ</div>
                            </IonRow>
                        </IonCard>
                        <IonRow className='fs-13 fw-bold mt-3'>
                            Thông tin thanh toán
                        </IonRow>
                        <IonCard className='rounded-4 border border-1 shadow-none m-0 mt-2 fs-13  '>
                            <IonRow className='d-flex justify-content-between align-items-center p-3'>
                                <div className='text-secondary'>Phương thức thanh toán</div>
                                <div className='fw-bold'>Tiền mặt</div>
                            </IonRow>
                            <IonRow className='border-50'></IonRow>
                            <IonRow className='d-flex justify-content-between align-items-center p-3'>
                                <div className='text-secondary'>Ngày thanh toán</div>
                                <div className='fw-bold'>17:00 05/05/2025</div>
                            </IonRow>
                            <IonRow className='border-50'></IonRow>
                            <IonRow className='d-flex justify-content-between align-items-center p-3'>
                                <div className='text-secondary'>Lễ tân</div>
                                <div className='fw-bold'>Ms Xinh</div>
                            </IonRow>
                            <IonRow className='border-50'></IonRow>
                            <IonRow className='d-flex justify-content-between align-items-center p-3'>
                                <div className='text-secondary'>Người đặt</div>
                                <div className='fw-bold'>Mr Lee</div>
                            </IonRow>
                        </IonCard>
                        <IonRow className='mt-3'>
                            <IonCol size='6'>
                                <button className='bg-warning  fw-bold fs-13 p-3 rounded-pill w-100'>
                                    <IonIcon icon={cloudDoneOutline} className='me-2'></IonIcon> Tải hóa đơn
                                </button>
                            </IonCol>
                            <IonCol size='6'>
                                <button className='bg-light  fw-bold fs-13 p-3 rounded-pill w-100'>
                                    <IonIcon icon={shareSocialOutline} className='me-2'></IonIcon> Chia sẻ
                                </button>
                            </IonCol>
                        </IonRow>


                    </IonGrid>
                    <IonFooter className='fixed-bottom bg-white'>
                        <IonRow className='d-flex justify-content-between align-items-center px-3 py-2'>
                            <div className='text-pink fw-bold fs-4'>50.000.000đ</div>
                            <button className='rounded-pill p-3 text-white bg-pink fw-bold fs-13'>Thanh toán</button>
                        </IonRow>
                    </IonFooter>

                </div>
            </IonModal>

        </IonPage>
    );
};

export default RoomDiagram;

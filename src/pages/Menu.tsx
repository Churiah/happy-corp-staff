import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal, useIonPopover } from '@ionic/react';
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
const Menu: React.FC = () => {
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
                <IonGrid className='p-3 pt-3'>
                    <IonRow className='d-flex align-items-center '>
                        <button className='text-center bg-none rounded-circle me-2' style={{ width: "40px", height: "40px" }} onClick={() => history.goBack()}>
                            <IonIcon icon={chevronBackOutline} color='dark' style={{ fontSize: "22px" }} />
                        </button>
                        <div className=' fw-bold ' style={{ fontSize: "17px" }}>Thực đơn</div>
                    </IonRow>

                    <IonAccordionGroup multiple >
                        <IonAccordion value='1' className='rounded-4 bg-transparent mt-3'>
                            <IonItem lines="none" className='fs-13 rounded-4 bg-white' slot="header">
                                <IonLabel className='fw-bold py-2'>
                                    Combo
                                </IonLabel>
                            </IonItem>
                            <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                <IonRow className='d-flex align-items-center'>
                                    <IonCol size='6'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 ' onClick={() => { setIsModalOpenDetail(true) }}>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                            <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                            <div className='ms-1'>4.500.000đ</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='6'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 '>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                            <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                            <div className='ms-1'>4.500.000đ</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='6'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 '>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                            <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                            <div className='ms-1'>4.500.000đ</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='6'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 '>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                            <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                            <div className='ms-1'>4.500.000đ</div>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                            </div>
                        </IonAccordion>
                        <IonAccordion value='2' className='rounded-4 bg-transparent mt-4'>
                            <IonItem lines="none" className='fs-13 rounded-4 bg-white' slot="header">
                                <IonLabel className='fw-bold py-2'>
                                    Món chính
                                </IonLabel>
                            </IonItem>
                            <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                <IonRow className='d-flex align-items-center'>
                                    <IonCol size='6'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 '>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                            <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                            <div className='ms-1'>4.500.000đ</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='6'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 '>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                            <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                            <div className='ms-1'>4.500.000đ</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='6'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 '>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                            <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                            <div className='ms-1'>4.500.000đ</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='6'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 '>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                            <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                            <div className='ms-1'>4.500.000đ</div>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                            </div>
                        </IonAccordion>
                        <IonAccordion value='3' className='rounded-4 bg-transparent mt-4'>
                            <IonItem lines="none" className='fs-13 rounded-4 bg-white' slot="header">
                                <IonLabel className='fw-bold py-2'>
                                    Đồ uống
                                </IonLabel>
                            </IonItem>
                            <div className="p-2 bg-transparent fs-13" slot="content" style={{ backgroundColor: "transparent !important" }}>
                                <IonRow className='d-flex align-items-center'>
                                    <IonCol size='6'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 '>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                            <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                            <div className='ms-1'>4.500.000đ</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='6'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 '>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                            <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                            <div className='ms-1'>4.500.000đ</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='6'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 '>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                            <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                            <div className='ms-1'>4.500.000đ</div>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='6'>
                                        <IonCard className='shadow-sm rounded-4 m-0 p-2 '>
                                            <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4 p-1'></img>
                                            <div className='mt-1 fw-bold ms-1'>Combo 1</div>
                                            <div className='ms-1'>4.500.000đ</div>
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


                    <IonGrid className='p-3 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "85vh"
                    }}>
                        <img src='https://happy-booking.eclo.io/datas/img/1.jpg' className='w-100 rounded-4'></img>
                        <IonRow className='d-flex justify-content-between align-items-center mt-3'>
                            <div>
                                <div className='fs-15'>Combo 1</div>
                                <div>4.500.000đ</div>
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
                            <p className="fw-bold">Combo 1 - Trải Nghiệm Thượng Lưu Đỉnh Cao</p>

                            <p>Thưởng thức Combo 1 – sự kết hợp hoàn hảo giữa ẩm thực cao cấp, rượu thượng hạng và không gian giải trí đẳng cấp, dành riêng cho những ai yêu thích phong cách sống sang trọng và tinh tế.</p>

                            <p className="fw-bold">Thực đơn đặc biệt gồm:</p>
                            <p>Tôm hùm Alaska nướng bơ tỏi – thịt tôm ngọt, thơm lừng hòa quyện cùng sốt bơ đậm đà.</p>

                            <p>Bò Wagyu A5 áp chảo sốt rượu vang đỏ – mềm mại, tan ngay trong miệng.</p>

                            <p>Gan ngỗng Pháp (Foie Gras) sốt táo caramen – món ăn đẳng cấp chỉ dành cho những thực khách sành ăn.</p>

                            <p>Súp nấm Truffle trắng – tinh tế và đầy quyến rũ trong từng muỗng đầu tiên.</p>

                            <p>Bánh mousse chocolate đen Bỉ – ngọt ngào kết thúc một bữa ăn trọn vẹn.</p>

                            <p className="fw-bold">Đồ uống đi kèm:</p>
                            <p>Champagne Dom Pérignon Vintage – biểu tượng của sự tinh tế và đẳng cấp.</p>

                            <p>Rượu vang đỏ Chateau Margaux – dòng vang cổ điển dành riêng cho thịt đỏ.</p>

                            <p className="fw-bold">Dịch vụ đặc biệt đi kèm:</p>
                            <p>DJ biểu diễn trực tiếp với dàn âm thanh ánh sáng hiện đại, mang đến không khí bùng nổ và sôi động suốt đêm.</p>

                            <p>Vũ công chuyên nghiệp (dancer) trình diễn theo chủ đề – quyến rũ, nghệ thuật, tạo nên một bữa tiệc thị giác không thể rời mắt.</p>

                            <p>Combo 1 không chỉ là bữa ăn, mà là một đêm tiệc đúng nghĩa – nơi ẩm thực, âm nhạc và nghệ thuật hòa quyện để mang lại trải nghiệm không thể nào quên.</p>
                        </div>

                    </IonGrid>


                </div>
            </IonModal>

        </IonPage>
    );
};

export default Menu;

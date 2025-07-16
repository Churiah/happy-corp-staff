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
import { useTranslation } from 'react-i18next';
const Assistant: React.FC = () => {
    const history = useHistory();
    const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);

    const list = [
        {
            id: 1,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí với 3 năm kinh nghiệp"

        },
        {
            id: 1,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí siêu dễ thương, có 3 năm kinh nghiệm"

        },
        {
            id: 1,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí với 3 năm kinh nghiệp"

        },
        {
            id: 1,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí siêu dễ thương, có 3 năm kinh nghiệm"

        },
        {
            id: 1,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí siêu dễ thương, có 3 năm kinh nghiệm"

        },
        {
            id: 1,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí siêu dễ thương, có 3 năm kinh nghiệm"

        },
        {
            id: 1,
            name: "Trợ lí Marry",
            age: 25,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO27yfAZmM1Xu4sR2tixZ8Moq-rOxlbKDXg&s",
            describe: "Là một cô trợ lí siêu dễ thương, có 3 năm kinh nghiệm"

        }
    ]
    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }

    const [present, dismiss] = useIonPopover(BranchModal, {
        onDismiss: () => dismiss(),
    });
    const { t, i18n } = useTranslation();
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
                        <div className=' fw-bold ' style={{ fontSize: "17px" }}>{t("tro-li")}</div>
                    </IonRow>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper mt-3"
                    >
                        {list && list.map((assistant, index) => (
                            <SwiperSlide key={index} >
                                <div className="card-container shadow-sm">
                                    <img src={assistant.avatar} className="  border-secondary w-100 rounded-3" style={{ margin: "0 auto" }} />
                                    <div className='fs-15 mt-4'>{assistant.name}</div>
                                    <div className=" fs-13 mt-3">{assistant.describe}</div>

                                    <IonRow className='d-flex justify-content-center'>
                                        <button className="p-3 fs-13 px-5 rounded-pill bg-pink text-white mt-4 shadow-sm" onClick={() => {

                                        }}>{t("book-me-now")}</button>
                                    </IonRow>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
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
                        <div className="mt-3">
                            <p>🎧 MIDNIGHT SESSION – Đêm nhạc không ngủ tại 90’s House</p>
                            <p>📍 90-92 Lê Thị Riêng, Quận 1, TP.HCM</p>
                            <p>🕙 10PM – 2AM</p>
                            <p>Khi ánh đèn đường vừa dịu xuống, cũng là lúc Midnight Session bùng lên với những giai điệu cuốn hút, lôi cuốn bạn vào một hành trình âm nhạc thâu đêm.</p>

                            <p>🔥 DJ Line-up sẽ mang đến không gian deep house, techno và những bản remix chỉ có tại 90’s House – nơi kết nối những tâm hồn yêu nhạc giữa lòng Sài Gòn không ngủ.</p>

                            <p>✨ Không gian retro đậm chất 90s vibe, âm thanh sống động, ánh sáng ma mị – tất cả tạo nên một đêm chạm đỉnh cảm xúc.</p>

                            <p>🥂 Happy Hour đến 11PM – Ưu đãi đặc biệt cho các thức uống signature</p>
                            <p>🚪 FREE ENTRY trước 11PM – Đừng bỏ lỡ!</p>
                        </div>

                    </IonGrid>


                </div>
            </IonModal>

        </IonPage>
    );
};

export default Assistant;

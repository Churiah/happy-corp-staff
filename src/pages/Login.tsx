import { IonButton, IonButtons, IonCard, IonCardContent, IonCheckbox, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
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
const Login: React.FC = () => {
    const history = useHistory();
    function login() {
        history.push("/home");
    }
    return (
        <IonPage>
            <IonContent fullscreen className='page-background'>
                <IonGrid className='p-3'>
                    <IonRow className='d-flex justify-content-center ' style={{ marginTop: "130px" }}>
                        <img src='../image/happy-corp-logo.png' className='w-50'></img>
                    </IonRow>
                    <IonCard className='shadow-sm p-4 py-5 rounded-5 m-3 mt-4'>
                        <IonRow className='d-flex justify-content-center fs-5 fw-bold'>Đăng nhập</IonRow>
                        <IonRow className=' fs-13 fw-bold mt-4'>Email</IonRow>
                        <IonRow className='mt-2'>
                            <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Email'></input>
                        </IonRow>
                        <IonRow className=' fs-13 fw-bold mt-3'>Mật khẩu</IonRow>
                        <IonRow className='mt-2'>
                            <input type='password' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Mật khẩu'></input>
                        </IonRow>
                        <IonRow className='d-flex justify-content-between align-items-center mt-3'>
                            <div className='d-flex align-items-center fs-13'>
                                <IonCheckbox className='me-1 rounded-3'></IonCheckbox> Nhớ tài khoản
                            </div>
                            <Link to="/ForgetPassword" className="text-decoration-none fs-13 fw-bold">Quên mật khẩu?</Link>
                        </IonRow>
                        <IonRow className='mt-4'>
                            <button onClick={()=>{login()}} className='bg-pink rounded-pill p-3 w-100 fs-13 text-white'>Đăng nhập</button>
                        </IonRow>
                    </IonCard>
                </IonGrid>

            </IonContent>



        </IonPage>
    );
};

export default Login;

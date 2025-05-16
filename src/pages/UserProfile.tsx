import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, RefresherEventDetail, useIonModal, useIonPopover } from '@ionic/react';
import './page.css';
import { add, arrowBack, arrowForwardCircleOutline, arrowRedoOutline, businessOutline, chevronBackOutline, closeOutline, cloudUploadOutline, key, keyOutline, listOutline, locateOutline, locationSharp, notificationsOutline, personOutline, remove, searchOutline, settingsOutline, sparklesSharp, trashOutline } from 'ionicons/icons';
import Calendar from 'react-calendar';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useHistory } from 'react-router';
import BranchModal from '../components/ModalBrand';
import { Link } from 'react-router-dom';
const UserProfile: React.FC = () => {
    const history = useHistory();

    const [isModalOpenChangePass, setIsModalOpenChangePass] = useState(false);
    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);

    const [avatar, setAvatar] = useState<File | null>(null);
    const [updateAvatar, setUpdateAvatar] = useState<string>("");

    const fileInputRef = useRef<HTMLInputElement>(null);

    const triggerFileInputAvatar = () => {
        fileInputRef.current?.click();
    };

    const handleImageAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setAvatar(file);
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target?.result) {
                    setUpdateAvatar(e.target.result as string); // base64 string
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImageAddAvatar = () => {
        setAvatar(null);
        setUpdateAvatar("");
    };
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
                <IonGrid className='p-3 pt-4'>
                    <IonRow className='d-flex justify-content-center'>
                        <img src='https://static-cse.canva.com/blob/1992462/1600w-vkBvE1d_xYA.jpg' className=' rounded-circle' style={{ width: "40%" }}></img>
                    </IonRow>
                    <div className='fw-bold fs-4 text-center mt-3'>Demo</div>
                    <div className='text-center fs-15 mt-2'>demo@eclo.vn</div>

                    <IonCard className='rounded-4 m-0 p-3 shadow-sm fs-13  mt-3'>
                        <IonRow><span className='fw-bold'>Mã của bạn :</span>#002</IonRow>
                        <IonRow className='mt-3'><span className='fw-bold'>Họ và tên :</span>Demo</IonRow>
                        <IonRow className='mt-3'><span className='fw-bold'>Email :</span>demo@eclo.vn</IonRow>
                        <IonRow className='mt-3'><span className='fw-bold'>Tài khoản :</span>demo</IonRow>
                        <IonRow className='mt-3'><span className='fw-bold'>Điện thoại :</span>0133456789</IonRow>
                        <IonRow className='mt-3'><span className='fw-bold'>Ngày sinh :</span>05/05/3000</IonRow>
                        <IonRow className='mt-3'><span className='fw-bold'>Giới tính :</span>Nữ</IonRow>
                        <IonRow className='mt-3'><span className='fw-bold'>Ngày đăng ký :</span>#002</IonRow>
                    </IonCard>
                    <IonCard className='rounded-4 m-0 p-3 shadow-sm fs-13  mt-3'>
                        <IonRow className='d-flex align-items-center' onClick={() => setIsModalOpenChangePass(true)}>
                            <IonIcon icon={keyOutline} className='me-2'></IonIcon> Đổi mật khẩu
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center' onClick={() => setIsModalOpenUpdate(true)}>
                            <IonIcon icon={personOutline} className='me-2'></IonIcon> Cập nhật thông tin
                        </IonRow>
                    </IonCard>
                    <IonRow className='fs-13 fw-bold mt-3'>Tài khoản</IonRow>
                    <IonCard className='rounded-4 m-0 p-3 shadow-sm fs-13  mt-3'>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={personOutline} className='me-2'></IonIcon> Thông tin
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={notificationsOutline} className='me-2'></IonIcon> Thông báo
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={listOutline} className='me-2'></IonIcon> Ngật ký
                        </IonRow>
                        <IonRow className='border-50 my-3'></IonRow>
                        <IonRow className='d-flex align-items-center'>
                            <IonIcon icon={settingsOutline} className='me-2'></IonIcon> Cài đặt
                        </IonRow>
                    </IonCard>
                </IonGrid>

            </IonContent>

            <IonModal isOpen={isModalOpenChangePass} onDidDismiss={() => { setIsModalOpenChangePass(false) }} >
                <div className=' p-0 pb-3' >
                    <IonRow className='d-flex justify-content-between  fixed-header p-1'>
                        <div className='fs-13 fw-bold  p-3 pb-0'>Đổi mật khẩu</div>
                        <button className='bg-pink rounded-circle  text-white' style={{ width: "35px", height: "35px" }} ><IonIcon onClick={() => setIsModalOpenChangePass(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon></button>
                    </IonRow>

                    <IonGrid className='p-4 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "85vh"
                    }}>
                        <IonRow className=' fs-13 mt-3'>Mật khẩu cũ <span className='text-danger ms-1'>(*)</span></IonRow>
                        <IonRow className='mt-2'>
                            <input type='password' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Mật khẩu cũ'></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Mật khẩu mới  <span className='text-danger ms-1'>(*)</span></IonRow>
                        <IonRow className='mt-2'>
                            <input type='password' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Mật khẩu mới '></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Xác nhận mật khẩu <span className='text-danger ms-1'>(*)</span></IonRow>
                        <IonRow className='mt-2'>
                            <input type='password' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' placeholder='Xác nhận mật khẩu'></input>
                        </IonRow>
                        <IonRow className='mt-4'>
                            <button className='rounded-pill w-100 p-3 bg-pink text-white'>Thay đổi</button>
                        </IonRow>

                    </IonGrid>


                </div>
            </IonModal>
            <IonModal isOpen={isModalOpenUpdate} onDidDismiss={() => { setIsModalOpenUpdate(false) }} >
                <div className=' p-0 pb-3' >
                    <IonRow className='d-flex justify-content-between  fixed-header p-1'>
                        <div className='fs-13 fw-bold  p-3 pb-0'>Thay đổi thông tin</div>
                        <button className='bg-pink rounded-circle  text-white' style={{ width: "35px", height: "35px" }} ><IonIcon onClick={() => setIsModalOpenUpdate(false)} icon={closeOutline} style={{ fontSize: "25px" }}></IonIcon></button>
                    </IonRow>

                    <IonGrid className='p-4 overflowY h-100 fs-13' style={{
                        overflowY: "auto",
                        maxHeight: "85vh"
                    }}>
                        <IonRow className=' fs-13 mt-3'>Họ và tên <span className='text-danger ms-1'>(*)</span></IonRow>
                        <IonRow className='mt-2'>
                            <input type='text' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' value='Demo'></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Điện thoại  <span className='text-danger ms-1'>(*)</span></IonRow>
                        <IonRow className='mt-2'>
                            <input type='tel' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' value='0123456789'></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Ngày sinh</IonRow>
                        <IonRow className='mt-2'>
                            <input type='date' className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' value='2025/01/01'></input>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Giới tính</IonRow>
                        <IonRow className='mt-2'>
                            <select className='p-3 rounded-4 fs-13 border border-0 shadow-sm bg-secondary bg-opacity-25  w-100' value={2} >
                                <option value={1}>Nam</option>
                                <option value={2}>Nữ</option>
                            </select>
                        </IonRow>
                        <IonRow className=' fs-13 mt-3'>Hình ảnh</IonRow>


                        <IonCard className='m-0 mt-3 p-3 rounded-4 border-border-secondary shadow-sm border border-1'>


                            <div style={{ cursor: "pointer" }}>
                                {updateAvatar ? (
                                    <div className="position-relative">
                                        <button
                                            className="btn bg-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle p-1"
                                            onClick={handleDeleteImageAddAvatar}
                                            style={{ width: "40px", height: "40px", zIndex: 2 }}
                                        >
                                            <IonIcon icon={trashOutline} style={{ fontSize: '20px', color: 'white' }} />
                                        </button>
                                        <img
                                            src={updateAvatar}
                                            className="w-100 rounded-4 object-fit-cover"
                                            alt="avatar preview"
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className=""
                                        style={{ height: "160px", borderRadius: "10px" }}
                                        onClick={triggerFileInputAvatar}
                                    >
                                        <div className="d-flex justify-content-center">
                                            <IonIcon icon={cloudUploadOutline} style={{ fontSize: "60px" }} />
                                        </div>
                                        <div className="d-flex justify-content-center mt-3">Nhấn vào để tải hình ảnh của bạn lên</div>
                                    </div>
                                )}

                                {/* Input file ẩn */}
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    onChange={handleImageAvatar}
                                />
                            </div>

                        </IonCard>
                        <IonRow className='mt-4'>
                            <button className='rounded-pill w-100 p-3 bg-pink text-white'>Thay đổi</button>
                        </IonRow>
                    </IonGrid>


                </div>
            </IonModal>

        </IonPage>
    );
};

export default UserProfile;

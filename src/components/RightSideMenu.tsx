// src/components/RightSideMenu.tsx
import {
    IonContent,
    IonHeader,
    IonMenu,
    IonToolbar,
    IonIcon,
    IonRow,
    IonGrid,
    IonFooter,
    IonMenuToggle,
    IonToggle
} from '@ionic/react';
import { notificationsOutline, personOutline, settingsOutline, listOutline, sunnyOutline, moonOutline, phonePortraitOutline } from 'ionicons/icons';
import { Link, useHistory } from 'react-router-dom';
import { menuController } from '@ionic/core';
import { useEffect, useState } from 'react';
import { toggleDarkMode } from '../theme/theme';

const RightSideMenu: React.FC = () => {
    const history = useHistory();

    const logout = () => {
        history.push('/login');
        console.log(123);
    };
    const [darkMode, setDarkMode] = useState(false); // dùng boolean thay vì chuỗi

    useEffect(() => {
        const mode = localStorage.getItem("happy-corp-staff-mode");
        const type = localStorage.getItem("happy-corp-staff-mode-type");
       
        if (mode !== null) {
            setDarkMode(mode === "true"); // convert string to boolean
            toggleDarkMode(mode === "true"); // nếu muốn cập nhật giao diện khi reload
            if (mode === "true") {
                document.body.classList.add("dark-mode");
            } else {
                document.body.classList.remove("dark-mode");
            }
        }
        if (type === "system") {
             const applyMode = (isDark: boolean) => {
            setDarkMode(isDark);
            toggleDarkMode(isDark);
            document.body.classList.toggle("dark-mode", isDark);
        };
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            applyMode(prefersDark);

            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handleChange = (e: MediaQueryListEvent) => {
                applyMode(e.matches);
            };
            console.log(456);

            mediaQuery.addEventListener("change", handleChange);

            return () => {
                mediaQuery.removeEventListener("change", handleChange);
            };
        }
    }, []);

    const handleToggleCustom = (value: boolean | 'system') => {
        if (value === 'system') {
            localStorage.removeItem("happy-corp-staff-mode");
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(isDark);
            toggleDarkMode(isDark);

            document.body.classList.toggle("dark-mode", isDark);
            localStorage.setItem("happy-corp-staff-mode", String(isDark));
            localStorage.setItem("happy-corp-staff-mode-type", "system");
            console.log(123, isDark);

            return;
        } else {
            localStorage.setItem("happy-corp-staff-mode-type", "mode");
            localStorage.setItem("happy-corp-staff-mode", String(value));
            setDarkMode(value);
            toggleDarkMode(value);
            document.body.classList.toggle("dark-mode", value);
        }


    };




    return (
        <IonMenu side="end" contentId="main-content" menuId="end" type="overlay" style={{ backdropFilter: "blur(5px)" }}>
            <IonHeader >
                <IonToolbar className='shadow-none border border-0'>
                    <IonRow className='d-flex align-items-center p-2 py-3'>
                        <img src='https://static-cse.canva.com/blob/1992462/1600w-vkBvE1d_xYA.jpg' style={{ width: "40px", height: "40px" }} className='rounded-circle me-2'></img>
                        <div>
                            <div className='fs-15'>Demo</div>
                            <div className='fs-13'>demo.eclo.vn</div>
                        </div>

                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent className='page-background'>
                <IonGrid className='fs-13 p-3'>
                    <IonRow className='fs-11'>
                        Quản lý
                    </IonRow>
                    <IonMenuToggle autoHide={true}>
                        <Link to="/user-profile" className='d-flex align-items-center mt-4'>
                            <IonIcon icon={personOutline} className='me-2'></IonIcon>
                            Tài khoản
                        </Link>
                    </IonMenuToggle>

                    <IonMenuToggle autoHide={true}>
                        <Link to="/user-notification" className='d-flex align-items-center mt-4'>
                            <IonIcon icon={notificationsOutline} className='me-2'></IonIcon>
                            Thông báo
                        </Link>
                    </IonMenuToggle>

                    <IonMenuToggle autoHide={true}>
                        <Link to="/user-logs" className='d-flex align-items-center mt-4'>
                            <IonIcon icon={listOutline} className='me-2'></IonIcon>
                            Nhật ký
                        </Link>
                    </IonMenuToggle>

                    <IonMenuToggle autoHide={true}>
                        <Link to="/user-setting" className='d-flex align-items-center mt-4'>
                            <IonIcon icon={settingsOutline} className='me-2'></IonIcon>
                            Cài đặt
                        </Link>
                    </IonMenuToggle>


                    <IonRow className='fs-11 mt-4'>
                        Giao diện
                    </IonRow>
                    <IonRow className='d-flex align-items-center mt-4' onClick={() => handleToggleCustom(false)}>
                        <IonIcon icon={sunnyOutline} className='me-2'></IonIcon>
                        Sáng
                    </IonRow>
                    <IonRow className='d-flex align-items-center mt-4' onClick={() => handleToggleCustom(true)}>
                        <IonIcon icon={moonOutline} className='me-2'></IonIcon>
                        Tối
                    </IonRow>

                    <IonRow className='d-flex align-items-center mt-4' onClick={() => handleToggleCustom('system')}>
                        <IonIcon icon={phonePortraitOutline} className='me-2'></IonIcon>
                        Hệ thống
                    </IonRow>

                    <IonRow className='fs-11 mt-4'>
                        Ngôn ngữ
                    </IonRow>
                    <IonRow className='d-flex align-items-center mt-4'>
                        <IonIcon icon={personOutline} className='me-2'></IonIcon>
                        Tiếng Anh
                    </IonRow>
                    <IonRow className='d-flex align-items-center mt-4'>
                        <IonIcon icon={notificationsOutline} className='me-2'></IonIcon>
                        Tiếng Việt
                    </IonRow>

                    <IonRow className='border border-bottom-light my-3'></IonRow>
                    <IonMenuToggle autoHide={true}>
                        <button onClick={() => { logout() }} className='rounded-pill p-3 text-white w-100' style={{ backgroundColor: "#f07" }}>Đăng xuất</button>
                    </IonMenuToggle>



                </IonGrid>
            </IonContent>
            <IonFooter>
                <IonToolbar className='p-3 border border-0' style={{ backgroundColor: "#f77eb247" }}>
                    <IonRow className='text-danger fs-3 fw-bold'>ECLO</IonRow>
                    <IonRow className='fs-13 mt-1 mb-3'>Giải pháp phần mềm ERP quản lý dành cho doanh nghiệp</IonRow>
                    <IonRow>
                        <button className='rounded-pill w-100 p-3 bg-danger text-white fw-bold fs-13'>Xem thêm</button>
                    </IonRow>
                </IonToolbar>
            </IonFooter>
        </IonMenu>
    );
}

export default RightSideMenu;

import { Link, Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenuToggle,
  IonRouterOutlet,
  IonRow,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  businessOutline,
  calendarNumberOutline,
  calendarOutline,
  cashOutline,
  chatbubbleOutline,
  homeOutline,
  notificationsOutline
} from 'ionicons/icons';

import Home from './pages/Home';
import Event from './pages/Event';
import Invoices from './pages/Invoices';
import History from './pages/History';
import UserProfile from './pages/UserProfile';
import UserNotification from './pages/UserNotification';
import UserLogs from './pages/UserLogs';
import Menu from './pages/Menu';
import Brand from './pages/Brand';
import Customers from './pages/Customers';
import RoomDiagram from './pages/RoomDiagram';
import BookingTable from './pages/BookingTable';
import BookingCompleted from './pages/BookingCompleted';
import Assistant from './pages/Assistant';
import Login from './pages/Login';

import RightSideMenu from './components/RightSideMenu';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.class.css';

import './theme/variables.css';
import './App.css';

import { useLocation } from 'react-router-dom';
import ForgetPassword from './pages/ForgetPassword';
import GlobalRipple from './components/GlobalRipple';
import Chat from './pages/Chat';
import ChatDetail from './pages/ChatDetail';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Register from './pages/Register';
import ConfirmRegister from './pages/ConfirmRegister';
import ConfirmPassword from './pages/ConfirmPassword';

setupIonicReact();

const TabsWithRoutes: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" || location.pathname === "/ForgetPassword" || location.pathname === "/chat-detail" || location.pathname === "/register" || location.pathname === "/confirm-register" || location.pathname === "/confirm-password";

  const currentPath = location.pathname;
  console.log(currentPath);

  return (
    <IonSplitPane contentId="main-content">
      <RightSideMenu />

      <IonTabs>
        <IonRouterOutlet id="main-content">
          <Route path="/home" component={Home} exact />
          <Route path="/event" component={Event} exact />
          <Route path="/invoices" component={Invoices} exact />
          <Route path="/history" component={History} exact />
          <Route path="/user-profile" component={UserProfile} exact />
          <Route path="/user-notification" component={UserNotification} exact />
          <Route path="/user-logs" component={UserLogs} exact />
          <Route path="/menu" component={Menu} exact />
          <Route path="/brand" component={Brand} exact />
          <Route path="/customers" component={Customers} exact />
          <Route path="/room-diagram" component={RoomDiagram} exact />
          <Route path="/booking-table" component={BookingTable} exact />
          <Route path="/booking-completed" component={BookingCompleted} exact />
          <Route path="/assistant" component={Assistant} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/ForgetPassword" component={ForgetPassword} exact />
          <Route path="/chat" component={Chat} exact />
          <Route path="/chat-detail" component={ChatDetail} exact />

          <Route path="/register" component={Register} exact />
          <Route path="/confirm-register" component={ConfirmRegister} exact />
          <Route path="/confirm-password" component={ConfirmPassword} exact />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
        <IonHeader slot='top' style={{ backdropFilter: "blur(50px)" }}>
          <IonToolbar className='shadow-none border border-0'>
            <IonRow className='d-flex justify-content-between align-items-center p-1'>
              <img src='../image/happy-corp-logo.png' alt='logo' className='' style={{ width: "70px" }}></img>
              <div className='d-flex align-items-center'>
                <button className='rounded-circle p-2 bg-switch-box' style={{ width: "35px", height: "35px" }}> <IonIcon icon={businessOutline} size='15px'></IonIcon></button>
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
        {!isLoginPage && (
          <IonTabBar slot="bottom" className="custom-tabbar">
            <IonTabButton tab="tab1" href="/booking-table" className={` ${currentPath === '/booking-table' ? 'tab-selected' : 'ion-tab-button-custom'}`}>
              <IonIcon icon={calendarOutline} />
              <IonLabel>Đặt bàn</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/chat" className={` ${currentPath === '/chat' ? 'tab-selected' : 'ion-tab-button-custom'}`}>
              <IonIcon icon={chatbubbleOutline} />
              <IonLabel>Chat</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="tab3"
              href="/home"
              className={` ${currentPath === '/home' ? 'tab-selected' : 'ion-tab-button-custom'}`}
            >
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="tab4" href="/history" className={` ${currentPath === '/history' ? 'tab-selected' : 'ion-tab-button-custom'}`}>
              <IonIcon icon={calendarNumberOutline} />
              <IonLabel>Lịch sử</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab5" href="/invoices" className={` ${currentPath === '/invoices' ? 'tab-selected' : 'ion-tab-button-custom'}`}>
              <IonIcon icon={cashOutline} />
              <IonLabel>Hóa đơn</IonLabel>
            </IonTabButton>
          </IonTabBar>
        )}
      </IonTabs>
    </IonSplitPane>
  );
};

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <IonApp>
        <GlobalRipple />
        <IonReactRouter>
          <TabsWithRoutes />
        </IonReactRouter>
      </IonApp>
    </I18nextProvider>
  );
};

export default App;

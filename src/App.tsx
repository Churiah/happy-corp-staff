import { Redirect, Route, useLocation } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendarNumberOutline, calendarOutline, cashOutline, chatbubbleOutline, ellipse, homeOutline, square, star, triangle } from 'ionicons/icons';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import './App.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
import '@ionic/react/css/palettes/dark.class.css';
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

import Event from './pages/Event';
import Invoices from './pages/Invoices';
import History from './pages/History';
import UserProfile from './pages/UserProfile';
import UserNotification from './pages/UserNotification';
import UserLogs from './pages/UserLogs';
import RightSideMenu from './components/RightSideMenu';
import { useEffect } from 'react';
import Menu from './pages/Menu';
import Brand from './pages/Brand';
import Customers from './pages/Customers';
import RoomDiagram from './pages/RoomDiagram';
import BookingTable from './pages/BookingTable';
import BookingCompleted from './pages/BookingCompleted';

setupIonicReact();



const App: React.FC = () => {
  return (

    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main-content">
          <RightSideMenu />

          <IonTabs>
            <IonRouterOutlet id="main-content">
              <Route path="/home" component={Home} exact ></Route>

              <Route path="/event" component={Event} exact ></Route>
              <Route path="/invoices" component={Invoices} exact ></Route>
              <Route path="/history" component={History} exact ></Route>
              <Route path="/user-profile" component={UserProfile} exact ></Route>
              <Route path="/user-notification" component={UserNotification} exact ></Route>
              <Route path="/user-logs" component={UserLogs} exact ></Route>
              <Route path="/menu" component={Menu} exact ></Route>
              <Route path="/brand" component={Brand} exact ></Route>
              <Route path="/customers" component={Customers} exact ></Route>
              <Route path="/room-diagram" component={RoomDiagram} exact ></Route>
              <Route path="/booking-table" component={BookingTable} exact ></Route>
              <Route path="/booking-completed" component={BookingCompleted} exact ></Route>

              <Redirect exact from="/" to="/home" />

            </IonRouterOutlet>
            <IonTabBar slot="bottom" className="custom-tabbar">
              <IonTabButton tab="tab1" href="/user-profile" className="ion-tab-button-custom">
                <IonIcon icon={calendarOutline} />
                <IonLabel>Đặt bàn</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/event" className="ion-tab-button-custom">
                <IonIcon icon={chatbubbleOutline} />
                <IonLabel>Chat</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/home" className="ion-tab-button-custom">
                <IonIcon icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab4" href="/history" className="ion-tab-button-custom">
                <IonIcon icon={calendarNumberOutline} />
                <IonLabel>Lịch sử</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab5" href="/invoices" className="ion-tab-button-custom">
                <IonIcon icon={cashOutline} />
                <IonLabel>Hóa đơn</IonLabel>
              </IonTabButton>
            </IonTabBar>

          </IonTabs>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;

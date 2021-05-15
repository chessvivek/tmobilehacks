import './DashButtonLong.css';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

interface ContainerProps {
  content: any;
  color: String,
  href: any,
}

const DashButtonLong: React.FC<ContainerProps> = ({href, content, color}) => {
  return (
    <Link to={href}>
    <button className="dash-button-long">
      <IonIcon name="location-outline"></IonIcon>
      <strong>{content}</strong>
    </button>
    </Link>
  );
};

export default DashButtonLong;

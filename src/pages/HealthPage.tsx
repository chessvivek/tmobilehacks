import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import { camera, trash, close } from 'ionicons/icons';
import { IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonActionSheet, IonButton, IonButtons, IonBackButton } from '@ionic/react';


import './Tab2.css';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [{name: 'A', uv: 400, pv: 2400, amt: 2400},
{name: 'B', uv: 200, pv: 900, amt: 2400},
{name: 'C', uv: 300, pv: 300, amt: 2400},
{name: 'D', uv: 100, pv: 2100, amt: 2400},
{name: 'E', uv: 160, pv: 2400, amt: 2400},
{name: 'F', uv: 180, pv: 1500, amt: 2400},
];

const HealthPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="danger" defaultHref="/" />
          </IonButtons>
          <IonTitle color="danger"><b>Health</b></IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent> */}
        <IonContent fullscreen>
          <IonButton color="danger" size="large" expand="block" strong={true} href="/">See nearby clinics</IonButton>
          <br></br>
          <br></br>
          <LineChart width={300} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="red" />
            {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
            {/* <CartesianGrid stroke="#ccc" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <br></br>
            {/* <Legend /> */}
          </LineChart>
          <br></br>
          <br></br>
          <LineChart width={300} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="red" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <br></br>
          </LineChart>
          <br></br>
          <br></br>
          <LineChart width={300} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="red" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <br></br>
          </LineChart>
          {/* <p class="ion-padding-start ion-padding-end"><ion-button onclick="scrollToTop()" expand="block" fill="outline">Scroll To Top</ion-button></p> */}
        </IonContent>
    </IonPage>
  );
};

export default HealthPage;

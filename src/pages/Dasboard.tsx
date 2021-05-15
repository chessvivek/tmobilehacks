import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import DashButton from '../components/DashButton';
import DashButtonLong from '../components/DashButtonLong';
import { images, square, triangle, locationOutline, location, restaurant, bagHandle, heart, maleFemale, exit, wallet, people } from 'ionicons/icons';
import './Tab1.css';

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color="tertiary">
          <IonTitle className="ion-text-center" size="large"><h1><b>Dashboard</b></h1></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="tertiary" >
        <div style={{textAlign: "center"}}>
          <DashButtonLong href="/location" color="red" content={["you're in", <br></br>, <div style={{display: "inline-block", verticalAlign: "middle", marginRight: 5}}><IonIcon icon={location} size="large"></IonIcon></div>,  <div style={{fontSize: 28, display: "inline-block", verticalAlign: "middle"}} >Beaver Stadium </div>]}> </DashButtonLong>
        </div>

        <div style={{marginLeft: 25, marginTop: 10, height: 50}}>
          <div style={{display: "inline-block", verticalAlign: "middle", marginRight: 5}}>
            <IonIcon icon={location} size="large"></IonIcon>
          </div>
          <div style={{fontSize: 28, display: "inline-block", verticalAlign: "middle"}} >
            <b>Near you</b>
          </div>
        </div>

        <div style={{textAlign: "center"}}>
          <DashButton color="red" content={["Restuarants", <br></br>, <IonIcon icon={restaurant} size="large"></IonIcon>]}> </DashButton>
          <DashButton color="red" content={["Rest Rooms", <br></br>, <IonIcon icon={maleFemale} size="large"></IonIcon>]}> </DashButton>
          <DashButton color="red" content={["ATMs", <br></br>, <IonIcon icon={wallet} size="large"></IonIcon>]}> </DashButton>
          <DashButton color="red" content={["Exits", <br></br>, <IonIcon icon={exit} size="large"></IonIcon>]}> </DashButton>
          <DashButton color="red" content={[<span style={{color: "#eb445a"}}>First Aid</span>, <br></br>, <IonIcon icon={heart} size="large" color="danger"></IonIcon>]}> </DashButton>
          <DashButton color="red" content={["Lounges", <br></br>, <IonIcon icon={bagHandle} size="large"></IonIcon>]}> </DashButton>
        </div>

        <div style={{textAlign: "center"}}>
          <DashButtonLong href = "/friends" color="red" content={[<div style={{display: "inline-block", verticalAlign: "middle", marginRight: 5}}><IonIcon icon={people} size="large"></IonIcon></div>,  <div style={{fontSize: 20, display: "inline-block", verticalAlign: "middle", marginRight: 15}} >Find your friends </div>]} > </DashButtonLong>
        </div>

        <div style={{textAlign: "center"}}>
          <DashButtonLong href="/health" color="red" content={[<div style={{display: "inline-block", verticalAlign: "middle", marginRight: 5}}><IonIcon icon={heart} size="large" color="danger"></IonIcon></div>,  <div style={{fontSize: 20, display: "inline-block", verticalAlign: "middle", marginRight: 15, color: "#eb445a"}} >Check your health </div>]} > </DashButtonLong>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;

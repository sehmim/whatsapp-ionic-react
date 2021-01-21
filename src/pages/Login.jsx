import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { logIn } from 'ionicons/icons'
import React, { useState, useContext } from 'react'

import "../App.css";

import { AppContext } from "../State";


const Login = ()=> {
    const [passcode, setPasscode] = useState('')

    const logIn = () => {
        // Show login Process...

        // Connect to firebase and check for user passcode

        // Change state

        // Hide Loading...
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="login-bar">
                    <IonTitle>Two-step Verification</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="passcode-text">
                    Enter a four digits passcode to login to this whatsapp clone which you'll be asked for when you register your phone number 
                </div>

                <div className="passcode-input-section">
                    <IonItem className="passcode-input">
                        <IonInput value={passcode} onIonChange={ (e) => setPasscode(e.detail.value)}></IonInput>
                    </IonItem>
                </div>

                <IonButton disabled={!passcode} className="login-button" onClick={()=>{logIn()}}>Login</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Login

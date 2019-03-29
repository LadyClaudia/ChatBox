import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCVSfusywceAI2_aRm8__sRBlleWxFMe-M",
    authDomain: "chatbox-app-a0326.firebaseapp.com",
    databaseURL: "https://chatbox-app-a0326.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
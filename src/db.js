// Conveniently import this file anywhere to use db

import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
    .initializeApp({ projectId: 'torretasksdo' })
    .firestore()


const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

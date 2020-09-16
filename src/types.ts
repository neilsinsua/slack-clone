import firebase from 'firebase';

export type Timestamp = firebase.firestore.Timestamp;

export interface messagesType {
    message: string,
    timestamp: Timestamp,
    user: string,
    userImage: string,
}

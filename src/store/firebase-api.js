import firebase from 'firebase';
import { db } from './firebase';

export const addBugsToServer = (newBug) => {
  const timestampString = new Date().getTime();

  db.collection('bugs')
    .doc(`${timestampString}${newBug.title}`)
    .set({
      id: `${timestampString}${newBug.title}`,
      title: newBug.title,
      details: newBug.details,
      steps: newBug.steps,
      version: newBug.version,
      priority: newBug.priority,
      assigned: newBug.assigned,
      creator: newBug.creator,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });

  //   db.collection('bugs').add({
  //     //id: `${firebase.firestore.FieldValue.serverTimestamp()}${newBug.title}`,
  //     //uid: newBug.uid,
  //     title: newBug.title,
  //     details: newBug.details,
  //     steps: newBug.steps,
  //     version: newBug.version,
  //     priority: newBug.priority,
  //     assigned: newBug.assigned,
  //     creator: newBug.creator,
  //     time: firebase.firestore.FieldValue.serverTimestamp(),
  //   });

  console.log('adding succeeded');
};

// Add a new document with a generated id.
// db.collection('cities')
//   .add({
//     name: 'Tokyo',
//     country: 'Japan',
//   })
//   .then((docRef) => {
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch((error) => {
//     console.error('Error adding document: ', error);
//   });

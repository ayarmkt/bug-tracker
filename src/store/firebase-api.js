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

export const getBugsFromServer = async () => {
  const bugs = await db.collection('bugs').orderBy('priority');

  bugs.get().then((querySnapshot) => {
    let bugsList = [];
    querySnapshot.forEach((doc) => {
      bugsList.push({
        id: doc.data().id,
        title: doc.data().title,
        details: doc.data().details,
        steps: doc.data().steps,
        version: doc.data().version,
        priority: doc.data().priority,
        assigned: doc.data().assigned,
        creator: doc.data().creator,
        time: doc.data().time,
      });
    });
    return bugsList;
  });

  console.log('getting succeeded');
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

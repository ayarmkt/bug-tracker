//import { useDispatch } from 'react-redux';
import { showNotification } from './ui-slice';
import { getBugs } from './bug-slice';

const databaseURL = process.env.REACT_APP_DATABASE_URL;

export const sendNewBugsToServer = (newBug) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending data...',
      })
    );

    const storeData = async () => {
      //console.log('running sendBugsToServer');

      const response = await fetch(`${databaseURL}/bugs.json`, {
        method: 'POST',
        body: JSON.stringify({
          id: `${new Date().getTime()}${newBug.title}`.split(' ').join(''),
          title: newBug.title,
          details: newBug.details,
          steps: newBug.steps,
          version: newBug.version,
          priority: newBug.priority,
          assigned: newBug.assigned,
          creator: newBug.creator,
          time: new Date().getTime(),
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('cannot store new bug');
      }
    };

    try {
      storeData();
      dispatch(
        showNotification({
          status: 'success',
          title: 'Success',
          message: 'Sent data successfully!',
        })
      );
    } catch (error) {
      console.error(error.message);
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error',
          message: 'Cannot store new data',
        })
      );
    }
  };

  //const dispatch = useDispatch();

  // const storeData = async (newBug) => {
  //   //console.log('running sendBugsToServer');

  //   const response = await fetch(`${databaseURL}/bugs.json`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       id: `${new Date().getTime()}${newBug.title}`.split(' ').join(''),
  //       title: newBug.title,
  //       details: newBug.details,
  //       steps: newBug.steps,
  //       version: newBug.version,
  //       priority: newBug.priority,
  //       assigned: newBug.assigned,
  //       creator: newBug.creator,
  //       time: new Date().getTime(),
  //     }),
  //     headers: { 'Content-Type': 'application/json' },
  //   });

  //   if (!response.ok) {
  //     throw new Error('cannot store new bug');
  //   }

  //   dispatch(
  //     showNotification({
  //       status: 'Success',
  //       title: 'Success',
  //       message: 'Sent data successfully!',
  //     })
  //   );
  // };

  // try {
  //   storeData(newBug);
  // } catch (error) {
  //   console.error(error.message);
  //   dispatch(
  //     showNotification({
  //       status: 'Error',
  //       title: 'Error',
  //       message: 'Cannot store new data',
  //     })
  //   );
  // }
};

export const sendUpdatedBugToServer = (newBug, key) => {
  // const dispatch = useDispatch();

  const storeData = async (newBug) => {
    //console.log('running sendUpdatedBugsToServer');
    //console.log(newBug);

    const response = await fetch(`${databaseURL}/bugs/${key}.json`, {
      method: 'PUT',
      body: JSON.stringify(newBug),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('cannot store new bug');
    }

    // dispatch(
    //   showNotification({
    //     status: 'Success',
    //     title: 'Success',
    //     message: 'Sent data successfully!',
    //   })
    // );
  };

  try {
    storeData(newBug);
  } catch (error) {
    console.error(error.message);
    // dispatch(
    //   showNotification({
    //     status: 'Error',
    //     title: 'Error',
    //     message: 'Cannot store updated data',
    //   })
    // );
  }
};

export const sendDeletedBugInfoToServer = (selectedBug, key) => {
  //const dispatch = useDispatch();

  const storeData = async (selectedBug) => {
    //console.log('running sendDeletedBugInfoToServer');
    //console.log(selectedBug);

    const response = await fetch(`${databaseURL}/bugs/${key}.json`, {
      method: 'DELETE',
      body: JSON.stringify(selectedBug),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('cannot store new bug');
    }

    // dispatch(
    //   showNotification({
    //     status: 'Success',
    //     title: 'Success',
    //     message: 'Sent data successfully!',
    //   })
    // );
  };

  try {
    storeData(selectedBug);
  } catch (error) {
    console.error(error.message);
    // dispatch(
    //   showNotification({
    //     status: 'Error',
    //     title: 'Error',
    //     message: 'Cannot store updated data',
    //   })
    // );
  }
};

export const getBugsFromServer = () => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: 'pending',
        title: 'Fetching...',
        message: 'Fetching data...',
      })
    );

    const fetchData = async () => {
      const response = await fetch(`${databaseURL}/bugs.json`);

      if (!response.ok) {
        throw new Error('cannot get bugs list');
      }

      const data = await response.json();

      let bugsList = [];
      //Firebase has a key for each item
      for (const key in data) {
        const newData = { ...data[key], key };
        bugsList.push(newData);
      }

      return bugsList;
    };

    try {
      const bugsList = await fetchData();
      //return bugsList;
      console.log('fetching data!!!');
      dispatch(getBugs(bugsList));
      dispatch(
        showNotification({
          status: 'success',
          title: 'Success',
          message: 'Fetched data successfully!',
        })
      );
    } catch (error) {
      console.error(error.message);
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error',
          message: 'Cannot fetch stored data',
        })
      );
    }
  };
};

// export const getBugsFromServer = async () => {
//   const fetchData = async () => {

//     const response = await fetch(`${databaseURL}/bugs.json`);

//     if (!response.ok) {
//       throw new Error('cannot get bugs list');
//     }

//     const data = await response.json();

//     let bugsList = [];
//     //Firebase has a key for each item
//     for (const key in data) {
//       const newData = { ...data[key], key };
//       bugsList.push(newData);
//     }

//     return bugsList;
//   };

//   try {
//     const bugsList = await fetchData();
//     return bugsList;
//   } catch (error) {
//     console.error(error.message);
//   }
// };

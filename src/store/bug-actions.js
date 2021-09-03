//import { useDispatch } from 'react-redux';
import { showNotification } from './ui-slice';

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

export const getBugsFromServer = async () => {
  //const dispatch = useDispatch();

  const fetchData = async () => {
    //console.log('running getBugsFromServer');

    const response = await fetch(`${databaseURL}/bugs.json`);

    if (!response.ok) {
      throw new Error('cannot get bugs list');
    }

    // dispatch(
    //   showNotification({
    //     status: 'Success',
    //     title: 'Success',
    //     message: 'Fetched data successfully!',
    //   })
    // );

    const data = await response.json();
    //console.log(data);
    // for (const key in data) {
    //   console.log({ ...data[key], key });
    // }

    let bugsList = [];
    //Firebase has a key for each item
    for (const key in data) {
      // bugsList.push({
      //   id: data[key].id,
      //   title: data[key].title,
      //   details: data[key].details,
      //   steps: data[key].steps,
      //   version: data[key].version,
      //   priority: data[key].priority,
      //   assigned: data[key].assigned,
      //   creator: data[key].creator,
      //   time: data[key].time,
      //   //keyId: key,
      // });
      const newData = { ...data[key], key };
      bugsList.push(newData);
    }
    //console.log(bugsList);
    return bugsList;

    // const sortedArray = [...bugsList];
    // if (sortedArray.length > 1) {
    //   sortedArray.sort((a, b) => Number(a.priority) - Number(b.priority));
    // }
    // return sortedArray;
  };

  try {
    const bugsList = await fetchData();
    return bugsList;
  } catch (error) {
    console.error(error.message);
    // dispatch(
    //   showNotification({
    //     status: 'Error',
    //     title: 'Error',
    //     message: 'Cannot fetch stored data',
    //   })
    // );
  }
};

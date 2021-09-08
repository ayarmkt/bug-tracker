//import { useDispatch } from 'react-redux';
import { showNotification } from './ui-slice';
import { getBugs } from './bug-slice';
import { updateBugs } from './bug-slice';
import { addNewBugs } from './bug-slice';
import { deleteBugs } from './bug-slice';

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
      //console.log('sending!!!');
      const response = await fetch(`${databaseURL}/bugs.json`, {
        method: 'POST',
        body: JSON.stringify({
          id: `${new Date().getTime()}${newBug.title}`.split(' ').join(''),
          title: newBug.title,
          details: newBug.details,
          steps: newBug.steps,
          // version: newBug.version,
          status: newBug.status ? newBug.status : 'New',
          priority: newBug.priority ? newBug.priority : '1',
          assigned: newBug.assigned,
          creator: newBug.creator,
          time: new Date().getTime(),
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('cannot send new bug');
      }
    };

    try {
      await storeData();
      //console.log('sending POST request!!!');
      dispatch(addNewBugs(newBug));
      dispatch(
        showNotification({
          status: 'success',
          title: 'Success',
          message: 'Sent new data successfully!',
        })
      );
    } catch (error) {
      console.error(error.message);
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error',
          message: 'Cannot send new data',
        })
      );
    }
  };
};

export const sendUpdatedBugToServer = (newBug, key) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending data...',
      })
    );

    const storeData = async () => {
      const response = await fetch(`${databaseURL}/bugs/${key}.json`, {
        method: 'PUT',
        body: JSON.stringify(newBug),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('cannot send updated bug');
      }

      //dispatch(updateBugs(newBug));
    };

    try {
      await storeData();
      //dispatch(updateBugs(newBug));
      //console.log(`updated: ${newBug}`);
      dispatch(updateBugs(newBug));
      dispatch(
        showNotification({
          status: 'success',
          title: 'Success',
          message: 'Sent updated data successfully!',
        })
      );
    } catch (error) {
      console.error(error.message);
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error',
          message: 'Cannot send updated data',
        })
      );
    }
  };
};

export const sendDeletedBugInfoToServer = (selectedBug, key) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending data...',
      })
    );

    const storeData = async () => {
      const response = await fetch(`${databaseURL}/bugs/${key}.json`, {
        method: 'DELETE',
        body: JSON.stringify(selectedBug),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('cannot send new bug');
      }
    };

    try {
      await storeData();
      dispatch(deleteBugs(selectedBug));
      dispatch(
        showNotification({
          status: 'success',
          title: 'Success',
          message: 'Sent deleted data successfully!',
        })
      );
    } catch (error) {
      console.error(error.message);
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error',
          message: 'Cannot send deleted data',
        })
      );
    }
  };
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

      //console.log('fetching data!!!');
      dispatch(getBugs(bugsList));
      dispatch(
        showNotification({
          status: 'success',
          title: 'Success',
          message: 'Fetched data successfully!',
        })
      );
      //return await fetchData();
      //return bugsList;
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

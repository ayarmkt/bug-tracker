const databaseURL = process.env.REACT_APP_DATABASE_URL;

export const sendBugsToServer = (newBug) => {
  const storeData = async (newBug) => {
    console.log('running sendBugsToServer');

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
    storeData(newBug);
  } catch (error) {
    console.error(error.message);
  }
};


export const getBugsFromServer = async () => {
  const fetchData = async () => {
    console.log('running getBugsFromServer');

    const response = await fetch(`${databaseURL}/bugs.json`);

    if (!response.ok) {
      throw new Error('cannot get bugs list');
    }

    const data = await response.json();
    console.log(data);

    let bugsList = [];
    //Firebase has a key for each item
    for (const key in data) {
      bugsList.push({
        id: data[key].id,
        title: data[key].title,
        details: data[key].details,
        steps: data[key].steps,
        version: data[key].version,
        priority: data[key].priority,
        assigned: data[key].assigned,
        creator: data[key].creator,
        time: data[key].time,
      });
    }
    console.log(bugsList);
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
  }
};

// export const sendBugsToServer = (newBug) => {
//   return () => {
//     const storeData = async (newBug) => {
//       console.log('running storeDataToServer');

//       const response = await fetch(databaseURL, {
//         method: 'POST',
//         body: JSON.stringify({
//           id: `${new Date().getTime()}${newBug.title}`,
//           title: newBug.title,
//           details: newBug.details,
//           steps: newBug.steps,
//           version: newBug.version,
//           priority: newBug.priority,
//           assigned: newBug.assigned,
//           creator: newBug.creator,
//           time: new Date().getTime(),
//         }),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (!response.ok) {
//         throw new Error('cannot store new bug');
//       }
//     };

//     try {
//       storeData(newBug);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
// };

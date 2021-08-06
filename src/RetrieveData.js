//import BugModel from "../Models/BugModel";

const DUMMY_DATA=[{_id: 23456789,name: 'Crashed on Load', details: 'Crashed after 3 seconds', steps: 'Open application and it will crash', version: 'V2.0', priority: 1, assigned: 'Aya', creator: 'Joe', time: '23:30'}, {_id: 23456788,name: 'cannot enter', details: 'Crashed after 3 seconds', steps: 'Open application and it will crash', version: 'V2.0', priority: 3, assigned: 'Aya', creator: 'Joe', time: '23:38'}]

const RetrieveData=()=>{
    const sortedData = DUMMY_DATA.sort((a, b)=>{return a.priority - b.priority})

    return sortedData;
}

export default RetrieveData;




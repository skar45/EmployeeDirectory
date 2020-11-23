import React,{useEffect, useState} from 'react'
import Table from './components/Table'
import ListContext from './components/utils/GlobalState'
import NavBar from './components/NavBar'

function App() {
  const [userList, setUserList] = useState([])
  useEffect({
   getUserList
  },[])
  

  
  async function getUserList() {
    const res = await fetch('https://randomuser.me/api/?results=30').then(r=>r.json())
    setUserList(res.results);
  };
  
 


  return (
    <ListContext.Provider value ={{list: userList, change: function (val){setUserList(val)}}}>
    <NavBar></NavBar>
    <Table></Table>
    </ListContext.Provider>
  );
}




export default App;

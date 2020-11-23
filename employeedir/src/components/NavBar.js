import React, {useContext, useRef} from 'react'
import ListContext from './utils/GlobalState'

function NavBar(){
    const ref = useRef()
    const list = useContext(ListContext).list;
    const changeList = useContext(ListContext).change

    async function sortName(){
        const newData = [...list]
        newData.sort(function(a,b){ 
            if(a.name.first < b.name.first) {
                return -1;
            }
            if(a.name.first > b.name.first) { 
                return 1; 
            }
            return 0;
        })
       changeList(newData)
    }

    function searchFilter(){
        const newList = list.filter(value=>value.indexOf(ref.current.value)>-1)
        changeList(newList)
    }
    
    return(<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" onClick={sortName}>Sort By Name</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input ref={ref} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={searchFilter}>Search</button>
            </form>
        </div></nav>)
}

export default NavBar
import axios from 'axios'
import { useState, useEffect } from 'react'

const UserList = () => {
    const [listOfUSer, setListOfUSer] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{setListOfUSer(res.data)})
    }, [])
    return (
        <div className="users">
            {listOfUSer.map(x=><h3 key={x.id}>{x.name}</h3>)}
        </div>
    )
}
export default UserList;
import React, {useState} from 'react';
import {
    getDocs,
    collection
} from "firebase/firestore";
import {db} from '../../firebase';
import Table from 'react-bootstrap/Table';

function UserList() {
  const [users, setUsers] = useState([]);

  getDocs(collection(db, "Users")) // get all users details from the collection
    .then((querySnapshot)=>{               
        const newData = querySnapshot.docs
            .map((doc) => ({...doc.data(), id:doc.id }));
        setUsers(newData);
    })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>User Name</th>
          <th>Email Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UserList;
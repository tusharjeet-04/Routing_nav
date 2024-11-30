import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './Home.css'

const UserDetails = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [Users, setUsers] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) =>
        alert.error("..Error to fatch Data, Try again..", error)
      );
  }, [id]);

  if (!Users) {
    return <div>Loading...</div>; // Show a loading message if the data is not yet loaded
  }

  return (
    <>
      <div>user detalis:</div>
      <div className="details">
        <div>User ID: {id}</div>
        <div>User Name: {Users.username}</div>
        <div>User Email: {Users.email}</div>
        <div>User Phone: {Users.phone}</div>
        <div>User website: {Users.website}</div>
      </div>
      <div className="buttons">
        <button onClick={() => Navigate(-1)}>Go Back</button>
        <button onClick={() => Navigate('./Cards')}>Redirect Card Page</button>
      </div>
    </>
  );
};

export default UserDetails;
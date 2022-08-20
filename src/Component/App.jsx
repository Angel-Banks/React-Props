import React from "react";
import Card from "./Card";


import Avatar from "./Avatar";

import contacts from "../contacts";

function createCard (contact){

  return <Card
    id = {contact.id}
    key = {contact.id}
    name = {contact.name}
    img = {contact.imgURL}
    tel = {contact.phone}
    email = {contact.email}
    
  />
}

function App (){

    return (
        <div>
    <h1 className = "heading">My Contacts</h1>

    <Avatar img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFidJ_--dSRcm9Dd_R0rR7Xcg3u4oKNJOV5mz8rYvNMw&s"/>

      {contacts.map(createCard)}

   
    {/* <Card
      name={contacts[0].name}
      img={contacts[0].imgURL}
      tel = {contacts [0].phone}
      email={contacts[0].email}
    />

    <Card
     name={contacts[1].name}
      img={contacts[1].imgURL}
      tel = {contacts [1].phone}
      email={contacts[1].email}
    />

<Card
  name={contacts[2].name}
      img={contacts[2].imgURL}
      tel = {contacts [2].phone}
      email={contacts[2].email}
    /> */}
  </div>
    )
}

export default App;
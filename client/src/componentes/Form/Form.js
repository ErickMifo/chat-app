import React, { useState } from 'react';

import { Link } from "react-router-dom";

import './styles.css'


export default function Form() {

  const [name, setName] = useState('');

  const [room, setRoom] = useState('');



  return (

<form className="form1">

        <div >

          <input placeholder="Nome" className="ipt1" type="text" onChange={(event) => setName(event.target.value)} />


        <br />

          <input placeholder="Sala" className="ipt1" type="text" onChange={(event) => setRoom(event.target.value)} />

        </div>

        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>

          <button className="btn1" type="submit">Entrar</button>

        </Link>
</form>   
  );

}
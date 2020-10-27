import React, { useState } from 'react';
import CaixaEmoji from '@material-ui/core/Drawer'
import './styles.css';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';



const Input = ({ setMessage, sendMessage, message, messages }) => {
  const [state, setState] = useState({
  bottom: false,
})

const toggleDrawer = (slider, open) => (event) => {
  setState({ state, [slider]: open})
}


const list = (slider) => (

<>
  <div 
  className="emojiContainer"
  onClick={toggleDrawer(slider, false)}
   >
  <button className='emoji1' onClick={() => setMessage(' OwO')}>OwO</button>
  <button className='emoji1' onClick={() => setMessage(' UwU')}>UwU</button>
  <button className='emoji1' onClick={() => setMessage(' :D')}>:D</button>
  <button className='emoji1' onClick={() => setMessage(' D:')}>D:</button>
  <button className='emoji1' onClick={() => setMessage(' ^_^~')}>^_^~</button>
  <button className='emoji1' onClick={() => setMessage(' :^D')}>:^D</button>
  <button className='emoji1' onClick={() => setMessage(" '-'")}>'-'</button>
  <button className='emoji1' onClick={() => setMessage(' :X')}>:x</button>
  <button className='emoji1' onClick={() => setMessage(' xD')}>xD</button>
  </div>

</>
)


return (
<>

  <form 
  className="form">

    <IconButton 
    className="emoji"
    onClick={toggleDrawer("bottom", true)}
    >
    <SentimentVerySatisfiedIcon />
    </IconButton>
    <input

      className="input1"

      type="text"

      placeholder="Escreva uma mensagem..."

      value={message}

      onChange={({ target: { value } }) => setMessage(value)}

      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}

      

    />

  <IconButton
    onClick={e => sendMessage(e)}
    className="send">

    <SendIcon/>

  </IconButton>

  <CaixaEmoji
  anchor="bottom"
  open={state.bottom}
  onClose={toggleDrawer("bottom", false)}
  >
    {list("bottom")}
  </CaixaEmoji>
  
  </form>
</>
)
}


export default Input;
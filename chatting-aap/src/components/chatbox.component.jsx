import './chatbox.css';
import { useState } from 'react';
import TextInput from './text-input.component';
import ChatWindow from './chat-window.component';
import ChatNav from './chat-nav.component';

export default function ChatBox() {

  const [bobChat, setBobChat] = useState([]);
  const [johnChat, setJohnChat] = useState([]);
  const [person, setPerson] = useState('bob');

  function handle_Bob_Chat(data) {

    setBobChat(data);
  }

  function handle_John_Chat(data) {


    // data.map((obj) => {
    //   alert(obj.id + " " + obj.chats);
    // });
    setJohnChat(data);
  }

  function handleUser(user) {
    setPerson(user);
    /* console.log('person : ', person); */
  }

  return (
    <>
      <div className="chatbox w-50 mx-auto d-flex flex-column">
        {/* Chat window nav */}
        <div className='nav d-flex justify-content-between'>
          <ChatNav person={person} />
        </div>
        {/* text messages */}
        <div className='overflow-auto chat-window mt-2 pb-1'>
          <ChatWindow bobChat={bobChat} johnChat={johnChat} person = {person} />
        </div>
        {/* search field */}
        <div className='d-flex w-50 search-field align-items-center'>
          <TextInput
            send_Bob_Chat_to_Parent={handle_Bob_Chat}
            send_John_Chat_to_Parent={handle_John_Chat}
            send_User_to_Parent={handleUser}
          />
        </div>
      </div>
    </>
  );
}
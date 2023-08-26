import './text-input.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function TextInput({ send_Bob_Chat_to_Parent, send_John_Chat_to_Parent, send_User_to_Parent }) {
    //declaring and initializing states for the two users of the chat
    //storing john's chat history here
    const [chatJohn, setChatJohn] = useState({
        message: '',
        input_field: '',
        chat_history: []
    });
    // console.log("john initial : ");
    // console.log(chatJohn);

    //storing bob's chat history here
    const [chatBob, setChatBob] = useState({
        message: '',
        input_field: '',
        chat_history: []
    });

    // >>>>>>  const [message,setmessage]=useState({});

    //this state is for getting the selected user;
    //if user is switched to bob; texts will be send from bob and if john then texts will get send from john
    //p.s using <select> for getting users because haven't studied routing yet
    const [selectedUser, setSelectedUser] = useState('john');

    /*   console.log('selected user :' , selectedUser); */

    //func triggered when selecting user
    function handleUser(e) {
        setSelectedUser(e.target.value);
       /*  send_User_to_Parent(selectedUser); */
    }

    //var [inputmessage, setinputmsg] = useState("");


    if (chatJohn.chat_history.length > 0) {
        send_John_Chat_to_Parent(chatJohn.chat_history);

    }
    if (chatBob.chat_history.length > 0)
    {
        send_Bob_Chat_to_Parent(chatBob.chat_history);
    }

    send_User_to_Parent(selectedUser);

    //this func is called when the user is  typing the message
    function handleInput(e) {
        if (selectedUser === 'john') {
            // getting text typed by john
            setChatJohn({
                ...chatJohn,
                input_field: e.target.value,
            });

        }

        if (selectedUser === 'bob') {
            //getting text typed by bob
            setChatBob({
                ...chatBob,
                input_field: e.target.value,
            });

        }
    }




    //this func will be triggered when sending the message
    function handleSend() {
        //if the user is john then this condition will run    
        if (selectedUser === 'john') {
            //alert(message);
            //send_John_Chat_to_Parent(message);
            //setmessage("");

            //we will make sure that the search field is not empty
            if (chatJohn.input_field !== '') {

                setChatJohn({
                    //    message : inputmessage,
                    //message: chatJohn.input_field,
                    chat_history: [

                        ...chatJohn.chat_history,
                        {

                            id: Math.floor(Math.random() * 10),
                            chats: chatJohn.input_field
                        }
                    ],
                    input_field: '',
                })
                // alert(chatJohn.message);
                // console.log('john chat hhistory before sending :' , chatJohn.chat_history.chats);
                // if(chatJohn.chat_history.chats != '' || chatJohn.chat_history.chats != null)
                // console.log('john chat hhistory after sending :' , chatJohn.chat_history.chats);
                //  setinputmsg("");



            }

            //else this alert will display the following message.
            else {
                alert('enter valid input!');
            }
        }

        //if the user is bob then this condition will be executed
        if (selectedUser === 'bob') {
            //we will make sure that the search field is not empty
            if (chatBob.input_field !== '') {
                setChatBob({
                 //   message: chatBob.input_field,
                    chat_history: [
                        ...chatBob.chat_history,
                        {
                            id: Math.floor(Math.random()*10),
                            chats: chatBob.input_field
                        }
                    ],
                    input_field: '',

                })

            }

            //else this alert will display the following message.
            else {
                alert('enter valid input!');
            }

        }

    }


    return (
        <>

            <div style={{ width: '18%' }}>
                <select
                    value={selectedUser}
                    onChange={handleUser}
                    style={{ width: '83%', borderRadius: '5px', color: '#3B444B', outline: 'none', height: '5vh' }}
                    className='small d-block mx-auto'
                >
                    <option value='bob'>Bob</option>
                    <option value='john'>John</option>
                </select>
            </div>
            {/*  this search field will be displayed if the user is switched to john */}
            <input
                type="text"
                placeholder="Message ..."
                value={chatJohn.input_field}
                className='w-75 small'
                style={{ display: selectedUser === 'john' ? 'block' : 'none' }}
                onChange={handleInput}
            />
            {/* this search field will be displayed if the user is switched to bob */}
            <input
                type="text"
                placeholder="Message ..."
                value={chatBob.input_field}
                className='w-75 small'
                style={{ display: selectedUser === 'bob' ? 'block' : 'none' }}
                onChange={handleInput}
            />

            <div style={{ width: '7%' }}>
                <button
                    className='ms-1 mt-1'
                    onClick={() => {
                        handleSend();
                    }}>
                    <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                </button>
            </div>


        </>
    );
}
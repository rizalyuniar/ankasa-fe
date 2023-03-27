import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './chat.module.css';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer/index';

const Chat = ({ socket }) => {
  const [role, setRole] = useState('');
  // messaging states
  const [user, setUser] = useState({});
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({});

  // Set role state
  useEffect(() => {
    localStorage.users ? setRole('users') : localStorage.admin ? setRole('admin') : setRole('');
  }, []);

  // Get current user data
  useEffect(() => {
    if (localStorage.buyer) {
      const { id: id } = JSON.parse(localStorage.getItem('users'));
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`).then((res) => {
        const user = res.data.data;
        setUser(user);
      });
    } else if (localStorage.seller) {
      const { id: id } = JSON.parse(localStorage.getItem('admin'));
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/admin/${id}`).then((res) => {
        const user = res.data.data;
        setUser(user);
      });
    }
  }, []);

  // Get chat list
  useEffect(() => {
    if (localStorage.users) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/user/`)
        .then((res) => {
          console.log(res);
          const data = res.data.data;
          setContacts(data);
        })
        .catch((err) => console.log(err));
    } else if (localStorage.admin) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/admin/`)
        .then((res) => {
          console.log(res);
          const data = res.data.data;
          setContacts(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // Get latest chat
  // useEffect(() => {
  //   if (socket) {
  //     socket.on("private-msg-BE", (message) => {
  //       setMessages((current) => [...current, message]);
  //     });
  //   }
  // }, [socket]);

  // Get chat from db
  useEffect(() => {
    setMessages([]);
    const token = localStorage.getItem('token');
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/message/${role === 'users' ? contact.id : role === 'admin' ? contact.id : ''}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const result = res.data.data;
        setMessages(result);
      });
  }, [contact, role]);

  // Select chatroom
  const selectContact = (contact) => {
    setContact(contact);
  };

  // Handle message input
  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  // Sending message
  const sendMessage = () => {
    console.log(message);
    if (socket && message && (contact.id || contact.id)) {
      socket.emit(
        'private-msg',
        {
          receiver: localStorage.users ? contact.id : localStorage.admin ? contact.id : '',
          msg: message,
        },
        (message) => {
          setMessages((current) => [...current, message]);
        }
      );
      setMessage('');
    } else {
      alert('Error');
    }
  };

  // Send message trigger
  const handleSend = async (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      <Navbar />
      <section className="mb-3">
        <div className={`container ${styles['main-content']}`}>
          <div className="row">
            <div className="flex d-flex justify-content-center">
              <div className="col-3 me-4">
                <div className={`${styles['chat-session']}`}>
                  <h1 className={`flex d-flex align-items-center ms-2 my-2 ${styles['chat-title']}`}>Chat</h1>
                </div>
                <div className={`${styles['chat-list']}`}>
                  {contacts
                    ? contacts.map((item, index) => (
                        <div onClick={() => selectContact(item)} className={`flex d-flex align-items-center ${styles['chat-room']}`}>
                          <div className="col-3">
                            <img src={item.image} alt="" className={styles.avatar} />
                          </div>
                          <div className="col-8">
                            <p className={`${styles['name-chat']}`}>{item.fullname}</p>
                            <p className={`${styles['chat-value']}`}>Lihat chat</p>
                          </div>
                        </div>
                      ))
                    : ''}
                </div>
              </div>
              <div className="col-8">
                <div>
                  <div className={`flex d-flex ${styles['chat-direction']}`}>
                    <img className={`ms-2 mt-2 mb-2 ${styles.avatar}`} src={contact.image} alt="" />
                    <p className={`ms-2 mt-2 mb-2 ${styles['name-chat']}`}>{contact.fullname ? contact.fullname : ''}</p>
                  </div>
                  <div className={`${styles['chat-box']}`}>
                    <div className={styles['chat-body']}>
                      {messages &&
                        messages.map((item, index) =>
                          (user.id || user.id) === item.sender ? (
                            <p className={styles['chat-right']}>
                              <sub>{item.created_at ? `${new Date(item.created_at).getHours()}:${new Date(item.created_at).getMinutes()}` : item.date} </sub>
                              {item.message}
                            </p>
                          ) : (
                            <p className={styles['chat-left']}>
                              {item.message}
                              <sub>{item.created_at ? `${new Date(item.created_at).getHours()}:${new Date(item.created_at).getMinutes()}` : `${new Date(item.date).getHours()}:${new Date(item.date).getMinutes()}`} </sub>
                            </p>
                          )
                        )}
                    </div>

                    <div className="flex d-flex">
                      <div className={`${styles['input-chat']}`}>
                        <input placeholder="type message..." class={`${['input-box']}`} value={message} onChange={handleInput} onKeyDown={handleSend} type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Chat;

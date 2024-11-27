/* eslint-disable no-global-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import ChatSupportUserCard from "../../components/matrimony/ChatSupportUserCard";
import "../../styles/matrimony/MatrimonyChatSupport.css";
import userImg from "../..//assets/userPng.png";
import { Dropdown } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbUserX } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegSmileWink } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";
import { VscSend } from "react-icons/vsc";
import { BiCheckDouble } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

const MatrimonyChatSupport = () => {
    //dummy userlist
const userList = {
  chatId: "chat_123456789",
  chatName: "Individual Chats",
  users: [
    {
      userId: "user1",
      displayName: "Aarav",
      profilePicture: { userImg },
      status: "online",
      messages: [
        {
          messageId: "msg1",
          text: "Hi there!",
          timestamp: "2024-08-26T14:23:00Z",
        },
        {
          messageId: "msg2",
          text: "How's everything?",
          timestamp: "2024-08-26T14:25:00Z",
        },
      ],
    },
    {
      userId: "user2",
      displayName: "Vivaan",
      profilePicture: { userImg },
      status: "offline",
      messages: [
        {
          messageId: "msg3",
          text: "Hello Rajat!",
          timestamp: "2024-08-26T14:30:00Z",
        },
      ],
    },
    {
      userId: "user3",
      displayName: "Ishaan",
      profilePicture: { userImg },
      status: "offline",
      messages: [
        {
          messageId: "msg4",
          text: "Hey!",
          timestamp: "2024-08-26T14:45:00Z",
        },
      ],
    },
    {
      userId: "user4",
      displayName: "Ananya",
      profilePicture: { userImg },
      status: "offline",
      messages: [
        {
          messageId: "msg5",
          text: "In a meeting.",
          timestamp: "2024-08-26T15:00:00Z",
        },
      ],
    },
    {
      userId: "user5",
      displayName: "Saanvi",
      profilePicture: { userImg },
      status: "online",
      messages: [
        {
          messageId: "msg6",
          text: "Let's catch up later.",
          timestamp: "2024-08-26T15:15:00Z",
        },
      ],
    },
    {
      userId: "user6",
      displayName: "Reyansh",
      profilePicture: { userImg },
      status: "offline",
      messages: [
        {
          messageId: "msg7",
          text: "See you tomorrow!",
          timestamp: "2024-08-26T15:30:00Z",
        },
      ],
    },
    {
      userId: "user7",
      displayName: "Kavya",
      profilePicture: { userImg },
      status: "offline",
      messages: [
        {
          messageId: "msg8",
          text: "On vacation.",
          timestamp: "2024-08-26T15:45:00Z",
        },
      ],
    },
    {
      userId: "user8",
      displayName: "Pragyan",
      profilePicture: { userImg },
      status: "offline",
      messages: [
        {
          messageId: "msg9",
          text: "Working on a project.",
          timestamp: "2024-08-26T16:00:00Z",
        },
      ],
    },
    {
      userId: "user9",
      displayName: "Mira",
      profilePicture: { userImg },
      status: "online",
      messages: [
        {
          messageId: "msg10",
          text: "How are you?",
          timestamp: "2024-08-26T16:15:00Z",
        },
      ],
    },
    {
      userId: "user10",
      displayName: "Riya",
      profilePicture: { userImg },
      status: "offline",
      messages: [
        {
          messageId: "msg11",
          text: "Talk later.",
          timestamp: "2024-08-26T16:30:00Z",
        },
      ],
    },
  ],
};


  const [showEmoji, setShowEmoji] = useState(false);
  const [clickedUser, setClickedUser] = useState({
    userId: userList.users[0].userId,
    userName: userList.users[0].displayName,
    activeStaus: userList.users[0].status
  });
  const emojiPickerRef = useRef(null);
  const [inputStr, setInputStr] = useState("");


  const handleClickOutside = (event) => {
    if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
      setShowEmoji(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const onEmojiClick = (event, emojiObject) => {
    setInputStr(emojiObject.emoji);
  };


  const showClickedHandler = (data) =>{
    setClickedUser(prev => ({
      ...prev,
      userId: data.userId,
      userName:data.displayName,
      activeStaus: data.status
    }));
  }


  return (
    <>
      <div className="MatrimonyChatSupport">
        <div className="inner">
          <div className="userList innerBox">
            <div className="head">
              <h5 className="heading">Contact</h5>
            </div>
            <div className="user_container">
              <div className="activeChats">
                <p className="title">Active Chats</p>
                <div className="chat_box">
                  {userList.users?.map((user, i) =>
                    user.status === "online" ? (
                      // add active for active class
                      <ChatSupportUserCard onClick={showClickedHandler} activeChat={clickedUser.userId} key={i} user={user} />
                    ) : null
                  )}
                </div>
              </div>
              <div className="allChats">
                <p className="title">All Chats</p>
                <div className="chat_box">
                  {userList.users?.map((user, i) =>
                    user.status != "online" ? (
                      <ChatSupportUserCard onClick={showClickedHandler} activeChat={clickedUser.userId} key={i} user={user} />
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="userChat innerBox">
            <div className="head">
              <div className="detail">
                <div className="pic">
                  <img src={userImg} alt="" />
                  <span className={`circle online`}></span>
                </div>
                <div className="name">
                  <h5 className="heading">{clickedUser?.userName}</h5>
                  <span className="status">{clickedUser?.activeStaus}</span>
                </div>
              </div>
              <Dropdown>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  <HiDotsVertical />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="">
                    <div className="list">
                      <div className="icon">
                        <AiOutlineUser />
                      </div>{" "}
                      Profile
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="">
                    <div className="list">
                      <div className="icon">
                        <VscChromeClose />
                      </div>{" "}
                      Clear Chat
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="">
                    <div className="list">
                      <div className="icon">
                        <RiDeleteBinLine />
                      </div>{" "}
                      Delete Chat
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="">
                    <div className="list">
                      <div className="icon">
                        <TbUserX />
                      </div>{" "}
                      Block User
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* msg box */}
            <div className="allMsg_container">
              {/* recieved */}
              <div className="recieveMsg msgBox">
                <div className="pic">
                  <img src={userImg} alt="" />
                  <span className={`circle online`}></span>
                </div>

                <div className="detail">
                  <div className="msgHead">
                    <h6 className="name">Rajat Pradhan</h6>
                    <p className="time">03:18PM</p>
                  </div>
                  <div className="allMsg">
                    <div className="msg">Lorem ipsum dolor sit amet.</div>
                  </div>
                </div>
              </div>

              {/* send */}
              <div className="sendMsg msgBox">
                <div className="pic">
                  <img src={userImg} alt="" />
                  <span className={`circle online`}></span>
                </div>
                <div className="detail">
                  <div className="msgHead">
                    <h6 className="name">You</h6>
                    <p className="time">03:18PM</p>
                    <div className="msgStatus recieved">
                      <BiCheckDouble />
                    </div>
                  </div>
                  <div className="allMsg">
                    <div className="msg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="msg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                </div>
              </div>
              {/* recieved */}
              <div className="recieveMsg msgBox">
                <div className="pic">
                  <img src={userImg} alt="" />
                  <span className={`circle online`}></span>
                </div>

                <div className="detail">
                  <div className="msgHead">
                    <h6 className="name">Rajat Pradhan</h6>
                    <p className="time">03:18PM</p>
                  </div>
                  <div className="allMsg">
                    <div className="msg">Lorem ipsum dolor sit amet.</div>
                  </div>
                </div>
              </div>

              {/* send */}
              <div className="sendMsg msgBox">
                <div className="pic">
                  <img src={userImg} alt="" />
                  <span className={`circle online`}></span>
                </div>
                <div className="detail">
                  <div className="msgHead">
                    <h6 className="name">You</h6>
                    <p className="time">03:18PM</p>
                    <div className="msgStatus recieved">
                      <BiCheckDouble />
                    </div>
                  </div>
                  <div className="allMsg">
                    <div className="msg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="msg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                </div>
              </div>
              {/* recieved */}
              <div className="recieveMsg msgBox">
                <div className="pic">
                  <img src={userImg} alt="" />
                  <span className={`circle online`}></span>
                </div>

                <div className="detail">
                  <div className="msgHead">
                    <h6 className="name">Rajat Pradhan</h6>
                    <p className="time">03:18PM</p>
                  </div>
                  <div className="allMsg">
                    <div className="msg">Lorem ipsum dolor sit amet.</div>
                  </div>
                </div>
              </div>

              {/* send */}
              <div className="sendMsg msgBox">
                <div className="pic">
                  <img src={userImg} alt="" />
                  <span className={`circle online`}></span>
                </div>
                <div className="detail">
                  <div className="msgHead">
                    <h6 className="name">You</h6>
                    <p className="time">03:18PM</p>
                    <div className="msgStatus recieved">
                      <BiCheckDouble />
                    </div>
                  </div>
                  <div className="allMsg">
                    <div className="msg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="msg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* msg send box */}
            <div className="send_container">
              <button onClick={() => setShowEmoji(true)} className="btmIconBtn">
                <FaRegSmileWink />
                {showEmoji && (
                  <div ref={emojiPickerRef} className="emojiBox">
                    <EmojiPicker onEmojiClick={onEmojiClick} />
                  </div>
                )}
              </button>
              <div className="msgInput">
                <input type="text" defaultValue={inputStr} placeholder="Type your message here..." />
              </div>
              <button className="btmIconBtn">
                <VscSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatrimonyChatSupport;

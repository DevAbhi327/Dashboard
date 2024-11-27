/* eslint-disable react/prop-types */
import { format } from 'date-fns';
const ChatSupportUserCard = ({user, activeChat, onClick}) => {
  return (
    <>
      <div onClick={()=> onClick(user)} className={`ChatSupportUserCard ${activeChat === user.userId && 'active'}`}>
        <div className="pic"><img src={user.profilePicture.userImg} alt="" /> <span className={`circle ${user?.status === 'online' ? 'online' : 'Offline'}`}></span></div>
        <div className="content">
            <div className="detail">
                <h6 className="name">{user.displayName}</h6>
                <p className="msg">{user.messages[0].text}</p>
            </div>
            <div className="timeSide">
                <p className="time">{format(new Date(user.messages[0].timestamp), 'h:mm a')}</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default ChatSupportUserCard;

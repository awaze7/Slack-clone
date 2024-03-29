import React from 'react'
import '../styles/SidebarOption.css'
import { useNavigate } from 'react-router-dom'
import db from '../firebase'

function SidebarOption({ Icon, title, id, addChannelOption }) {
    const navigate = useNavigate();

    const selectChannel = () => {
        // console.log("clicked on SelectChannel");
        if (id) {
          navigate(`/room/${id}`);
        } else {
          navigate("title");
        }
      };
    
      const addChannel = () => {
        // console.log("clicked on addChannel");
        const channelName = prompt("Please enter the channel name!");
    
        if (channelName) {
          db.collection("rooms").add({
            name: channelName,
          });
        }
      };

    return (
        <div className="sidebarOption" 
            onClick={addChannelOption ? 
            addChannel : 
            selectChannel}
        >
        {Icon && <Icon className="sidebarOption_icon"/>}
        {Icon ?(
            <h3>{title}</h3>
        ):
        (
            <h3 className="sidebarOption_channel">
            <span className="sidebarOption_hash">#</span> {title}</h3>
        )}
        </div>
    )
}

export default SidebarOption

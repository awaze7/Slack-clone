import React from 'react'
import '../styles/Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <div className="sidebar_info">
            <h2>Wise Programmer</h2>
            <h3>
                <FiberManualRecordIcon />
                Awaze Shaikh
            </h3>
        </div>
        <CreateIcon />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
        <SidebarOption />
      </div>
    </div>
  )
}

export default Sidebar

'use client'

import React from "react"

const Sidebar:React.FC<{sideBarStatus:boolean, handleSidebar:React.MouseEventHandler<HTMLButtonElement>}> = ({sideBarStatus, handleSidebar}) => {
   
  return (
    <div
      className={
        sideBarStatus
          ? "w-full h-full fixed top-0 transfrom-x-[0px]  transition z-[2] duration-1000  bg-brand-900 md:hidden"
          : "w-full h-full fixed top-0  translate-x-[770px] transition z-[2] duration-1000   bg-brand-900 md:hidden"
      }
    >
      
      <button onClick={handleSidebar}>X</button>
    </div>
  );
}

export default Sidebar
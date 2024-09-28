import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { GrCloudDownload } from "react-icons/gr";
import { LuPanelBottomClose } from "react-icons/lu";

function Card({ data }) {


  return (
    <div className=" flex-shrink-0 relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-10 px-8">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full  left-0   "></div>
      <div className="flex items-center justify-between px-8 py-3 mb-3">
        <h5>{data.filesize}</h5>
        <span className="w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center">
          {/* doing conditinaol rendering  to show either close button or download button*/}
          {data.close ? 
            <LuPanelBottomClose />
           : 
            <GrCloudDownload size=" .7em" color="#fff" />
          }
        </span>
      </div>


    data.tag.isOpen && (
        <div>
data.tag.isOpen ?  
<div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}-600 flex items-center justify-center`}>
        <h3 className="text-sm">{data.tag.tagTitle}</h3>
      </div>
     )
        </div>
    </div>
  );
}

export default Card;

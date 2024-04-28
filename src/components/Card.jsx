import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"


function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2} dragTransition={{bounceStiffness:100, bounceDamping:30}} className='relative w-60 h-72 text-white py-10 px-8 bg-zinc-900/90 rounded-[45px] overflow-hidden flex-shrink-0'>
       <FaRegFileAlt />
       <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
       <div className="footer absolute bottom-0 left-0  w-full  ">
          <div className='flex items-center justify-between py-3 px-8 mb-3'>
              <h5>{data.filesize}</h5>
              <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center' >
                  {data.close? <IoIosClose />:<LuDownload size='.7em' color='#fff'/>}                  
              </span>
          </div>
          {data.tag.isOpen &&(
            <div className={`w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
            </div>
          )}
          
       </div>
    </motion.div>
  )
}

export default Card
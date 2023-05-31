// import { useState } from 'react'

// import Icon from '../Icon/Icon.jsx'

// const MoreAccordion = ({ title, open, children }) => {
//     const [isOpen, setIsOpen] = useState(open)

//     return (
//         <div className="flex min-h-[48px] w-full flex-col rounded-lg border border-gray-300 sm:w-[320px]">
//             <button
//                 className="flex cursor-pointer items-center justify-between px-3 pt-3.5"
//                 onClick={() => setIsOpen(!isOpen)}
//             >
//                 <h2 className="text-lg font-normal text-gray-2400">
//                     {title}
//                 </h2>
//                 <div className="flex items-center justify-center rounded-full">
//                     {isOpen ? (
//                         <Icon name="arrow_up" height="8" width="14" />
//                     ) : (
//                         <Icon name="arrow_down" height="8" width="14" />
//                     )}
//                 </div>
//             </button>
//             {isOpen && <div className="flex pt-4 pb-4">{children}</div>}
//         </div>
//     )
// }

// export default MoreAccordion

import React, { useState } from "react";
import Icon from "../Icon/Icon";

export const MoreAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-[48px] rounded-lg border border-gray-300 w-full sm:w-[320px]">
      <div
        className="flex items-center pt-3 px-3 justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-base text-gray-1200 font-normal">{title}</h2>
        <button className="flex items-center justify-center rounded-full">
          {isOpen ? (
            <Icon key="arrow_up" name="arrow_up" height="8" width="14" />
          ) : (
            <Icon key="arrow_down" name="arrow_down" height="8" width="14" />
          )}
        </button>
      </div>
      {isOpen && <div className="flex pt-4 pb-2">{children}</div>}
    </div>
  );
};

export default MoreAccordion;
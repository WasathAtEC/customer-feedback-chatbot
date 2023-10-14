import { Collapse } from "@nkbt/react-collapse/lib/Collapse";
import {AiOutlineMinusSquare, AiOutlinePlusSquare} from "react-icons/ai"


const CollapsibleIssue = ({open, toggle, issue, details}) => {
  return (
    <div className="mb-2">
      <div className="outline-dashed outline-2 outline-offset-0 rounded-lg bg-[#9ACAF6] opacity-58 text-blue-600 text-opacity-90 text-md font-semibold font-['Inter'] leading-[25px] px-4 py-1 mb-2 mx-1 cursor-pointer" onClick={toggle}>
        <p>{issue}</p>
        <div>
          {open ? <AiOutlineMinusSquare/> : <AiOutlinePlusSquare />}
        </div>
      </div>

      <Collapse isOpened = {open}>
        <div>{details}</div>
      </Collapse>      
      
      
    </div>
  );
};

export default CollapsibleIssue;

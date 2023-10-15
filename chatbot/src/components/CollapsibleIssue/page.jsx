import { Collapse } from "@nkbt/react-collapse/lib/Collapse";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

const CollapsibleIssue = ({ open, toggle, issue, details }) => {
  return (
    <div>
      <div
        className="outline-dashed outline-2 outline-offset-0 rounded-lg bg-[#9ACAF6] opacity-58 text-blue-600 text-opacity-90 text-md font-semibold font-['Inter'] leading-[25px] px-4 py-1 mx-1 cursor-pointer flex gap-[25px] items-center justify-between"
        onClick={toggle}
      >
         <div><p>{issue}</p></div>
        <div className="text-[20px] text-blue-800">{open ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}</div>
      </div>

      <Collapse isOpened={open}>
        <div className="bg-[#EEF9FC] mt-3 mx-2 px-3 py-2 rounded-lg shadow">{details}</div>
      </Collapse>
    </div>
  );
};

export default CollapsibleIssue;

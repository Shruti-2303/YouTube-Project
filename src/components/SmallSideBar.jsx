import SmallSideBarBtn from "./SmallSideBarBtn";
import { smallSideBarData } from "../constants/helperData.jsx";
const SmallSideBar = () => {

  return (
    <div>
      <ul>
        {smallSideBarData.map((data,index)=><li key={index}> 
          <SmallSideBarBtn icon={data.icon} text={data.text} />
        </li>)}

      </ul>
    </div>
  );
};

export default SmallSideBar;

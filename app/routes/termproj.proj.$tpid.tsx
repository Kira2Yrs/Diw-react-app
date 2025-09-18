import { myTermProj} from "./components/Data/TermProject";
import { useParams } from "@remix-run/react";
import { Link } from "@remix-run/react";

export default function ProView(){
    const { tpid } = useParams();

    const tpTmp = myTermProj.filter((item) =>{
        return item.tpID === Number(tpid);
    }).map((tpObj,index) => 
        <>
          <p>รหัสโปรเจค: {tpObj.tpID}</p>
          <p>รายละเอียด: {tpObj.tpSudject}</p>
          <p>รายวิชา: {tpObj.tpTitle}</p>
          <p>หน้าปก: {tpObj.tpCover}</p>
          <p>ลิ้ง: {tpObj.tpUrl}</p>
          <p>กลุ่ม: {tpObj.tpTeam}</p>
          <Link to = {`/termproj.projlist`}>Back</Link>
        </>
    );
 
    if(tpTmp.length === 0){
        return "***ไม่พบข้อมูลโปรเจค***";
    }
     return (
        <>
           คุณเลือกข้อมูลโปรเจครายวิชา : {tpid}
           {tpTmp}
           <a href="/termproj.projlist">Back</a>
        </>

    );
} 
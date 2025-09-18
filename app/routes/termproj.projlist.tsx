import { Link } from "@remix-run/react";
import { myTermProj } from "./components/Data/TermProject";

export default function ProjList(){
    return (
        <>
        <h1>ข้อมูลโปรเจครายวิชา</h1>
        <p>
            {
                myTermProj.map((tpOpj, index) =>
                    <li key={index}>
                        โปรเจควิชา{tpOpj.tpSudject}
                        <Link to = {`/termproj.proj/${tpOpj.tpID}`}>View</Link>
                    </li>
                )
            }
            {/***ให้ดึงข้อมูลมาแสดง***/}
        </p>    
        </>
    )
}
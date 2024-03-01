import { useState } from "react"
import "./LoginSignUpJoinUs.css";

const Report = ({onClose}) => {
    const [reportData,setreportData] = useState("");

    const onsubmit = (e) =>{
        e.preventDefault();
        setreportData("")
        }

  return (
    <>
    <div className="container-wrapper" onClick={onClose}></div>
    <div className="report-container">
        <form onSubmit={onsubmit}>
            <lable>write your report: *</lable>
            <input
            type="text"
            id="report"
            autoComplete="off"
            value={reportData}
            onChange={(e) => setreportData(e.target.value)}
            required={true}
            /> 
            <button className="submit-report">Sumbit</button>
        </form>
    </div>
    
    </>
  )
}

export default Report;
import "./DownloadPopup.css";
import close_btn from "../../Assets/Images/close1.png";
import robot_icon from "../../Assets/Images/not_robot.png";

interface DownloadPopupProps {
  showDownloadPopup: Function;
}
function DownloadPopup(props: DownloadPopupProps): JSX.Element {
    const closePopup = ()=>{
        props.showDownloadPopup()
    }
    return (
      <div className="Download_popup">
        <div className="overlay"></div>
        <div className="download_warning_popup">
          <img
            src={close_btn}
            alt="close"
            className="closeBtn"
            onClick={closePopup}
          />
          <div className="download_top_img"></div>
          <div className="popup_title">אישור להורדת תמונה</div>
          <div className="popup_text">האם להוריד את התמונה?</div>
          <div className="not_robot_cont">
            <input type="checkbox" className="popup_checkbox" />
            <div className="not_robot_text">אני לא רובוט</div>
            <img src={robot_icon} alt="robot" className="robot_icon" />
          </div>
          <div className="popup_btn">
            <button className="agree_btn">אישור</button>
            <button className="cancel_btn">ביטול</button>
          </div>
        </div>
      </div>
    );
}

export default DownloadPopup;

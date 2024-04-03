import "./Download.css";
import new_icon from "../../Assets/Images/new.png";
import check from "../../Assets/Images/check.png"

interface DownloadProps {
  showDownloadPopup: Function;
  title: string;
  description: string;
  button: string;
  small_txt: string;
  position: string;
}
function Download(props: DownloadProps): JSX.Element {
  const show_popup =()=>{
 props.showDownloadPopup();
  }
 
  return (
    <div
      className={
        "Download" + (props.position === "bottom" ? " border_top" : "")
      }
    >
      <div className="download_title">
        {props.title}
        {props.position === "bottom" ? (
          <img className="new_icon" src={new_icon} alt="new" />
        ) : (
          ""
        )}
      </div>
      <div className="download_description">{props.description}</div>
      <button className="download_btn" onClick={show_popup}>
        {props.button}
      </button>
      <div className="small_txt">
        {props.small_txt}
        <img src={check} alt="check" className="check_icon" />
      </div>
    </div>
  );
}

export default Download;

import "./Bg.css";
import close from "../../Assets/Images/close.png"

function Bg(): JSX.Element {
    return (
      <div className="Bg">
        <div className="background_cont">
          <div className="header_title">
            {" "}
            העלאת תמונה על מנת להסיר לה את הרקע{" "}
          </div>
          <img src={close} alt="close" className="close_top" />
          <div className="upload_btn"> העלאת תמונה </div>
          <div className="content_container"></div>
        </div>
      </div>
    );
}

export default Bg;

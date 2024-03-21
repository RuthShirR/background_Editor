import "./Bg.css";
import close from "../../Assets/Images/close.png";
import Download from "../Download/Download";
import cleanup_icon from "../../Assets/Images/Cleanup Edges.png";
import image_icon from "../../Assets/Images/Image.png";

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
        <div className="content_container">
          <div className="main_content">
            <div className="main_top">
              <div className="tabs_txt no_bg">
                הסר רקע
                <img className="tab_icon" src={cleanup_icon} alt="cleanup" />
              </div>
              <div className="tabs_txt">
                מקורי
                <img className="tab_icon" src={image_icon} alt="image_i" />
              </div>
            </div>
            <div className="main_in_content"></div>
          </div>
          <div className="side_content">
            <div className="side_in_content">
              <Download
                title="תמונה חינם"
                description="612x408 תצוגה מקדימה של תמונה "
                button="הורד"
                small_txt=" איכות טובה עד 0.25 מגה פיקסל "
                position="top"
              ></Download>
              <Download
                title="Pro"
                description="1280x1920 תצוגה מלאה "
                button="HD הורד"
                small_txt=" איכות מירבית עד 25 מגה פיקסל "
                position="bottom"
              ></Download>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bg;

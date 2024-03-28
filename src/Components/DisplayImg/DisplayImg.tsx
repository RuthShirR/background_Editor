import "./DisplayImg.css";
import image_bg from "../../Assets/Images/image_with_bg.jpg";
import { useRef } from "react";

interface DisplayImgProps {
  tabType: string;
}
function DisplayImg(props: DisplayImgProps): JSX.Element {
  const inputElement = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (inputElement.current) {
      inputElement.current.click();
    }
  };
  return (
    <div className="DisplayImg">
      <div>
        {props.tabType === "removeBackground" ? (
          <>
            <div className="download_warning">
              אל תשכח להוריד את הקבצים שלך הם ימחקו אוטומטית כשתצא מהדף
            </div>
            <button className="color_btn" onClick={focusInput}>
              צבע רקע
            </button>
            <input type="color" ref={inputElement} className="color_input" />
          </>
        ) : (
          <></>
        )}
      </div>
      <div>
        <img src={image_bg} alt="background" className="img_bg" />
      </div>
    </div>
  );
}

export default DisplayImg;

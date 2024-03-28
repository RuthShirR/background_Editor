import "./Bg.css";
import close from "../../Assets/Images/close.png";
import Download from "../Download/Download";
import cleanup_icon from "../../Assets/Images/Cleanup Edges.png";
import image_icon from "../../Assets/Images/Image.png";
import { useState } from "react";
import DisplayImg from "../DisplayImg/DisplayImg";
import close_btn from "../../Assets/Images/close1.png";
import banner from "../../Assets/Images/banner.png";
import logo from "../../Assets/Images/logo.png";

function Bg(): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<string>("removeBackground");
  const [show_terms, setShow_terms] = useState<boolean>(false);

  const handleTabClick = (tabName: string) => {
    if (selectedTab !== tabName) {
      setSelectedTab(tabName);
    }
  };
  const showTerms = () => {
    setShow_terms(!show_terms);
  };
  return (
    <div className="Bg">
      <div className="background_cont">
        <div className="header">
          <div className="header_title">
            {" "}
            העלאת תמונה על מנת להסיר לה את הרקע{" "}
          </div>

          <img src={close} alt="close" className="close_top" />

          <div className="header_small_text">פורמטים נתונים: png, jpeg</div>

          <div className="upload_btn"> העלאת תמונה </div>
        </div>
        <div className="content_container">
          <div className="main_content">
            <div className="main_top">
              <div
                className={`tabs_txt${
                  selectedTab === "removeBackground" ? " selected_tab" : ""
                }`}
                onClick={() => handleTabClick("removeBackground")}
              >
                הסר רקע
                <img className="tab_icon" src={cleanup_icon} alt="cleanup" />
              </div>
              <div
                className={`tabs_txt${
                  selectedTab === "original" ? " selected_tab" : ""
                }`}
                onClick={() => handleTabClick("original")}
              >
                מקורי
                <img className="tab_icon" src={image_icon} alt="image_i" />
              </div>
            </div>
            <div className="main_in_content">
              <DisplayImg tabType={selectedTab}></DisplayImg>
            </div>
            <div className="footer_main_content">
              <div className="footer_main_text">
                .על ידי העלאת תמונה אתה מאשר את התנאים וההגבלות של תקנון החברה
                שלנו
              </div>
              <button className="terms_btn" onClick={showTerms}>
                תקנון החברה
              </button>
            </div>
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
        <div className="footer">
          <img src={banner} alt="banner" className="banner_footer" />
          <img src={logo} alt="logo" className="footer_logo" />
          <button className="banner_footer_btn"> לרכישה</button>
        </div>
      </div>
      {show_terms === true ? (
        <>
          <div className="overlay">
            <div className="terms_popup">
              <img
                className="close_popup"
                src={close_btn}
                alt="close"
                onClick={showTerms}
              />
              <h1>
                <b> תנאים והגבלות </b>
              </h1>{" "}
              <br />
              <p>
                אנו מספקים לך שירותים בכפוף להודעות, לתנאים ולתנאים המפורטים
                בהסכם זה. חוץ מזה, אתה תציית לכללים, להנחיות, למדיניות, לתנאים
                ולתנאים החלים על שירותים כאלה לפני שתשתמש בהם. אנו שומרים לעצמנו
                את הזכות לשנות את האתר ואת התנאים וההגבלות בכל עת. לפני שתמשיך,
                אנא קרא הסכם זה מכיוון שגישה, גלישה או שימוש אחר באתר מעידים על
                הסכמתך לכל התנאים וההגבלות בהסכם זה. לא תעלה, תפיץ או תפרסם דרך
                אתר זה כל תוכן, מידע או חומר אחר ש(א) כולל באגים, וירוסים,
                תולעים, דלתות מלכודות, סוסים טרויאניים או קוד או מאפיינים מזיקים
                אחרים; (ב) הוא לשון הרע, מאיים, לשון הרע, מגונה, מגונה,
                פורנוגרפי, מפלה, או עלול להוביל לאחריות אזרחית או פלילית כלשהי
                על פי חוקי ארה"ב או חוקים של כל מדינה אחרת שעשויה לחול; או (ג)
                מפר או מפר זכויות יוצרים, פטנטים, סימני מסחר, סימני שירות, סודות
                מסחריים או זכויות קנייניות אחרות של כל אדם. www.test.co.il עשוי
                לתת לך זיהוי חשבון וסיסמה כדי לאפשר לך לגשת לחלקים מסוימים באתר
                זה ולהשתמש בהם. בכל פעם שאתה משתמש בסיסמה או זיהוי, אתה נחשב
                מורשה לגשת לאתר ולהשתמש בו באופן העולה בקנה אחד עם התנאים
                וההגבלות של הסכם זה, וכן ל-www.test.co.il אין חובה לחקור את
                המקור לכל גישה או שימוש כזה באתר. על ידי קבלת תנאי שימוש אלה
                באמצעות השימוש שלך באתר, אתה מאשר כי אתה בן 18 ומעלה. אם אתה
                מתחת לגיל 18 אנא השתמש באתר זה רק בפיקוח הורה או אפוטרופוס חוקי.
                בכפוף לתנאי הסכם זה, מעניק לך בזאת רישיון מוגבל, ניתן לביטול,
                בלתי ניתן להעברה ולא בלעדי לגשת לאתר ולהשתמש בו על ידי הצגתו
                בדפדפן האינטרנט שלך רק למטרת קניות ולא לכל שימוש מסחרי או שימוש
                מטעם צד שלישי כלשהו, ​​למעט כפי שהותר במפורש על ידי
                www.totash.co.il מראש. כל הפרה של הסכם זה תביא לביטול מיידי של
                הרישיון שניתן בפסקה זו ללא הודעה אליך. אלא אם כן הותר במפורש על
                ידי החברה שלנו מראש, כל החומרים, לרבות תמונות, טקסט, איורים,
                עיצובים, אייקונים, תמונות, תוכניות, קטעי מוזיקה או הורדות, קטעי
                וידאו וחומרים כתובים ואחרים שהם חלק מאתר זה (ביחד, " התכנים")
                מיועדים אך ורק לשימוש אישי, לא מסחרי. אין לעשות כל שימוש מסחרי
                בכל המידע הנמסר באתר או לעשות כל שימוש באתר לטובת עסק אחר. אנו
                שומרים לעצמנו את הזכות לסרב לשירות, לסיים חשבונות ו/או לבטל
                הזמנות לפי שיקול דעתה, לרבות, ללא הגבלה, אם אנו סבורים שהתנהגות
                לקוחות מפרה את החוקים החלים או מזיקה לאינטרסים שלנו. אינך רשאי
                לשכפל, להפיץ, להציג, למכור, להחכיר, לשדר, ליצור יצירות נגזרות מ,
                לתרגם, לשנות, לבצע הנדסה לאחור, לפרק, לפרק או לנצל באופן אחר את
                האתר הזה או כל חלק ממנו אלא אם כן הותר במפורש על ידי החברה שלנו
                בכתב . אתה תהיה האחראי הבלעדי לכל גישה ושימוש באתר זה על ידי כל
                מי שמשתמש בסיסמה ובזיהוי שהוקצו לך במקור בין אם הגישה והשימוש
                באתר זה מאושרים בפועל על ידך ובין אם לאו, לרבות ללא הגבלה, כל
                התקשורת והשידורים. וכל ההתחייבויות (כולל ללא הגבלה התחייבויות
                כספיות) שנוצרו באמצעות גישה או שימוש כאלה. אתה האחראי הבלעדי
                להגן על האבטחה והסודיות של הסיסמה והזיהוי שהוקצו לך. תודיע מיד
                www.test.co.il של כל שימוש לא מורשה בסיסמה או בזיהוי שלך או כל
                הפרה אחרת או הפרה מאוימת של אבטחת אתר זה. אל תהסס לפנות אלינו אם
                יש לך שאלות! אנא שלח דוא"ל ל-Test@gmail.com ותקבל תשובה תוך
                שלושה ימי עסקים אחד.
              </p>
            </div>
          </div>
        </>
      ) : (
        <> </>
      )}
    </div>
  );
}

export default Bg;

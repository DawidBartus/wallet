import style from "./Background.module.css";
import { ReactComponent as PurpleBlob } from "../images/purpleBlob.svg";
import { ReactComponent as NotPurpleBlob } from "../images/notPurpleBlob.svg";

const Background = () => {
  return (
    <div className={style.background}>
      <PurpleBlob className={style.purpleBlob} />
      <NotPurpleBlob className={style.notPurpleBlob} />
    </div>
  );
};

export default Background;

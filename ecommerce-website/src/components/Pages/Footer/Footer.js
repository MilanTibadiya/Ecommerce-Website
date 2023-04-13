import { BsFacebook, BsSpotify, BsYoutube } from "react-icons/bs";
import classes from "./Footer.module.css"

const Footer = () => {

    return (
        <div className={classes.footercontainer}>
        <h1>The Generics</h1>
        <div className={classes.footerlogo}>
          <BsYoutube className={classes.footerlogo1}/>
          <BsSpotify className={classes.footerlogo1}/>
          <BsFacebook className={classes.footerlogo1}/>
        </div>
      </div>
    )
};

export default Footer;
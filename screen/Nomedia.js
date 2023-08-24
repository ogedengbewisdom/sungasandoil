import classes from "./Nomedia.module.css";

function NoImage(props) {
    return <div className={classes.containter}>{props.children}</div>;
  }
  
  export default NoImage;
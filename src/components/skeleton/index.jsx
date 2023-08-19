import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./skeleton.module.scss";

const cx = classNames.bind(styles);

const Skeleton = ({line = 1, height = "1rem", width = '100%', pos = "center", margin = "0.5rem", padding = "0"}) => {
    const skeletonLines = Array.from({ length: line }, (_, index) => (
        <div key={index} className={cx("skeleton")} style={{height : height, width : width, margin : margin, padding : padding}} />
      ));
    
    return <div className={cx("wrap-skeleton")} style={{"display" : "flex", alignItems : pos}}>{skeletonLines}</div>;
}


export default Skeleton;
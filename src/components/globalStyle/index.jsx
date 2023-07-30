import classNames from "classnames/bind"
import styles from "./globalStyle.module.scss"

const cx = classNames.bind(styles)

const GlobalStyle = ({children}) => {
    return (
        <div className={cx("global-style")}>
            {children}
        </div>
    )
}

export default GlobalStyle
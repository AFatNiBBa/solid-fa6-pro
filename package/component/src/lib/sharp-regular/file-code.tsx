
import { Icon } from "../../index";

/**
 * A component that renders the `file-code` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-code?s=sharp-regular file-code}
 * @preview ![file-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-code.svg)
 */
const FileCode: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 464L48 48l176 0 0 112 112 0 0 304L48 464zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM161 289l17-17L144 238.1l-17 17L79 303l-17 17 17 17 48 48 17 17L177.9 368l-17-17-31-31 31-31zM257 255l-17-17L206.1 272l17 17 31 31-31 31-17 17L240 401.9l17-17 48-48 17-17-17-17-48-48z" />
    </Icon>
);

export default FileCode;

import { Icon } from "../../index";

/**
 * A component that renders the `file-code` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-code?s=sharp-light file-code}
 * @preview ![file-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-code.svg)
 */
const FileCode: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 480L32 32l160 0 0 144 0 16 16 0 144 0 0 288L32 480zM224 37.3L346.7 160 224 160l0-122.7zM232 0L32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-328L232 0zM155.3 299.3L166.6 288 144 265.4l-11.3 11.3-48 48L73.4 336l11.3 11.3 48 48L144 406.6 166.6 384l-11.3-11.3L118.6 336l36.7-36.7zm96-22.6L240 265.4 217.4 288l11.3 11.3L265.4 336l-36.7 36.7L217.4 384 240 406.6l11.3-11.3 48-48L310.6 336l-11.3-11.3-48-48z" />
    </Icon>
);

export default FileCode;
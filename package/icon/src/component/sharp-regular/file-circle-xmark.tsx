
import { Icon } from "../../index";

/**
 * A component that renders the `file-circle-xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-xmark?s=sharp-regular file-circle-xmark}
 * @preview ![file-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-circle-xmark.svg)
 */
const FileCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 464l236.5 0c12.3 18.8 28 35.1 46.3 48L48 512 0 512l0-48L0 48 0 0 48 0 256 0 384 128l0 70.6c-17.2 4.9-33.4 12.3-48 21.8l0-60.5-112 0 0-112L48 48l0 416zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3L502.6 320 480 297.4l-11.3 11.3L432 345.4l-36.7-36.7L384 297.4 361.4 320l11.3 11.3L409.4 368l-36.7 36.7L361.4 416 384 438.6l11.3-11.3L432 390.6l36.7 36.7L480 438.6 502.6 416l-11.3-11.3L454.6 368l36.7-36.7z" />
    </Icon>
);

export default FileCircleXmark;
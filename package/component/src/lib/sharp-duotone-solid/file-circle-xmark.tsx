
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-circle-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-xmark?s=sharp-duotone-solid file-circle-xmark}
 * @preview ![file-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-circle-xmark.svg)
 */
const FileCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 38.6C310.1 219.5 256 287.4 256 368c0 59.5 29.6 112.1 74.8 144L0 512 0 0z" />
        <path d="M384 160L224 0l0 160 160 0zm48 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm59.3-180.7L454.6 368l36.7 36.7L502.6 416 480 438.6l-11.3-11.3L432 390.6l-36.7 36.7L384 438.6 361.4 416l11.3-11.3L409.4 368l-36.7-36.7L361.4 320 384 297.4l11.3 11.3L432 345.4l36.7-36.7L480 297.4 502.6 320l-11.3 11.3z" />
    </Icon>
);

export default FileCircleXmark;
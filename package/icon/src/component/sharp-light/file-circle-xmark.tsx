
import { Icon } from "../../index";

/**
 * A component that renders the `file-circle-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-xmark?s=sharp-light file-circle-xmark}
 * @preview ![file-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-circle-xmark.svg)
 */
const FileCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 192l0 19.2c10.1-5.2 20.8-9.4 32-12.6l0-46.6L232 0 32 0 0 0 0 32 0 480l0 32 32 0 298.8 0c-12.9-9.1-24.5-19.9-34.6-32L32 480 32 32l160 0 0 144 0 16 16 0 144 0zm-5.3-32L224 160l0-122.7L346.7 160zM320 368a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm256 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-84.7-36.7L502.6 320 480 297.4l-11.3 11.3L432 345.4l-36.7-36.7L384 297.4 361.4 320l11.3 11.3L409.4 368l-36.7 36.7L361.4 416 384 438.6l11.3-11.3L432 390.6l36.7 36.7L480 438.6 502.6 416l-11.3-11.3L454.6 368l36.7-36.7z" />
    </Icon>
);

export default FileCircleXmark;
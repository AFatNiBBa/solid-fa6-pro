
import { Icon } from "../../index";

/**
 * A component that renders the `file-circle-xmark` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-xmark?s=regular file-circle-xmark}
 * @preview ![file-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/file-circle-xmark.svg)
 */
const FileCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 464l220.5 0c12 18.4 27.4 34.5 45.3 47.3c-3.2 .5-6.4 .7-9.7 .7L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3l0 44.1c-17.2 4.9-33.4 12.3-48 21.8l0-60.5-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z" />
    </Icon>
);

export default FileCircleXmark;
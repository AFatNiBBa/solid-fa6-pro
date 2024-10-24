
import { Icon } from "../../index";

/**
 * A component that renders the `file-circle-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-xmark?s=sharp-thin file-circle-xmark}
 * @preview ![file-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-circle-xmark.svg)
 */
const FileCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 496l295.2 0c6.1 5.8 12.7 11.1 19.6 16L16 512 0 512l0-16L0 16 0 0 16 0 224 0 384 160l0 38.6c-5.4 1.5-10.8 3.3-16 5.4l0-28-152 0-8 0 0-8 0-152L16 16l0 480zM361.4 160L224 22.6 224 160l137.4 0zM560 368a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zm-272 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm205.7-50.3L443.3 368l50.3 50.3 5.7 5.7L488 435.3l-5.7-5.7L432 379.3l-50.3 50.3-5.7 5.7L364.7 424l5.7-5.7L420.7 368l-50.3-50.3-5.7-5.7L376 300.7l5.7 5.7L432 356.7l50.3-50.3 5.7-5.7L499.3 312l-5.7 5.7z" />
    </Icon>
);

export default FileCircleXmark;
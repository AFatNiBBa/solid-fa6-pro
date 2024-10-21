
import { Icon } from "../../index";

/**
 * A component that renders the `file-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-xmark?s=sharp-thin file-xmark}
 * @preview ![file-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-xmark.svg)
 */
const FileXmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 496L16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496zM224 22.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zM121.8 238.5l-11.3 11.3 5.7 5.7L180.7 320l-64.6 64.6-5.7 5.7 11.3 11.3 5.7-5.7L192 331.3l64.6 64.6 5.7 5.7 11.3-11.3-5.7-5.7L203.3 320l64.6-64.6 5.7-5.7-11.3-11.3-5.7 5.7L192 308.7l-64.6-64.6-5.7-5.7z" />
    </Icon>
);

export default FileXmark;
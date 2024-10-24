
import { Icon } from "../../index";

/**
 * A component that renders the `file-import` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-import?s=sharp-thin file-import}
 * @preview ![file-import](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-import.svg)
 */
const FileImport: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 496l-352 0 0-144-16 0 0 144 0 16 16 0 352 0 16 0 0-16 0-336L352 0 144 0 128 0l0 16 0 240 16 0 0-240 192 0 0 152 0 8 8 0 152 0 0 320zm-6.6-336L352 160l0-137.4L489.4 160zM269.7 186.3l-5.7-5.7L252.7 192l5.7 5.7L356.7 296 8 296l-8 0 0 16 8 0 348.7 0-98.3 98.3-5.7 5.7L264 427.3l5.7-5.7 112-112 5.7-5.7-5.7-5.7-112-112z" />
    </Icon>
);

export default FileImport;
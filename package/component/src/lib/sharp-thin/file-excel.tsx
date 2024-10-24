
import { Icon } from "../../index";

/**
 * A component that renders the `file-excel` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-excel?s=sharp-thin file-excel}
 * @preview ![file-excel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-excel.svg)
 */
const FileExcel: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 496L16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496zM224 22.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zm46.9 224l-19.2 0L192 313.6 132.3 224l-19.2 0 69.3 104L113.1 432l19.2 0L192 342.4 251.7 432l19.2 0L201.6 328l69.3-104z" />
    </Icon>
);

export default FileExcel;
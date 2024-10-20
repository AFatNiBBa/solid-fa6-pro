
import { Icon } from "../../index";

/**
 * A component that renders the `file-spreadsheet` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-spreadsheet?s=regular file-spreadsheet}
 * @preview ![file-spreadsheet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/file-spreadsheet.svg)
 */
const FileSpreadsheet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 448L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zM176 256l0 48-64 0 0-48 64 0zm-64 80l64 0 0 48-64 0 0-48zm96 0l64 0 0 48-64 0 0-48zm-16 80l16 0 64 0c17.7 0 32-14.3 32-32l0-48 0-16 0-16 0-48c0-17.7-14.3-32-32-32l-64 0-16 0-16 0-64 0c-17.7 0-32 14.3-32 32l0 48 0 16 0 16 0 48c0 17.7 14.3 32 32 32l64 0 16 0zm16-112l0-48 64 0 0 48-64 0z" />
    </Icon>
);

export default FileSpreadsheet;
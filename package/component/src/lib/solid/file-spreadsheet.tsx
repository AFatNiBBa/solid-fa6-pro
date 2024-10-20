
import { Icon } from "../../index";

/**
 * A component that renders the `file-spreadsheet` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-spreadsheet?s=solid file-spreadsheet}
 * @preview ![file-spreadsheet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/file-spreadsheet.svg)
 */
const FileSpreadsheet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM88 224l208 0c17.7 0 32 14.3 32 32l0 16 0 80 0 64c0 17.7-14.3 32-32 32l-64 0-80 0-64 0c-17.7 0-32-14.3-32-32l0-64 0-80 0-16c0-17.7 14.3-32 32-32zm0 112l48 0 0-48-48 0 0 48zm80 0l48 0 0-48-48 0 0 48zm80 0l48 0 0-48-48 0 0 48zm0 32l0 48 48 0 0-48-48 0zm-32 0l-48 0 0 48 48 0 0-48zm-80 0l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default FileSpreadsheet;
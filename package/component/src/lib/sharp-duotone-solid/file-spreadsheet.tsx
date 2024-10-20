
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-spreadsheet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-spreadsheet?s=sharp-duotone-solid file-spreadsheet}
 * @preview ![file-spreadsheet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-spreadsheet.svg)
 */
const FileSpreadsheet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM56 224l0 16 0 32 0 80 0 80 0 16 16 0 80 0 80 0 80 0 16 0 0-16 0-80 0-80 0-32 0-16-16 0L72 224l-16 0z" />
        <path d="M384 160L224 0l0 160 160 0zM72 224l-16 0 0 16 0 32 0 80 0 80 0 16 16 0 80 0 80 0 80 0 16 0 0-16 0-80 0-80 0-32 0-16-16 0L72 224zM88 336l0-48 48 0 0 48-48 0zm80 0l0-48 48 0 0 48-48 0zm80 0l0-48 48 0 0 48-48 0zm0 32l48 0 0 48-48 0 0-48zm-32 0l0 48-48 0 0-48 48 0zm-80 0l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default FileSpreadsheet;
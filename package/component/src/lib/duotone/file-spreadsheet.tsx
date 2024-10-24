
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-spreadsheet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-spreadsheet?s=duotone file-spreadsheet}
 * @preview ![file-spreadsheet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-spreadsheet.svg)
 */
const FileSpreadsheet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM56 256l0 16 0 80 0 64c0 17.7 14.3 32 32 32l64 0 80 0 64 0c17.7 0 32-14.3 32-32l0-64 0-80 0-16c0-17.7-14.3-32-32-32L88 224c-17.7 0-32 14.3-32 32z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM88 224c-17.7 0-32 14.3-32 32l0 16 0 80 0 64c0 17.7 14.3 32 32 32l64 0 80 0 64 0c17.7 0 32-14.3 32-32l0-64 0-80 0-16c0-17.7-14.3-32-32-32L88 224zm0 112l0-48 48 0 0 48-48 0zm80 0l0-48 48 0 0 48-48 0zm80 0l0-48 48 0 0 48-48 0zm0 32l48 0 0 48-48 0 0-48zm-32 0l0 48-48 0 0-48 48 0zm-80 0l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default FileSpreadsheet;
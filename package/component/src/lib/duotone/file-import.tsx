
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-import` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-import?s=duotone file-import}
 * @preview ![file-import](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-import.svg)
 */
const FileImport: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 64c0-35.3 28.7-64 64-64L352 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-112 174.1 0-39 39c-9.4 9.4-9.4 24.6 0 33.9c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39L128 288l0-224z" />
        <path d="M512 160L352 0l0 128c0 17.7 14.3 32 32 32l128 0zM297 215c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39L24 288c-13.3 0-24 10.7-24 24s10.7 24 24 24l278.1 0-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80z" />
    </Icon>
);

export default FileImport;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-zip` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-zip?s=duotone file-zip}
 * @preview ![file-zip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-zip.svg)
 */
const FileZip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-144 0c-35.3 0-64 28.7-64 64l0 144L64 512c-35.3 0-64-28.7-64-64L0 64z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM240 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l38.1 0L225.7 488.8c-2.5 5-2.2 10.9 .7 15.6s8.1 7.6 13.6 7.6l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-38.1 0 52.4-104.8c2.5-5 2.2-10.9-.7-15.6s-8.1-7.6-13.6-7.6l-64 0zm144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128zm32 0l0 80 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 8 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-24 0c-8.8 0-16 7.2-16 16zm32 64l0-48 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0z" />
    </Icon>
);

export default FileZip;
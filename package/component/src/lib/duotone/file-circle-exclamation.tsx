
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-circle-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-exclamation?s=duotone file-circle-exclamation}
 * @preview ![file-circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-circle-exclamation.svg)
 */
const FileCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7L64 512c-35.3 0-64-28.7-64-64L0 64z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zm48 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-96a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0-144c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default FileCircleExclamation;
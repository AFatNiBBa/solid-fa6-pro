
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-code` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-code?s=duotone file-code}
 * @preview ![file-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-code.svg)
 */
const FileCode: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM64 320c0 6.1 2.3 12.3 7 17l48 48c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9l-31-31 31-31c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L71 303c-4.7 4.7-7 10.8-7 17zm167-65c-9.4 9.4-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48c-9.4-9.4-24.6-9.4-33.9 0z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM153 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L71 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM265 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" />
    </Icon>
);

export default FileCode;
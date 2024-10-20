
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-xmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-xmark?s=duotone file-xmark}
 * @preview ![file-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-xmark.svg)
 */
const FileXmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM104 384c0 6.1 2.3 12.3 7 17s10.8 7 17 7s12.3-2.3 17-7c15.7-15.7 31.4-31.4 47-47l47 47c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9l-47-47c15.7-15.7 31.3-31.3 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47c-15.7-15.7-31.3-31.3-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47c-15.7 15.7-31.4 31.4-47 47c-4.7 4.7-7 10.8-7 17z" />
        <path d="M384 160l-128 0c-17.7 0-32-14.3-32-32L224 0 384 160zM111 239c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default FileXmark;
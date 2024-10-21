
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-magnifying-glass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-magnifying-glass?s=duotone file-magnifying-glass}
 * @preview ![file-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-magnifying-glass.svg)
 */
const FileMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM80 304c0 53 43 96 96 96c17.8 0 34.4-4.8 48.7-13.2L263 425.1c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9l-38.3-38.3c8.5-14.3 13.3-31 13.3-48.9c0-53-43-96-96-96s-96 43-96 96zm144 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        <path d="M384 160l-128 0c-17.7 0-32-14.3-32-32L224 0 384 160zM272 304c0 17.8-4.9 34.5-13.3 48.9L297 391.2c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-38.4-38.4C210.4 395.2 193.8 400 176 400c-53 0-96-43-96-96s43-96 96-96s96 43 96 96zm-96 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default FileMagnifyingGlass;
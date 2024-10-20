
import { Icon } from "../../index";

/**
 * A component that renders the `file-magnifying-glass` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-magnifying-glass?s=light file-magnifying-glass}
 * @preview ![file-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/file-magnifying-glass.svg)
 */
const FileMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M240 320a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-8.4 78.3C215.9 409.4 196.7 416 176 416c-53 0-96-43-96-96s43-96 96-96s96 43 96 96c0 20.7-6.6 39.9-17.7 55.6l45.1 45.1c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-45.1-45.1zM352 448l0-256-112 0c-26.5 0-48-21.5-48-48l0-112L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32zm-.5-288c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2L224 144c0 8.8 7.2 16 16 16l111.5 0zM0 64C0 28.7 28.7 0 64 0L220.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />
    </Icon>
);

export default FileMagnifyingGlass;
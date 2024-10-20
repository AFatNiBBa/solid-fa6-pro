
import { Icon } from "../../index";

/**
 * A component that renders the `folders` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folders?s=thin folders}
 * @preview ![folders](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/folders.svg)
 */
const Folders: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 368l-352 0c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l117.5 0c12.7 0 24.9 5.1 33.9 14.1l26.5 26.5c15 15 35.4 23.4 56.6 23.4L512 112c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48zM160 384l352 0c35.3 0 64-28.7 64-64l0-160c0-35.3-28.7-64-64-64L394.5 96c-17 0-33.3-6.7-45.3-18.7L322.7 50.7c-12-12-28.3-18.7-45.3-18.7L160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64zM0 192L0 416c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l-16 0c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l0-16c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default Folders;

import { Icon } from "../../index";

/**
 * A component that renders the `folders` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folders?s=light folders}
 * @preview ![folders](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/folders.svg)
 */
const Folders: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 352l-352 0c-17.7 0-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32l117.5 0c8.5 0 16.6 3.4 22.6 9.4l26.5 26.5c18 18 42.4 28.1 67.9 28.1L512 128c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32zM349.3 77.3L322.7 50.7c-12-12-28.3-18.7-45.3-18.7L160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-160c0-35.3-28.7-64-64-64L394.5 96c-17 0-33.3-6.7-45.3-18.7zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 352c0 70.7 57.3 128 128 128l336 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-336 0c-53 0-96-43-96-96l0-240z" />
    </Icon>
);

export default Folders;
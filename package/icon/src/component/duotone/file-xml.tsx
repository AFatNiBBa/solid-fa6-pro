
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-xml` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-xml?s=duotone file-xml}
 * @preview ![file-xml](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-xml.svg)
 */
const FileXml: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM192 368c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 13.6 4 26.9 11.6 38.2L188.8 432l-17.2 25.8C164 469.1 160 482.4 160 496c0 8.8 7.2 16 16 16s16-7.2 16-16c0-7.3 2.2-14.4 6.2-20.4l9.8-14.7 9.8 14.7c4 6.1 6.2 13.2 6.2 20.4c0 8.8 7.2 16 16 16s16-7.2 16-16c0-13.6-4-26.9-11.6-38.2L227.2 432l17.2-25.8C252 394.9 256 381.6 256 368c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 7.3-2.2 14.4-6.2 20.4L208 403.2l-9.8-14.7c-4-6.1-6.2-13.2-6.2-20.4zM448 496c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-112c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 128zM299.7 352.6c-6.9 1.9-11.7 8.2-11.7 15.4l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-70.2 18.3 30.5c2.9 4.8 8.1 7.8 13.7 7.8s10.8-2.9 13.7-7.8L384 425.8l0 70.2c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-7.2-4.8-13.5-11.7-15.4s-14.3 1-18 7.2L352 416.9l-34.3-57.1c-3.7-6.2-11.1-9.1-18-7.2z" />
    </Icon>
);

export default FileXml;
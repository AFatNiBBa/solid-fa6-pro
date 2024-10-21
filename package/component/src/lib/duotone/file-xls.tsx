
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-xls` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-xls?s=duotone file-xls}
 * @preview ![file-xls](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-xls.svg)
 */
const FileXls: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-176 0c-35.3 0-64 28.7-64 64l0 144-80 0c-35.3 0-64-28.7-64-64L0 64z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM224 368c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 13.6 4 26.9 11.6 38.2L220.8 432l-17.2 25.8C196 469.1 192 482.4 192 496c0 8.8 7.2 16 16 16s16-7.2 16-16c0-7.3 2.2-14.4 6.2-20.4l9.8-14.7 9.8 14.7c4 6.1 6.2 13.2 6.2 20.4c0 8.8 7.2 16 16 16s16-7.2 16-16c0-13.6-4-26.9-11.6-38.2L259.2 432l17.2-25.8C284 394.9 288 381.6 288 368c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 7.3-2.2 14.4-6.2 20.4L240 403.2l-9.8-14.7c-4-6.1-6.2-13.2-6.2-20.4zm96 128c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 128zm88-98.3c0 17.3 9.8 33.1 25.2 40.8l31.2 15.6c4.6 2.3 7.6 7 7.6 12.2c0 7.5-6.1 13.7-13.7 13.7L432 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l26.3 0c25.2 0 45.7-20.4 45.7-45.7c0-17.3-9.8-33.1-25.2-40.8l-31.2-15.6c-4.6-2.3-7.6-7-7.6-12.2c0-7.5 6.1-13.7 13.7-13.7l26.3 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-26.3 0c-25.2 0-45.7 20.4-45.7 45.7z" />
    </Icon>
);

export default FileXls;
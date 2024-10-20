
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-xls` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-xls?s=sharp-duotone-solid file-xls}
 * @preview ![file-xls](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-xls.svg)
 */
const FileXls: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 144-240 0 0 208L0 512 0 0z" />
        <path d="M384 160L224 0l0 160 160 0zM224 368l0-16-32 0 0 16c0 13.6 4 26.9 11.6 38.2L220.8 432l-17.2 25.8C196 469.1 192 482.4 192 496l0 16 32 0 0-16c0-7.3 2.2-14.4 6.2-20.4l9.8-14.7 9.8 14.7c4 6.1 6.2 13.2 6.2 20.4l0 16 32 0 0-16c0-13.6-4-26.9-11.6-38.2L259.2 432l17.2-25.8C284 394.9 288 381.6 288 368l0-16-32 0 0 16c0 7.3-2.2 14.4-6.2 20.4L240 403.2l-9.8-14.7c-4-6.1-6.2-13.2-6.2-20.4zm96 144l16 0 40 0 16 0 0-32-16 0-24 0 0-112 0-16-32 0 0 16 0 128 0 16zm88-114.3c0 17.3 9.8 33.1 25.2 40.8l31.2 15.6c4.6 2.3 7.6 7 7.6 12.2c0 7.5-6.1 13.7-13.7 13.7L432 480l-16 0 0 32 16 0 26.3 0c25.2 0 45.7-20.4 45.7-45.7c0-17.3-9.8-33.1-25.2-40.8l-31.2-15.6c-4.6-2.3-7.6-7-7.6-12.2c0-7.5 6.1-13.7 13.7-13.7l26.3 0 16 0 0-32-16 0-26.3 0c-25.2 0-45.7 20.4-45.7 45.7z" />
    </Icon>
);

export default FileXls;
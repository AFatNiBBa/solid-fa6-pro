
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-excel` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-excel?s=duotone file-excel}
 * @preview ![file-excel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-excel.svg)
 */
const FileExcel: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM116.3 277.8L162.7 344l-46.4 66.2c-7.6 10.9-5 25.8 5.9 33.4c4.2 2.9 9 4.3 13.7 4.3c7.6 0 15-3.6 19.7-10.2L192 385.8l36.3 51.9C233 444.4 240.5 448 248 448c4.8 0 9.6-1.4 13.7-4.3c10.9-7.6 13.5-22.6 5.9-33.4c-15.5-22.1-30.9-44.2-46.4-66.2c15.5-22.1 30.9-44.2 46.4-66.2c7.6-10.9 5-25.8-5.9-33.4s-25.8-5-33.4 5.9L192 302.1c-12.1-17.3-24.2-34.6-36.3-51.9c-7.6-10.9-22.6-13.5-33.4-5.9s-13.5 22.6-5.9 33.4z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM155.7 250.2c-7.6-10.9-22.6-13.5-33.4-5.9s-13.5 22.6-5.9 33.4L162.7 344l-46.4 66.2c-7.6 10.9-5 25.8 5.9 33.4s25.8 5 33.4-5.9L192 385.8l36.3 51.9c7.6 10.9 22.6 13.5 33.4 5.9s13.5-22.6 5.9-33.4L221.3 344l46.4-66.2c7.6-10.9 5-25.8-5.9-33.4s-25.8-5-33.4 5.9L192 302.1l-36.3-51.9z" />
    </Icon>
);

export default FileExcel;
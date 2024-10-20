
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-pen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-pen?s=duotone file-pen}
 * @preview ![file-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-pen.svg)
 */
const FilePen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 139.5-94.7 94.7c-8.2 8.2-14 18.5-16.8 29.7l-15 60.1c-2.3 9.4-1.8 19.1 1.4 27.9L64 512c-35.3 0-64-28.7-64-64L0 64z" />
        <path d="M384 160l-128 0c-17.7 0-32-14.3-32-32L224 0 384 160zm165.9 75.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.5-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417.1L441.2 287.8l71 71L382.9 488.1c-4.1 4.1-9.2 7-14.9 8.4l-60.2 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.2c1.4-5.6 4.3-10.8 8.4-14.9z" />
    </Icon>
);

export default FilePen;

import { Icon } from "../../index";

/**
 * A component that renders the `file-pen` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-pen?s=light file-pen}
 * @preview ![file-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/file-pen.svg)
 */
const FilePen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 480l194.6 0-1.1 4.5c-2.3 9.2-1.8 18.8 1.3 27.5L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L220.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9l0 121.8-32 32L352 192l-112 0c-26.5 0-48-21.5-48-48l0-112L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32zM351.5 160c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2L224 144c0 8.8 7.2 16 16 16l111.5 0zm167 104c-6.2-6.2-16.4-6.2-22.6 0l-24.8 24.8 39.9 39.9 24.8-24.8c6.2-6.2 6.2-16.4 0-22.6L518.6 264zM342.4 417.5c-2.1 2.1-3.5 4.6-4.2 7.4L326 473.9l48.9-12.2c2.8-.7 5.4-2.2 7.4-4.2L488.5 351.3l-39.9-39.9L342.4 417.5zM473.3 241.4c18.7-18.7 49.1-18.7 67.9 0l17.3 17.3c18.7 18.7 18.7 49.1 0 67.9L405 480.1c-6.2 6.2-13.9 10.5-22.3 12.6l-74.8 18.7c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l18.7-74.8c2.1-8.4 6.5-16.2 12.6-22.3L473.3 241.4z" />
    </Icon>
);

export default FilePen;
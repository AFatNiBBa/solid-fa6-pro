
import { Icon } from "../../index";

/**
 * A component that renders the `file-circle-minus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-minus?s=light file-circle-minus}
 * @preview ![file-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/file-circle-minus.svg)
 */
const FileCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 480l232.2 0c9.8 11.8 21 22.3 33.5 31.3c-3.2 .5-6.4 .7-9.7 .7L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L220.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9l0 34.7c-11.2 3.2-21.9 7.4-32 12.6l0-19.2-112 0c-26.5 0-48-21.5-48-48l0-112L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32zM351.5 160c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2L224 144c0 8.8 7.2 16 16 16l111.5 0zM432 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm80 144c0 8.8-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l128 0c8.8 0 16 7.2 16 16z" />
    </Icon>
);

export default FileCircleMinus;
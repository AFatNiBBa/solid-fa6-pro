
import { Icon } from "../../index";

/**
 * A component that renders the `file-circle-info` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-info?s=light file-circle-info}
 * @preview ![file-circle-info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/file-circle-info.svg)
 */
const FileCircleInfo: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 480l232.2 0c9.8 11.8 21 22.3 33.5 31.3c-3.2 .5-6.4 .7-9.7 .7L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L220.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9l0 34.7c-11.2 3.2-21.9 7.4-32 12.6l0-19.2-112 0c-26.5 0-48-21.5-48-48l0-112L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32zM351.5 160c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2L224 144c0 8.8 7.2 16 16 16l111.5 0zM544 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-32a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm-32 96c0-8.8 7.2-16 16-16l0-32c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 48s0 0 0 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-16 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default FileCircleInfo;
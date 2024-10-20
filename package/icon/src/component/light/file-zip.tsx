
import { Icon } from "../../index";

/**
 * A component that renders the `file-zip` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-zip?s=light file-zip}
 * @preview ![file-zip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/file-zip.svg)
 */
const FileZip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 480l112 0 0 32L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L220.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9L384 304l-32 0 0-112-112 0c-26.5 0-48-21.5-48-48l0-112L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32zM351.5 160c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2L224 144c0 8.8 7.2 16 16 16l111.5 0zM240 352l64 0c5.5 0 10.7 2.9 13.6 7.6s3.2 10.6 .7 15.6L265.9 480l38.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-5.5 0-10.7-2.9-13.6-7.6s-3.2-10.6-.7-15.6L278.1 384 240 384c-8.8 0-16-7.2-16-16s7.2-16 16-16zm144 16l0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16s16 7.2 16 16zm32 0c0-8.8 7.2-16 16-16l24 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-8 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80zm32 64l8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0 48z" />
    </Icon>
);

export default FileZip;
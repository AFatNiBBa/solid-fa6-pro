
import { Icon } from "../../index";

/**
 * A component that renders the `file-export` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-export?s=regular file-export}
 * @preview ![file-export](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/file-export.svg)
 */
const FileExport: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 448c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 96 48 0 0-101.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-80-48 0 0 80zM489 215c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39L216 288c-13.3 0-24 10.7-24 24s10.7 24 24 24l278.1 0-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80z" />
    </Icon>
);

export default FileExport;
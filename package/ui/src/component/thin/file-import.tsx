
import { Icon } from "../../index";

/**
 * A component that renders the `file-import` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-import?s=thin file-import}
 * @preview ![file-import](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/file-import.svg)
 */
const FileImport: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 496l-256 0c-26.5 0-48-21.5-48-48l0-96-16 0 0 96c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-268.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 192 16 0 0-192c0-26.5 21.5-48 48-48l140.1 0c1.3 0 2.6 .1 3.9 .2L336 136c0 22.1 17.9 40 40 40l119.8 0c.2 1.3 .2 2.6 .2 3.9L496 448c0 26.5-21.5 48-48 48zm41.1-336L376 160c-13.3 0-24-10.7-24-24l0-113.1c1 .8 1.9 1.6 2.7 2.4L486.6 157.3c.9 .9 1.7 1.8 2.4 2.7zM269.7 186.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L356.7 296 8 296c-4.4 0-8 3.6-8 8s3.6 8 8 8l348.7 0-98.3 98.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l112-112c3.1-3.1 3.1-8.2 0-11.3l-112-112z" />
    </Icon>
);

export default FileImport;
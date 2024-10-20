
import { Icon } from "../../index";

/**
 * A component that renders the `file-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-check?s=thin file-check}
 * @preview ![file-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/file-check.svg)
 */
const FileCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 496c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l140.1 0c1.3 0 2.6 .1 3.9 .2L208 136c0 22.1 17.9 40 40 40l119.8 0c.2 1.3 .2 2.6 .2 3.9L368 448c0 26.5-21.5 48-48 48L64 496zM358.6 157.3c.9 .9 1.7 1.8 2.4 2.7L248 160c-13.3 0-24-10.7-24-24l0-113.1c1 .8 1.9 1.6 2.7 2.4L358.6 157.3zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-268.1c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1L64 0zM277.7 280.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-101 101-47.7-47.7c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L159.7 387c3.1 3.1 8.2 3.1 11.3 0L277.7 280.3z" />
    </Icon>
);

export default FileCheck;
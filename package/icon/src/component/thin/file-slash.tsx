
import { Icon } from "../../index";

/**
 * A component that renders the `file-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-slash?s=thin file-slash}
 * @preview ![file-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/file-slash.svg)
 */
const FileSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 179.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-20.1 0-38.1 9.3-49.8 23.9l12.6 9.9C163.5 22.9 176.9 16 192 16l140.1 0c1.3 0 2.6 .1 3.9 .2L336 136c0 22.1 17.9 40 40 40l119.8 0c.2 1.3 .2 2.6 .2 3.9l0 123.3 16 12.6 0-136zM144 448l0-239.2-16-12.6L128 448c0 35.3 28.7 64 64 64l256 0c20.1 0 38.1-9.3 49.8-23.9l-12.6-9.9C476.5 489.1 463.1 496 448 496l-256 0c-26.5 0-48-21.5-48-48zM489.1 160L376 160c-13.3 0-24-10.7-24-24l0-113.1c1 .8 1.9 1.6 2.7 2.4L486.6 157.3c.9 .9 1.7 1.8 2.4 2.7zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7z" />
    </Icon>
);

export default FileSlash;
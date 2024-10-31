
import { Icon } from "../../index";

/**
 * A component that renders the `folder-open` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-open?s=light folder-open}
 * @preview ![folder-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/folder-open.svg)
 */
const FolderOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 160l0 32 32 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0 80 0c19.6 0 37.3-11.9 44.6-30.2l64-160c5.9-14.8 4.1-31.5-4.8-44.7S543.9 224 528 224l-400 0c-19.6 0-37.3 11.9-44.6 30.2L32 382.8 32 96c0-17.7 14.3-32 32-32l117.5 0c8.5 0 16.6 3.4 22.6 9.4l22.6-22.6L204.1 73.4l26.5 26.5c18 18 42.4 28.1 67.9 28.1L416 128c17.7 0 32 14.3 32 32zM384 448L64 448c-5.3 0-10.3-2.6-13.2-7s-3.6-10-1.6-14.9l64-160c2.4-6.1 8.3-10.1 14.9-10.1l400 0c5.3 0 10.3 2.6 13.2 7s3.6 10 1.6 14.9l-64 160C476.4 444 470.5 448 464 448l-80 0z" />
    </Icon>
);

export default FolderOpen;
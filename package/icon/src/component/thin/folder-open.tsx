
import { Icon } from "../../index";

/**
 * A component that renders the `folder-open` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-open?s=thin folder-open}
 * @preview ![folder-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/folder-open.svg)
 */
const FolderOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 464c-10.6 0-20.5-5.3-26.5-14.1s-7.2-20-3.2-29.8l64-160C103.1 248 114.9 240 128 240l400 0c10.6 0 20.5 5.3 26.5 14.1s7.2 20 3.2 29.8l-64 160C488.9 456 477.1 464 464 464l-80 0L64 464zm320 16l80 0c19.6 0 37.3-11.9 44.6-30.2l64-160c5.9-14.8 4.1-31.5-4.8-44.7S543.9 224 528 224l-400 0c-19.6 0-37.3 11.9-44.6 30.2l-64 160c-1.3 3.2-2.2 6.5-2.8 9.8c-.4-2.6-.7-5.3-.7-8L16 96c0-26.5 21.5-48 48-48l117.5 0c12.7 0 24.9 5.1 33.9 14.1l26.5 26.5c15 15 35.4 23.4 56.6 23.4L416 112c26.5 0 48 21.5 48 48l0 32 16 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0z" />
    </Icon>
);

export default FolderOpen;

import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-user` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-user?s=light clipboard-user}
 * @preview ![clipboard-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clipboard-user.svg)
 */
const ClipboardUser: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M145.5 68c5.3-20.7 24.1-36 46.5-36s41.2 15.3 46.5 36c1.8 7.1 8.2 12 15.5 12l18 0c8.8 0 16 7.2 16 16l0 32-96 0-96 0 0-32c0-8.8 7.2-16 16-16l18 0c7.3 0 13.7-4.9 15.5-12zM192 0c-32.8 0-61 19.8-73.3 48L112 48C91.1 48 73.3 61.4 66.7 80L64 80C28.7 80 0 108.7 0 144L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-304c0-35.3-28.7-64-64-64l-2.7 0c-6.6-18.6-24.4-32-45.3-32l-6.7 0C253 19.8 224.8 0 192 0zM320 112c17.7 0 32 14.3 32 32l0 304c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-304c0-17.7 14.3-32 32-32l0 16c0 17.7 14.3 32 32 32l96 0 96 0c17.7 0 32-14.3 32-32l0-16zM208 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM192 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 64l64 0c26.5 0 48 21.5 48 48c0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default ClipboardUser;
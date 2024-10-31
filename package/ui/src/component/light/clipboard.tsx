
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard?s=light clipboard}
 * @preview ![clipboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clipboard.svg)
 */
const Clipboard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 32c-22.3 0-41.2 15.3-46.5 36c-1.8 7.1-8.2 12-15.5 12l-18 0c-8.8 0-16 7.2-16 16l0 32 96 0 96 0 0-32c0-8.8-7.2-16-16-16l-18 0c-7.3 0-13.7-4.9-15.5-12c-5.3-20.7-24.1-36-46.5-36zM118.7 48C131 19.8 159.2 0 192 0s61 19.8 73.3 48l6.7 0c20.9 0 38.7 13.4 45.3 32l2.7 0c35.3 0 64 28.7 64 64l0 304c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 144c0-35.3 28.7-64 64-64l2.7 0C73.3 61.4 91.1 48 112 48l6.7 0zM320 128c0 17.7-14.3 32-32 32l-96 0-96 0c-17.7 0-32-14.3-32-32l0-16c-17.7 0-32 14.3-32 32l0 304c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-304c0-17.7-14.3-32-32-32l0 16zM192 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Clipboard;
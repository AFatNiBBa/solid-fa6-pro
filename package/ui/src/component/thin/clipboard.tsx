
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard?s=thin clipboard}
 * @preview ![clipboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clipboard.svg)
 */
const Clipboard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M120.4 64c4-36 34.5-64 71.6-64s67.6 28 71.6 64l8.4 0c20.9 0 38.7 13.4 45.3 32l2.7 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l2.7 0C73.3 77.4 91.1 64 112 64l8.4 0zM64 112c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l0 16c0 17.7-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32l0-16zM192 16c-30.9 0-56 25.1-56 56c0 4.4-3.6 8-8 8l-16 0c-17.7 0-32 14.3-32 32l0 16c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16l0-16c0-17.7-14.3-32-32-32l-16 0c-4.4 0-8-3.6-8-8c0-30.9-25.1-56-56-56zM176 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Clipboard;
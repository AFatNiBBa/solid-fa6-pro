
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard?s=sharp-thin clipboard}
 * @preview ![clipboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clipboard.svg)
 */
const Clipboard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M257.3 80l13.1 0L304 80l0 64-112 0L80 144l0-64 33.6 0 13.1 0 2.6-12.8C135.2 38 161.1 16 192 16s56.8 22 62.7 51.2L257.3 80zM113.6 64L80 64 64 64l0 16 0 16L8 96 0 96l0 8L0 504l0 8 8 0 368 0 8 0 0-8 0-400 0-8-8 0-56 0 0-16 0-16-16 0-33.6 0C263 27.5 230.7 0 192 0s-71 27.5-78.4 64zM16 112l48 0 0 32 0 16 16 0 112 0 112 0 16 0 0-16 0-32 48 0 0 384L16 496l0-384zM192 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Clipboard;
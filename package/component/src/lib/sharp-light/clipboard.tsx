
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard?s=sharp-light clipboard}
 * @preview ![clipboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clipboard.svg)
 */
const Clipboard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 32c-22.3 0-41.2 15.3-46.5 36l-3.1 12L130 80 96 80l0 48 96 0 96 0 0-48-34 0-12.4 0-3.1-12c-5.3-20.7-24.1-36-46.5-36zM118.7 48C131 19.8 159.2 0 192 0s61 19.8 73.3 48L304 48l16 0 0 16 0 16 32 0 32 0 0 32 0 368 0 32-32 0L32 512 0 512l0-32L0 112 0 80l32 0 32 0 0-16 0-16 16 0 38.7 0zM320 160l-16 0-112 0L80 160l-16 0 0-16 0-32-32 0 0 368 320 0 0-368-32 0 0 32 0 16zM192 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Clipboard;

import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-check?s=sharp-light clipboard-check}
 * @preview ![clipboard-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clipboard-check.svg)
 */
const ClipboardCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M145.5 68c5.3-20.7 24.1-36 46.5-36s41.2 15.3 46.5 36l3.1 12L254 80l34 0 0 48-96 0-96 0 0-48 34 0 12.4 0 3.1-12zM192 0c-32.8 0-61 19.8-73.3 48L80 48 64 48l0 16 0 16L32 80 0 80l0 32L0 480l0 32 32 0 320 0 32 0 0-32 0-368 0-32-32 0-32 0 0-16 0-16-16 0-38.7 0C253 19.8 224.8 0 192 0zM320 144l0-32 32 0 0 368L32 480l0-368 32 0 0 32 0 16 16 0 112 0 112 0 16 0 0-16zM208 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm91.3 171.3L310.6 240 288 217.4l-11.3 11.3L160 345.4l-52.7-52.7L96 281.4 73.4 304l11.3 11.3 64 64L160 390.6l11.3-11.3 128-128z" />
    </Icon>
);

export default ClipboardCheck;
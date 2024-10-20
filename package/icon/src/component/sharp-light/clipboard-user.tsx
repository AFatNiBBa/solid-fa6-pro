
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-user` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-user?s=sharp-light clipboard-user}
 * @preview ![clipboard-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clipboard-user.svg)
 */
const ClipboardUser: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M145.5 68c5.3-20.7 24.1-36 46.5-36s41.2 15.3 46.5 36l3.1 12L254 80l34 0 0 48-96 0-96 0 0-48 34 0 12.4 0 3.1-12zM192 0c-32.8 0-61 19.8-73.3 48L80 48 64 48l0 16 0 16L32 80 0 80l0 32L0 480l0 32 32 0 320 0 32 0 0-32 0-368 0-32-32 0-32 0 0-16 0-16-16 0-38.7 0C253 19.8 224.8 0 192 0zM320 144l0-32 32 0 0 368L32 480l0-368 32 0 0 32 0 16 16 0 112 0 112 0 16 0 0-16zM208 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM192 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM113.7 448l21.3-64 113.9 0 21.3 64 33.7 0-32-96-160 0L80 448l33.7 0z" />
    </Icon>
);

export default ClipboardUser;

import { Icon } from "../../index";

/**
 * A component that renders the `handshake` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/handshake?s=sharp-solid handshake}
 * @preview ![handshake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/handshake.svg)
 */
const Handshake: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M298.8 64L224 64l-96 64 0 224 28.2 0 73.9 67.4 35.4 32.4 47.7-52.2 22.3 20.5 35.4 32.4 44.8-48.9 35.2 32.2 64.9-70.8-35.4-32.4-134.2-123-96.4 75-13 10.1-9.7-13.4-64-88-8.9-12.3 11.8-9.6L298.8 64zm74.1 124.9L512 316.8 512 128l-.7 0-3.9-2.5L411.3 64l-61.7 0L197.9 186.9l45.3 62.3 131-101.9 12.6-9.8 19.6 25.3-12.6 9.8-20.9 16.2zM96 128L0 128 0 384l96 0 0-256zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 256 96 0 0-256-96 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Handshake;
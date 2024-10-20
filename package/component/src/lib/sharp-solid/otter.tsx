
import { Icon } from "../../index";

/**
 * A component that renders the `otter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/otter?s=sharp-solid otter}
 * @preview ![otter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/otter.svg)
 */
const Otter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M188.8 193.6L208 208l16 0 32 0 0-16 0-32 0-16c0-35.3-28.7-64-64-64l-64 0c-35.3 0-64 28.7-64 64l0 56 0 8 32 0 16 0 19.2-14.4 7.9-5.9-7.5-5-3.6-2.4 0-4.3 0-24 0-8 8 0 48 0 8 0 0 8 0 24 0 4.3-3.6 2.4-7.5 5 7.9 5.9zM256 320l0 64 128 0 0-32 0-32 32-32 32-32 0-32 0-32 64 0 0 48 0 16 0 64 32 0 0-115.7c0-48.2-30.8-91-76.6-106.3l-8.5-2.8 8.2-30.9 19.9 4C576 86.1 640 164.2 640 254.9l0 1.1s0 0 0 0c0 123.7-100.3 224-224 224l-1.1 0L256 480l-.6 0C132 480 32 380 32 256.6l0-.6-16 0 0-48 0-64L0 144 0 96l24 0 2.8 0C44.8 58.2 83.3 32 128 32l64 0c44.7 0 83.2 26.2 101.2 64l2.8 0 24 0 0 48-16 0 0 16 48 0 32 0 0 64-32 0-32 0 0 32 80 0-48 48 0 16-32 0c-41.8 0-77.4-26.7-90.5-64L192 256l-32-24-32 24-32 0c0 35.3 28.7 64 64 64l64 0 32 0zM96 128a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm112 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Otter;
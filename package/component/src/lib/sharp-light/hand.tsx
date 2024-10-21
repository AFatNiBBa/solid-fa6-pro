
import { Icon } from "../../index";

/**
 * A component that renders the `hand` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand?s=sharp-light hand}
 * @preview ![hand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hand.svg)
 */
const Hand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 0L208 0l0 16 0 16-64 0-16 0 0 16 0 240.8L95.6 256.4 67.3 228.1 56 216.8 44.7 228.1l-40 40L0 272.8l0 6.6 0 33.1 0 6.6 4.7 4.7 11.7 11.7L120.2 439.4C166.7 485.9 229.8 512 295.5 512l8.5 0c0 0 0 0 0 0c97.2 0 176-78.8 176-176l0-224 0-16-16 0-64 0s0 0 0 0l0-48 0-16-16 0-64 0 0-16 0-16L304 0 224 0zM368 128l0 112 0 16 32 0 0-16 0-112 48 0 0 208c0 79.5-64.5 144-144 144c0 0 0 0 0 0l-8.4 0c-57.3 0-112.2-22.8-152.7-63.3L39 313l-7-7 0-19.9 24-24 17 17 48 48 11.3 11.3L143.6 327l11.7-11.7 4.7-4.7 0-6.6 0-240 48 0 0 176 0 16 32 0 0-16 0-192 0-16 48 0 0 16 0 16s0 0 0 0l0 16 0 160 0 16 32 0 0-16 0-160 0-16 48 0 0 48 0 16s0 0 0 0z" />
    </Icon>
);

export default Hand;
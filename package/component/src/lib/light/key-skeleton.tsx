
import { Icon } from "../../index";

/**
 * A component that renders the `key-skeleton` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key-skeleton?s=light key-skeleton}
 * @preview ![key-skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/key-skeleton.svg)
 */
const KeySkeleton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 32a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256c79.5 0 144-64.5 144-144S383.5 0 304 0S160 64.5 160 144c0 34 11.8 65.2 31.5 89.9L4.7 420.7c-6.2 6.2-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L38.6 432 80 390.6l52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L102.6 368 214.1 256.5C238.8 276.2 270 288 304 288z" />
    </Icon>
);

export default KeySkeleton;
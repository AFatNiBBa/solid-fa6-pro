
import { Icon } from "../../index";

/**
 * A component that renders the `key-skeleton` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key-skeleton?s=solid key-skeleton}
 * @preview ![key-skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/key-skeleton.svg)
 */
const KeySkeleton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 64a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 224c79.5 0 144-64.5 144-144S383.5 0 304 0S160 64.5 160 144c0 28.2 8.1 54.5 22.1 76.7L9.4 393.4c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 416 96 397.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L141.3 352l86.1-86.1c22.2 14 48.5 22.1 76.7 22.1z" />
    </Icon>
);

export default KeySkeleton;
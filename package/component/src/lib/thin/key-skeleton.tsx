
import { Icon } from "../../index";

/**
 * A component that renders the `key-skeleton` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key-skeleton?s=thin key-skeleton}
 * @preview ![key-skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/key-skeleton.svg)
 */
const KeySkeleton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 16a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272c79.5 0 144-64.5 144-144S383.5 0 304 0S160 64.5 160 144c0 36.9 13.9 70.5 36.7 96L2.3 434.3c-3.1 3.1-3.1 8.2 0 11.3l64 64c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L19.3 440 72 387.3l58.3 58.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L83.3 376 208 251.3c25.5 22.8 59.1 36.7 96 36.7z" />
    </Icon>
);

export default KeySkeleton;
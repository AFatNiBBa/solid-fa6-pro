
import { Icon } from "../../index";

/**
 * A component that renders the `key-skeleton` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key-skeleton?s=sharp-light key-skeleton}
 * @preview ![key-skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/key-skeleton.svg)
 */
const KeySkeleton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 32a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256c79.5 0 144-64.5 144-144S383.5 0 304 0S160 64.5 160 144c0 34 11.8 65.2 31.5 89.9L80 345.4 57.4 368 12.7 412.7 1.4 424l11.3 11.3 64 64L88 510.6 110.6 488 99.3 476.7 46.6 424 80 390.6l52.7 52.7L144 454.6 166.6 432l-11.3-11.3L102.6 368 214.1 256.5C238.8 276.2 270 288 304 288z" />
    </Icon>
);

export default KeySkeleton;
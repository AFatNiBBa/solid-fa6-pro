
import { Icon } from "../../index";

/**
 * A component that renders the `down-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-right?s=sharp-light down-right}
 * @preview ![down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/down-right.svg)
 */
const DownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M240 237.3l-22.6-22.6L112 109.3 45.3 176 150.6 281.4 173.3 304l-22.6 22.6L101.3 376l8 8L320 384l0-210.7-8-8-49.4 49.4L240 237.3zm49.4-94.6L312 120l22.6 22.6L352 160l0 224 0 32-32 0L96 416 78.6 398.6 56 376l22.6-22.6 26.7-26.7L128 304l-22.6-22.6L22.6 198.6 0 176l22.6-22.6L89.4 86.6 112 64l22.6 22.6 82.7 82.7L240 192l22.6-22.6 26.7-26.7z" />
    </Icon>
);

export default DownRight;
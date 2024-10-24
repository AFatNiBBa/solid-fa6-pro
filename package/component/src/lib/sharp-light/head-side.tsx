
import { Icon } from "../../index";

/**
 * A component that renders the `head-side` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side?s=sharp-light head-side}
 * @preview ![head-side](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/head-side.svg)
 */
const HeadSide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 224C32 118 118 32 224 32l24 0c88.4 0 160 71.6 160 160l0 7.2 5.4 4.8L480 263.2l0 40.8-48 0-16 0 0 16 0 96-112 0-16 0 0 16 0 64 0 16 32 0 0-16 0-48 112 0 16 0 0-16 0-96 48 0 16 0 0-16 0-64 0-7.2-5.4-4.8-66.8-59.3C436 82 351.6 0 248 0L224 0C100.3 0 0 100.3 0 224c0 61 24.4 116.4 64 156.8L64 496l0 16 32 0 0-16 0-121.9 0-6.8-4.9-4.7C54.6 327.6 32 278.4 32 224zm312 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default HeadSide;
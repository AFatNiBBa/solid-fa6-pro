
import { Icon } from "../../index";

/**
 * A component that renders the `up-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right?s=sharp-thin up-right}
 * @preview ![up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/up-right.svg)
 */
const UpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M132.7 196.7L59.3 123.3 48 112l11.3-11.3L80 80l272 0 16 0 0 16 0 272-20.7 20.7L336 400l-11.3-11.3-73.4-73.4L240 304l-11.3 11.3L107.3 436.7 96 448 84.7 436.7 11.3 363.3 0 352l11.3-11.3L132.7 219.3 144 208l-11.3-11.3zM22.6 352L96 425.4 228.7 292.7 240 281.4l11.3 11.3L336 377.4l16-16L352 96 86.6 96l-16 16 84.7 84.7L166.6 208l-11.3 11.3L22.6 352z" />
    </Icon>
);

export default UpRight;
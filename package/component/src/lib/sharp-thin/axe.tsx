
import { Icon } from "../../index";

/**
 * A component that renders the `axe` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/axe?s=sharp-thin axe}
 * @preview ![axe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/axe.svg)
 */
const Axe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M75.3 500.7L313.4 262.6l-11.3-11.3L64 489.4 22.6 448 260.7 209.9l-11.3-11.3L11.3 436.7 0 448l11.3 11.3 41.4 41.4L64 512l11.3-11.3zM464 112l36.7-36.7L512 64 500.7 52.7 459.3 11.3 448 0 436.7 11.3 400 48 363.3 11.3 352 0 340.7 11.3 235.3 116.7 224 128l11.3 11.3L384 288l0 112 0 16 16 0 16 0c123.7 0 224-100.3 224-224l0-16 0-16-16 0-112 0-48-48zM448 22.6L489.4 64l-36.7 36.7L411.3 59.3 448 22.6zM624 176l0 16c0 114.9-93.1 208-208 208l-16 0 0-112 0-6.6-4.7-4.7L246.6 128 352 22.6 500.7 171.3l4.7 4.7 6.6 0 112 0zM448.5 360c72.7-4.8 130.6-62.7 135.4-135.4l-16-1.1c-4.3 64.7-55.8 116.2-120.6 120.6l1.1 16z" />
    </Icon>
);

export default Axe;
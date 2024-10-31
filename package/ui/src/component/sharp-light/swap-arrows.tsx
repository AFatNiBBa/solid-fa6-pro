
import { Icon } from "../../index";

/**
 * A component that renders the `swap-arrows` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap-arrows?s=sharp-light swap-arrows}
 * @preview ![swap-arrows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/swap-arrows.svg)
 */
const SwapArrows: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 17.4l11.3 11.3 80 80L214.6 120 192 142.6l-11.3-11.3L128 78.6 128 448l176 0 0-400 0-16 16 0 208 0 16 0 0 16 0 385.4 52.7-52.7L608 369.4 630.6 392l-11.3 11.3-80 80L528 494.6l-11.3-11.3-80-80L425.4 392 448 369.4l11.3 11.3L512 433.4 512 64 336 64l0 400 0 16-16 0-208 0-16 0 0-16L96 78.6 43.3 131.3 32 142.6 9.4 120l11.3-11.3 80-80L112 17.4z" />
    </Icon>
);

export default SwapArrows;
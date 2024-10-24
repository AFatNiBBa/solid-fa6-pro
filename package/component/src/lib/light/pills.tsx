
import { Icon } from "../../index";

/**
 * A component that renders the `pills` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pills?s=light pills}
 * @preview ![pills](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pills.svg)
 */
const Pills: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 64c44.2 0 80 35.8 80 80l0 112L32 256l0-112c0-44.2 35.8-80 80-80zM32 368l0-80 160 0 0 80c0 44.2-35.8 80-80 80s-80-35.8-80-80zM0 144L0 368c0 61.9 50.1 112 112 112s112-50.1 112-112l0-224c0-61.9-50.1-112-112-112S0 82.1 0 144zM416 448c-70.7 0-128-57.3-128-128c0-29.6 10-56.8 26.9-78.5L494.5 421.1C472.8 438 445.6 448 416 448zM337.5 218.9C359.2 202 386.4 192 416 192c70.7 0 128 57.3 128 128c0 29.6-10 56.8-26.9 78.5L337.5 218.9zM416 480a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default Pills;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `triangle-instrument` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-instrument?s=sharp-duotone-solid triangle-instrument}
 * @preview ![triangle-instrument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/triangle-instrument.svg)
 */
const TriangleInstrument: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 512l74.6 0 426.7 0 74.6 0-38.4-64L420.7 253.2l-46.6 46.6L463 448 113 448 288 156.4l60.6 101c15.5-15.5 31.1-31.1 46.6-46.6l-70-116.6L320 85.3 320 32l0-32L256 0l0 32 0 53.3-5.3 8.9L38.4 448 0 512z" />
        <path d="M537 137l17-17L520 86.1l-17 17L306.8 299.2c-5.9-2.1-12.2-3.2-18.8-3.2c-30.9 0-56 25.1-56 56s25.1 56 56 56s56-25.1 56-56c0-6.6-1.1-12.9-3.2-18.8L537 137z" />
    </Icon>
);

export default TriangleInstrument;
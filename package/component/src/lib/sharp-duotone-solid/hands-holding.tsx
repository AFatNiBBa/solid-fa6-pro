
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hands-holding` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-holding?s=sharp-duotone-solid hands-holding}
 * @preview ![hands-holding](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hands-holding.svg)
 */
const HandsHolding: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M80 104l0 8 0 32 0 80 0 66.7 84.1 84.1L205.8 347l-36.4-36.4L146.7 288l-9.4-9.4L114.7 256 160 210.7l22.6 22.6 9.4 9.4 22.6 22.6 64 64 9.4 9.4 0 13.3 0 64 0 32 0 32 0 32-32 0-96 0-13.3 0-9.4-9.4-128-128L0 365.3 0 352 0 224l0-64 0-32 0-24L0 64l80 0 0 40zm480 0l0-40 80 0 0 40 0 24 0 32 0 64 0 128 0 13.3-9.4 9.4-128 128-9.4 9.4L480 512l-96 0-32 0 0-32 0-32 0-32 0-64 0-13.3 9.4-9.4 64-64L448 242.7l9.4-9.4L480 210.7 525.3 256l-22.6 22.6-9.4 9.4-22.6 22.6L434.2 347l41.7 27.8L560 290.7l0-66.7 0-80 0-32 0-8z" />
    </Icon>
);

export default HandsHolding;
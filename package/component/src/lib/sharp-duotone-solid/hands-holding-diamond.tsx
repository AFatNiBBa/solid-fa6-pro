
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hands-holding-diamond` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-holding-diamond?s=sharp-duotone-solid hands-holding-diamond}
 * @preview ![hands-holding-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hands-holding-diamond.svg)
 */
const HandsHoldingDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 40 0 24 0 32 0 64L0 352l0 13.3 9.4 9.4 128 128 9.4 9.4 13.3 0 96 0 32 0 0-32 0-32 0-32 0-64 0-13.3-9.4-9.4-64-64L192 242.7l-9.4-9.4L160 210.7 114.7 256l22.6 22.6 9.4 9.4 22.6 22.6L205.8 347l-41.7 27.8L80 290.7 80 224l0-80 0-32 0-8 0-40L0 64zM352 338.7l0 13.3 0 64 0 32 0 32 0 32 32 0 96 0 13.3 0 9.4-9.4 128-128 9.4-9.4 0-13.3 0-128 0-64 0-32 0-24 0-40-80 0 0 40 0 8 0 32 0 80 0 66.7-84.1 84.1L434.2 347l36.4-36.4L493.3 288l9.4-9.4L525.3 256 480 210.7l-22.6 22.6-9.4 9.4-22.6 22.6-64 64-9.4 9.4z" />
        <path d="M192 128L320 256 448 128 320 0 192 128z" />
    </Icon>
);

export default HandsHoldingDiamond;
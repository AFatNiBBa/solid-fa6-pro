
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hourglass-half` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-half?s=sharp-duotone-solid hourglass-half}
 * @preview ![hourglass-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hourglass-half.svg)
 */
const HourglassHalf: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 64l64 0 0 50.7L109.3 128l165.5 0L288 114.7 288 64l64 0 0 64 0 13.3-9.4 9.4L237.3 256 342.6 361.4l9.4 9.4 0 13.3 0 64-48 0-16 0L96 448l-32 0-32 0 0-64 0-13.3 9.4-9.4L146.7 256 41.4 150.6 32 141.3 32 128l0-64zm77.3 320l165.5 0L192 301.3 109.3 384z" />
        <path d="M32 512L0 512l0-64 32 0 320 0 32 0 0 64-32 0L32 512zM32 64L0 64 0 0 32 0 352 0l32 0 0 64-32 0L32 64z" />
    </Icon>
);

export default HourglassHalf;
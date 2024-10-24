
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe-smoking` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-smoking?s=sharp-duotone-solid pipe-smoking}
 * @preview ![pipe-smoking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pipe-smoking.svg)
 */
const PipeSmoking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M364 188.2c4.6 3 9.1 6.1 13.7 9.1c8 5.3 16 10.7 24 16c5.2 3.5 10.4 6.9 15.5 10.4L523.8 64 608 64l32 0 0-64L608 0 506.7 0 489.5 0 480 14.2l-116 174z" />
        <path d="M377.8 197.4l-26.6-17.8-17.8 26.6L256 322.3l0-66.3 0-32-32 0L32 224 0 224l0 32 0 98.9C0 441.7 70.3 512 157.1 512c52.5 0 101.6-26.2 130.7-69.9L410.6 257.8l17.8-26.6-26.6-17.8-24-16z" />
    </Icon>
);

export default PipeSmoking;
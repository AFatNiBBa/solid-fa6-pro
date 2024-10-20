
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-w` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-w?s=sharp-duotone-solid square-w}
 * @preview ![square-w](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-w.svg)
 */
const SquareW: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM70.5 152l50 0 40.7 141.5 39.9-124.8 5.3-16.7 35 0 5.3 16.7 39.9 124.8L327.5 152l50 0L311.1 382.6l-5 17.4-35.6 0-5.3-16.7L224 254.7 182.9 383.3 177.5 400l-35.6 0-5-17.4L70.5 152z" />
        <path d="M327.5 152l50 0L311.1 382.6l-5 17.4-35.6 0-5.3-16.7L224 254.7 182.9 383.3 177.5 400l-35.6 0-5-17.4L70.5 152l50 0 40.7 141.5 39.9-124.8 5.3-16.7 35 0 5.3 16.7 39.9 124.8L327.5 152z" />
    </Icon>
);

export default SquareW;
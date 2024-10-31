
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-slash?s=sharp-duotone-solid laptop-slash}
 * @preview ![laptop-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/laptop-slash.svg)
 */
const LaptopSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384l365.5 0 121.8 96L48 480 0 432l0-48zM64 146.4l64 50.4L128 352l-64 0 0-205.6zM70.5 32L96 32l448 0 32 0 0 32 0 288-64 0 0-256L153 96 70.5 32zM523.9 384L640 384l0 48-23.7 23.7L523.9 384z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default LaptopSlash;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-slash?s=sharp-duotone-solid bell-slash}
 * @preview ![bell-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bell-slash.svg)
 */
const BellSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 368l64-72 0-73.9L406.2 416 96 416l0-48zm89.5-246.7c23-35.5 59.6-61.4 102.5-70.1L288 0l64 0 0 51.2C425 66 480 130.6 480 208l0 88 64 72 0 31.6C424.5 306.8 305 214 185.5 121.3zM256 448l64 0 64 0c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default BellSlash;
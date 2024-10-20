
import { Icon, generic } from "../../index";

/**
 * A component that renders the `screwdriver` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver?s=duotone screwdriver}
 * @preview ![screwdriver](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/screwdriver.svg)
 */
const Screwdriver: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M211 267.1c7.1 3.6 13.7 8.4 19.7 14.3c1.5 1.5 2.9 3 4.2 4.6s2.6 3.2 3.8 4.8c2.4 3.3 4.5 6.7 6.3 10.3l109-109 54.1 0c7.4 0 14.5-3.5 19-9.4l80-104c7.4-9.6 6.5-23.1-2.1-31.6L465 7c-8.5-8.5-22-9.4-31.6-2.1l-104 80c-5.9 4.5-9.4 11.6-9.4 19l0 54.1-109 109z" />
        <path d="M230.6 281.4c-30.2-30.2-79.1-30.2-109.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l112-112c30.2-30.2 30.2-79.1 0-109.3z" />
    </Icon>
);

export default Screwdriver;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-slash?s=duotone shield-slash}
 * @preview ![shield-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shield-slash.svg)
 */
const ShieldSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M80.6 159.5c5.5 102 51.4 266.3 213 343.7c16.7 8 36.1 8 52.8 0c35.8-17.1 65.8-38.5 91.1-62.5L80.6 159.5zM131 77.4C253.3 173.3 375.6 269.1 497.9 365c47.4-78.8 61.8-166.3 62.1-225c.1-26.2-16.3-47.9-38.3-57.2L333.4 2.9C329.2 1 324.7 0 320 0s-9.2 1-13.4 2.9L131 77.4z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default ShieldSlash;
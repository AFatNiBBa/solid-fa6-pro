
import { Icon } from "../../index";

/**
 * A component that renders the `display-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-slash?s=sharp-regular display-slash}
 * @preview ![display-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/display-slash.svg)
 */
const DisplaySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M91.2 48L503.3 368l56.7 0 0-320L91.2 48zM32 2.1L32 0 80 0 560 0l48 0 0 48 0 320 0 48-42.8 0 55.8 43.3 19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l2.6 2zM80 368l265 0L406 416l-9.6 0 8 48 51.7 0 10.9 0L480 474.3l0 37.7-24 0-72 0-128 0-72 0-24 0 0-48 24 0 51.7 0 8-48L80 416l-48 0 0-48 0-246.6 48 37.8L80 368zm267.7 48l-55.3 0-8 48 71.3 0-8-48z" />
    </Icon>
);

export default DisplaySlash;

import { Icon } from "../../index";

/**
 * A component that renders the `display-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-slash?s=sharp-solid display-slash}
 * @preview ![display-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/display-slash.svg)
 */
const DisplaySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 0L32 0l0 2.1-2.6-2L0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L565.2 416l42.8 0L608 0zM482.7 352L111.8 64 544 64l0 288-61.3 0zM32 416l240 0-10.7 32L192 448l-32 0 0 64 32 0 256 0 32 0 0-37.7L446.6 448l-67.9 0L368 416l38 0-81.2-64L96 352l0-180.2L32 121.4 32 416z" />
    </Icon>
);

export default DisplaySlash;
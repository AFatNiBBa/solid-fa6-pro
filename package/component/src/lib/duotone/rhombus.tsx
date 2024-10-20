
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rhombus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rhombus?s=duotone rhombus}
 * @preview ![rhombus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rhombus.svg)
 */
const Rhombus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M254.4 14.1C246.8 5.1 235.7 0 224 0s-22.8 5.1-30.4 14.1l-184 216C-3.2 245-3.2 267 9.6 281.9l184 216c7.6 8.9 18.7 14.1 30.4 14.1s22.8-5.1 30.4-14.1l184-216c12.7-14.9 12.7-36.9 0-51.9l-184-216z" />
    </Icon>
);

export default Rhombus;
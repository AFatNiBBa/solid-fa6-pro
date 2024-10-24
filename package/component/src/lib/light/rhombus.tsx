
import { Icon } from "../../index";

/**
 * A component that renders the `rhombus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rhombus?s=light rhombus}
 * @preview ![rhombus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/rhombus.svg)
 */
const Rhombus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M438.5 230.1l-184-216C246.8 5.1 235.7 0 224 0s-22.8 5.1-30.4 14.1l-184 216C-3.2 245-3.2 267 9.6 281.9l184 216c7.6 8.9 18.7 14.1 30.4 14.1s22.8-5.1 30.4-14.1l184-216c12.7-14.9 12.7-36.9 0-51.9zM230.1 34.8l184 216c2.5 3 2.5 7.4 0 10.4l-184 216c-1.5 1.8-3.7 2.8-6.1 2.8s-4.6-1-6.1-2.8l-184-216c-2.5-3-2.5-7.4 0-10.4l184-216c1.5-1.8 3.7-2.8 6.1-2.8s4.6 1 6.1 2.8z" />
    </Icon>
);

export default Rhombus;
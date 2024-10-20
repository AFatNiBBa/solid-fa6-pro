
import { Icon } from "../../index";

/**
 * A component that renders the `outdent` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outdent?s=light outdent}
 * @preview ![outdent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/outdent.svg)
 */
const Outdent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64c0 8.8 7.2 16 16 16l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 48C7.2 48 0 55.2 0 64zM192 192c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-224 0c-8.8 0-16 7.2-16 16zm16 112c-8.8 0-16 7.2-16 16s7.2 16 16 16l224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-224 0zM0 448c0 8.8 7.2 16 16 16l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 432c-8.8 0-16 7.2-16 16zM96 211.8l0 88.4L42.3 256 96 211.8zM7 243.6C-.8 250-.8 262 7 268.4l94.8 78.1c10.4 8.6 26.2 1.2 26.2-12.4l0-156.2c0-13.5-15.7-20.9-26.2-12.4L7 243.6z" />
    </Icon>
);

export default Outdent;
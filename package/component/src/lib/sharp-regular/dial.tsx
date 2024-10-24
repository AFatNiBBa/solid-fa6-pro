
import { Icon } from "../../index";

/**
 * A component that renders the `dial` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial?s=sharp-regular dial}
 * @preview ![dial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dial.svg)
 */
const Dial: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 0L256 0l0 64 64 0 0-64zM128 64L64 64l0 64 64 0 0-64zm384 0l-64 0 0 64 64 0 0-64zm0 192l0 64 64 0 0-64-64 0zm0 192l-64 0 0 64 64 0 0-64zM64 448l0 64 64 0 0-64-64 0zM0 256l0 64 64 0 0-64L0 256zm208.8-47.2c37.9-37.9 96.2-43 139.6-15.1L271 271l-17 17L288 321.9l17-17 77.4-77.4c27.8 43.4 22.8 101.7-15.1 139.6c-43.7 43.7-114.7 43.7-158.4 0s-43.7-114.7 0-158.4zm192.3-33.9A160 160 0 1 0 174.9 401.1 160 160 0 1 0 401.1 174.9z" />
    </Icon>
);

export default Dial;
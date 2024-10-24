
import { Icon } from "../../index";

/**
 * A component that renders the `dial` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial?s=sharp-solid dial}
 * @preview ![dial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dial.svg)
 */
const Dial: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 0l0 64-64 0 0-64 64 0zM128 64l0 64-64 0 0-64 64 0zm384 0l0 64-64 0 0-64 64 0zm0 192l64 0 0 64-64 0 0-64zm0 192l0 64-64 0 0-64 64 0zM64 448l64 0 0 64-64 0 0-64zM0 256l64 0 0 64L0 320l0-64zm175.1-81.8c56.7-56.7 145.4-62 208-15.7L271.3 270.4l-17 17 33.9 33.9 17-17L417.1 192.4c46.2 62.6 41 151.3-15.7 208c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3z" />
    </Icon>
);

export default Dial;
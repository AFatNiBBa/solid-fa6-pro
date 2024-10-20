
import { Icon } from "../../index";

/**
 * A component that renders the `indent` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/indent?s=sharp-light indent}
 * @preview ![indent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/indent.svg)
 */
const Indent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 48l16 0 416 0 16 0 0 32-16 0L16 80 0 80 0 48zM192 176l16 0 224 0 16 0 0 32-16 0-224 0-16 0 0-32zm16 128l224 0 16 0 0 32-16 0-224 0-16 0 0-32 16 0zM0 432l16 0 416 0 16 0 0 32-16 0L16 464 0 464l0-32zM116.7 236.3L144 256l-27.3 19.7L32 336.9 0 360l0-39.5L0 191.5 0 152l32 23.1 84.7 61.2zM32 214.6l0 82.8L89.3 256 32 214.6z" />
    </Icon>
);

export default Indent;
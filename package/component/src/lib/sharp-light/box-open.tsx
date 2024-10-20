
import { Icon } from "../../index";

/**
 * A component that renders the `box-open` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-open?s=sharp-light box-open}
 * @preview ![box-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/box-open.svg)
 */
const BoxOpen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M76.6 48.1L320 77.2 563.4 48.1l11.9-1.4 4.7 11 48 112 7.5 17.4-18.4 4.4-200 48-10.5 2.5-6.3-8.8L320 120.9 239.7 233.3l-6.3 8.8-10.5-2.5-200-48L4.5 187.1 12 169.7l48-112 4.7-11 11.9 1.4zM48.8 164.9l171.1 41.1L291.3 106 84.7 81.3 48.8 164.9zM544 239l32-8 0 185L320 480 64 416l0-185 32 8 0 152 208 52 0-219 32 0 0 219 208-52 0-152zM555.3 81.3L348.7 106l71.4 99.9 171.1-41.1L555.3 81.3z" />
    </Icon>
);

export default BoxOpen;
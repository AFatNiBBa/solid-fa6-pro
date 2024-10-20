
import { Icon } from "../../index";

/**
 * A component that renders the `pi` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pi?s=sharp-light pi}
 * @preview ![pi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pi.svg)
 */
const Pi: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 64L0 64 0 96l16 0 112 0 0 250.4L67.5 422l25 20 64-80 3.5-4.4 0-5.6 0-256 160 0 0 336 0 16 16 0 80 0 10.8 0 4-10.1 16-40-29.7-11.9-12 29.9L352 416l0-320 80 0 16 0 0-32-16 0L16 64z" />
    </Icon>
);

export default Pi;
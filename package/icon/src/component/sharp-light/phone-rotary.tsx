
import { Icon } from "../../index";

/**
 * A component that renders the `phone-rotary` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-rotary?s=sharp-light phone-rotary}
 * @preview ![phone-rotary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/phone-rotary.svg)
 */
const PhoneRotary: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 224l54.6 0 18.3-32L32 192l0-48.4c1.9-1.4 3.9-2.9 6.2-4.5c11.8-8.3 29.1-19.5 50.6-30.8C132.1 85.8 190.9 64 256 64s123.9 21.8 167.2 44.4c21.5 11.2 38.8 22.4 50.6 30.8c2.3 1.6 4.4 3.1 6.2 4.5l0 48.4-72.9 0 18.3 32 54.6 0 32 0 0-32 0-64s-112-96-256-96S0 128 0 128l0 64 0 32 32 0zm0 256l32 0 384 0 32 0 0-32 0-64L352 160l-32 0 0-32 0-16-32 0 0 16 0 32-64 0 0-32 0-16-32 0 0 16 0 32-32 0L32 384l0 64 0 32zM192 192l32 0 64 0 32 0 13.4 0L448 392.5l0 55.5L64 448l0-55.5L178.6 192l13.4 0zM304 320a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-48-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160z" />
    </Icon>
);

export default PhoneRotary;
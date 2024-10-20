
import { Icon } from "../../index";

/**
 * A component that renders the `phone-plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-plus?s=sharp-thin phone-plus}
 * @preview ![phone-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/phone-plus.svg)
 */
const PhonePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M480 512C232.6 512 32 311.4 32 64l0-32L176 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8L400 288l144 80L512 512l-32 0zM48 64s0 0 0 0c0 238.6 193.4 432 432 432l19.2 0 26.6-119.8L404 308.6l-58.6 73.2-8.3 10.3-11.7-6.2C254.2 348.3 195.7 289.8 158 218.5l-6.2-11.7 10.3-8.3L235.4 140 167.8 18.2 48 44.8 48 64zM448 16l0 8 0 80 80 0 8 0 0 16-8 0-80 0 0 80 0 8-16 0 0-8 0-80-80 0-8 0 0-16 8 0 80 0 0-80 0-8 16 0z" />
    </Icon>
);

export default PhonePlus;

import { Icon } from "../../index";

/**
 * A component that renders the `phone-volume` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-volume?s=sharp-thin phone-volume}
 * @preview ![phone-volume](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/phone-volume.svg)
 */
const PhoneVolume: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 512C200.6 512 0 311.4 0 64L0 32 144 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8L368 288l144 80L480 512l-32 0zM16 64s0 0 0 0c0 238.6 193.4 432 432 432l19.2 0 26.6-119.8L372 308.6l-58.6 73.2-8.3 10.3-11.7-6.2C222.2 348.3 163.7 289.8 126 218.5l-6.2-11.7 10.3-8.3L203.4 140 135.8 18.2 16 44.8 16 64zM256 16l0-16C397.4 0 512 114.6 512 256l-16 0C496 123.5 388.5 16 256 16zm48 208a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm144 32c0-79.5-64.5-144-144-144l0-16c88.4 0 160 71.6 160 160l-16 0z" />
    </Icon>
);

export default PhoneVolume;
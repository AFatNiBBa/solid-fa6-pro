
import { Icon } from "../../index";

/**
 * A component that renders the `phone-rotary` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-rotary?s=sharp-thin phone-rotary}
 * @preview ![phone-rotary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/phone-rotary.svg)
 */
const PhoneRotary: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 120c-80 0-128 24-128 24L96 224 0 224l0-96s96-96 256-96s256 96 256 96l0 96-96 0-32-80s-48-24-128-24zM115.4 132.4c13.6-6.8 27.7-11.8 42.4-15.8C181 110.2 214.4 104 256 104s75 6.2 98.2 12.6c14.6 4 28.8 9.1 42.4 15.8L426.8 208l69.2 0 0-73c-8.7-7.7-29.1-24.3-59.7-41C394.1 71 332.7 48 256 48S117.9 71 75.7 94c-30.6 16.7-51 33.3-59.7 41l0 73 69.2 0 30.2-75.6zM256 240a72 72 0 1 0 0 144 72 72 0 1 0 0-144zm56 72a56 56 0 1 1 -112 0 56 56 0 1 1 112 0zM32 480l0-96L160 160l192 0L480 384l0 96L32 480zm432-16l0-75.8L342.7 176l-173.4 0L48 388.2 48 464l416 0z" />
    </Icon>
);

export default PhoneRotary;
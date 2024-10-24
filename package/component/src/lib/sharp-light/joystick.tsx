
import { Icon } from "../../index";

/**
 * A component that renders the `joystick` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joystick?s=sharp-light joystick}
 * @preview ![joystick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/joystick.svg)
 */
const Joystick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 112a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm32 0c0 56.4-41.7 103.1-96 110.9l0 97.1-32 0 0-97.1c-54.3-7.8-96-54.4-96-110.9C112 50.1 162.1 0 224 0s112 50.1 112 112zM64 288l16 0 32 0 16 0 0 32-16 0-32 0-16 0 0-32zM416 480l0-96L32 384l0 96 384 0zM32 352l384 0 32 0 0 32 0 96 0 32-32 0L32 512 0 512l0-32 0-96 0-32 32 0zM208 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Joystick;
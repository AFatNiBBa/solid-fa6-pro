
import { Icon } from "../../index";

/**
 * A component that renders the `joystick` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joystick?s=sharp-thin joystick}
 * @preview ![joystick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/joystick.svg)
 */
const Joystick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M320 112a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm16 0c0 59.2-45.9 107.6-104 111.7L232 352l200 0 16 0 0 16 0 128 0 16-16 0L16 512 0 512l0-16L0 368l0-16 16 0 200 0 0-128.3c-58.1-4.1-104-52.6-104-111.7C112 50.1 162.1 0 224 0s112 50.1 112 112zM64 304l8 0 48 0 8 0 0 16-8 0-48 0-8 0 0-16zM432 496l0-128L16 368l0 128 416 0zM192 80a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
    </Icon>
);

export default Joystick;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `joystick` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joystick?s=duotone joystick}
 * @preview ![joystick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/joystick.svg)
 */
const Joystick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 352c0-17.7 14.3-32 32-32s32 14.3 32 32l-64 0zM192 219.4c5.1 1.5 10.3 2.7 15.6 3.5c2.7 .4 5.4 .7 8.1 .9s5.5 .3 8.3 .3c11.1 0 21.9-1.6 32-4.6L256 352l-64 0 0-132.6z" />
        <path d="M336 112a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM176 72a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64L64 352z" />
    </Icon>
);

export default Joystick;
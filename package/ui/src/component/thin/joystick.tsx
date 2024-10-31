
import { Icon } from "../../index";

/**
 * A component that renders the `joystick` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joystick?s=thin joystick}
 * @preview ![joystick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/joystick.svg)
 */
const Joystick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M320 112a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm16 0c0 59.2-45.9 107.6-104 111.7L232 352l152 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l152 0 0-128.3c-58.1-4.1-104-52.6-104-111.7C112 50.1 162.1 0 224 0s112 50.1 112 112zM64 312c0-4.4 3.6-8 8-8l48 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8zM432 416c0-26.5-21.5-48-48-48L64 368c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-32zM192 80a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
    </Icon>
);

export default Joystick;
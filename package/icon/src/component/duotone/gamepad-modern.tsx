
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gamepad-modern` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad-modern?s=duotone gamepad-modern}
 * @preview ![gamepad-modern](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gamepad-modern.svg)
 */
const GamepadModern: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 369.4c0-6.3 .5-12.5 1.6-18.7L34.3 159.8c8.6-50.2 40.9-93.2 90.3-105.5C170.5 42.9 236.2 32 320 32s149.5 10.9 195.3 22.3c49.4 12.3 81.7 55.3 90.3 105.5l32.7 190.9c1.1 6.2 1.6 12.4 1.6 18.7l0 2.8C640 431.7 591.7 480 532.2 480c-49.5 0-92.6-33.7-104.6-81.7L424 384l-208 0-3.6 14.3c-12 48-55.1 81.7-104.6 81.7C48.3 480 0 431.7 0 372.2l0-2.8zM112 224c0 13.3 10.7 24 24 24l32 0 0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-32c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 32-32 0c-13.3 0-24 10.7-24 24zm280 48a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm64-96a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
        <path d="M192 144c13.3 0 24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default GamepadModern;
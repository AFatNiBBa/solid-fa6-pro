
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad-modern` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad-modern?s=regular gamepad-modern}
 * @preview ![gamepad-modern](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/gamepad-modern.svg)
 */
const GamepadModern: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M216 336l208 0c22 0 41.2 15 46.6 36.4l3.6 14.3c6.7 26.6 30.6 45.3 58 45.3c33 0 59.8-26.8 59.8-59.8l0-2.8c0-3.5-.3-7.1-.9-10.6L558.4 168c-6.2-36-27.8-60.4-54.6-67.1C461.4 90.3 399.7 80 320 80s-141.5 10.3-183.7 20.9C109.4 107.6 87.8 132 81.6 168L48.9 358.8c-.6 3.5-.9 7-.9 10.6l0 2.8c0 33 26.8 59.8 59.8 59.8c27.4 0 51.4-18.7 58-45.3l3.6-14.3C174.8 351 194 336 216 336zm211.6 62.3L424 384l-208 0-3.6 14.3c-12 48-55.1 81.7-104.6 81.7C48.3 480 0 431.7 0 372.2l0-2.8c0-6.3 .5-12.5 1.6-18.7L34.3 159.8c8.6-50.2 40.9-93.2 90.3-105.5C170.5 42.9 236.2 32 320 32s149.5 10.9 195.3 22.3c49.4 12.3 81.7 55.3 90.3 105.5l32.7 190.9c1.1 6.2 1.6 12.4 1.6 18.7l0 2.8C640 431.7 591.7 480 532.2 480c-49.5 0-92.6-33.7-104.6-81.7zM232 168l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32c0-13.3 10.7-24 24-24s24 10.7 24 24zm168 72a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm32-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default GamepadModern;
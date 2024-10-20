
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flask-vial` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask-vial?s=duotone flask-vial}
 * @preview ![flask-vial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/flask-vial.svg)
 */
const FlaskVial: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32C0 49.7 14.3 64 32 64l0 288c0 53 43 96 96 96c11.2 0 22-1.9 32-5.5c0-18.7 5.2-37.1 15-53.1l49-79.6L224 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L160 0 96 0 32 0C14.3 0 0 14.3 0 32zM96 64l64 0 0 96-64 0 0-96z" />
        <path d="M480 0L352 0 320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 150.9L202.3 406.2c-6.7 10.9-10.3 23.5-10.3 36.4c0 38.3 31.1 69.4 69.4 69.4l309.2 0c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L512 214.9 512 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L480 0zM384 224l0-160 64 0 0 160c0 5.9 1.6 11.7 4.7 16.8L501.5 320l-171 0 48.8-79.2c3.1-5 4.7-10.8 4.7-16.8z" />
    </Icon>
);

export default FlaskVial;
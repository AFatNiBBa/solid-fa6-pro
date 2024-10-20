
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flask` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask?s=duotone flask}
 * @preview ![flask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/flask.svg)
 */
const Flask: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 442.6C0 480.9 31.1 512 69.4 512l309.2 0c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5L320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L288 0 160 0 128 0C110.3 0 96 14.3 96 32s14.3 32 32 32l0 132.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6zm64 0c0-1 .3-2 .8-2.8c24.6-39.9 49.1-79.8 73.7-119.8c11.5-18.7 23-37.4 34.5-56.1c12.4-20.2 19-43.4 19-67.1L192 64l64 0 0 132.8c0 23.7 6.6 46.9 19 67.1c11.5 18.7 23 37.4 34.5 56.1l73.7 119.8c.5 .9 .8 1.8 .8 2.8c0 3-2.4 5.4-5.4 5.4L69.4 448c-3 0-5.4-2.4-5.4-5.4z" />
        <path d="M309.5 320l-171 0L64.8 439.8c-.5 .9-.8 1.8-.8 2.8c0 3 2.4 5.4 5.4 5.4l309.2 0c3 0 5.4-2.4 5.4-5.4c0-1-.3-2-.8-2.8L309.5 320z" />
    </Icon>
);

export default Flask;
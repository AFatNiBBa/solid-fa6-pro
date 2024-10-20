
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-seat-reclined` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-seat-reclined?s=duotone person-seat-reclined}
 * @preview ![person-seat-reclined](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-seat-reclined.svg)
 */
const PersonSeatReclined: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32.5 165.9L65.9 343.6C77.2 404.1 130.1 448 191.7 448l80.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80.3 0c-30.8 0-57.2-21.9-62.9-52.2L95.5 154.1C92.6 138.7 79.1 128 64 128c-2 0-3.9 .2-5.9 .6c-17.4 3.3-28.8 20-25.6 37.3z" />
        <path d="M128 80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM257 256l8 32 53.8 0c33.3 0 63.2 20.7 74.9 51.9l25.5 68 18.7-6.2c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5l-48 16c-16.3 5.4-34-3-40.1-19.1l-36.3-96.9c-2.3-6.2-8.3-10.4-15-10.4l-78.1 0c-.5 0-.9 0-1.4 0l-6.3 0c-29.4 0-55-20-62.1-48.5L149.8 219c-7.5-30 15.2-59 46.1-59c20.4 0 38.4 13 44.9 32l79.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-63 0z" />
    </Icon>
);

export default PersonSeatReclined;
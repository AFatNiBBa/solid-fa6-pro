
import { Icon, generic } from "../../index";

/**
 * A component that renders the `croissant` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/croissant?s=duotone croissant}
 * @preview ![croissant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/croissant.svg)
 */
const Croissant: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288c0 52.3 14 101.4 38.4 143.7c6.5 11.3 18 16.9 29.9 16.9c8.3 0 16.8-2.8 24-8.3L233 330.8c-4.1-.4-8.3-1.2-12.4-2.4L20.9 268.5c-7-2.1-13.6-5.2-19.5-9.1C.5 268.8 0 278.3 0 288zM259.4 1.4c3.9 5.9 7 12.5 9.1 19.5l59.9 199.7c1.2 4.1 2 8.2 2.4 12.4L440.3 92.2c5.6-7.2 8.3-15.7 8.3-24c0-11.9-5.7-23.4-16.9-29.9C389.4 14 340.3 0 288 0c-9.7 0-19.2 .5-28.6 1.4z" />
        <path d="M232.7 19s0 0 0 0s0 0 0 0c2 3 3.6 6.4 4.8 10c-1.2-3.6-2.8-6.9-4.8-10zm235.8 88.8c17.2 20.5 31.2 43.8 41.3 69c1.5 3.9 2.3 8 2.3 12.2l0 5.4c0 16.3-13.2 29.6-29.6 29.6c-1.6 0-3.3-.1-4.9-.4L390 209l75.6-97.1c1-1.3 2-2.6 2.9-4zM223.6 477.6c.3 1.6 .4 3.2 .4 4.9c0 16.3-13.2 29.6-29.6 29.6l-5.4 0c-4.2 0-8.3-.7-12.2-2.3c-25.2-10.1-48.5-24.1-69-41.3c1.4-.9 2.7-1.9 4-2.9L209 390l14.6 87.6zM19 232.7s0 0 0 0s0 0 0 0C7.4 225 0 211.8 0 197.4c0-4.6 .7-9.2 2.3-13.5C33 99.7 99.7 33 183.9 2.3C188.2 .7 192.8 0 197.4 0c18.7 0 35.1 12.2 40.5 30.1l59.9 199.7c3.4 11.3 .3 23.5-8 31.8l-28.1 28.1c-8.3 8.3-20.5 11.4-31.8 8L30.1 237.8c-1.3-.4-2.6-.8-3.8-1.3c-2.6-1-5-2.3-7.3-3.8z" />
    </Icon>
);

export default Croissant;
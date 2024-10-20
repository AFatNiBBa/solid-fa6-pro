
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-keyhole` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-keyhole?s=duotone shield-keyhole}
 * @preview ![shield-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shield-keyhole.svg)
 */
const ShieldKeyhole: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 139.7c.5 99.5 41.3 281 213.6 363.5c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c0-26.4-16.4-47.9-38.3-57.2L269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8C32.4 92.1 16 113.6 16 139.7zM200 208c0-30.9 25.1-56 56-56c15.5 0 29.5 6.3 39.6 16.4c5.1 5.1 9.2 11.1 12 17.8c1.4 3.3 2.5 6.9 3.3 10.5c.4 1.9 .7 3.8 .9 5.7c.1 .9 .2 1.9 .2 2.8c0 .9 .1 1.8 .1 2.9l0 .6c0 .4 0 1 0 1.7c0 .6-.1 1.2-.1 1.8c-.1 1.3-.3 2.7-.4 4.1c-.4 2.7-1 5.3-1.7 7.8c-1.5 5.1-3.7 9.9-6.6 14.2c-5.6 8.7-13.6 15.8-23.1 20.3c0 23.1 0 46.3 0 69.4l0 .4c0 .5 0 1.3-.1 2.1c-.1 .8-.2 1.6-.4 2.4c-.3 1.5-.8 3.1-1.4 4.5c-1.2 2.9-3 5.4-5.1 7.6c-4.3 4.3-10.3 7-17 7c-13.3 0-24-10.7-24-24c0-23.1 0-46.3 0-69.4c-18.9-9-32-28.3-32-50.6z" />
        <path d="M280 258.6c18.9-9 32-28.3 32-50.6c0-30.9-25.1-56-56-56s-56 25.1-56 56c0 22.3 13.1 41.6 32 50.6l0 69.4c0 13.3 10.7 24 24 24s24-10.7 24-24l0-69.4z" />
    </Icon>
);

export default ShieldKeyhole;
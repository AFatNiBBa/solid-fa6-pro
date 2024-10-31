
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-cat` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-cat?s=duotone shield-cat}
 * @preview ![shield-cat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shield-cat.svg)
 */
const ShieldCat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 139.7c.5 99.5 41.3 281 213.6 363.5c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c0-26.4-16.4-47.9-38.3-57.2L269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8C32.4 92.1 16 113.6 16 139.7zm144 14.7c0-5.8 4.7-10.4 10.7-10.4c3.4 0 6.5 1.6 8.5 4.3l40 53.3c3 4 7.8 6.4 12.8 6.4l48 0c5 0 9.8-2.4 12.8-6.4c13.3-17.8 26.7-35.6 40-53.3c2-2.7 5.2-4.3 8.8-4.3c2.9 0 5.5 1.2 7.4 3.1c.9 .9 1.7 2.1 2.2 3.3c.3 .6 .5 1.3 .6 2c.1 .3 .1 .7 .2 1s0 .6 .1 1.1c0 39.2 0 78.4 0 117.9c0 1.6-.1 3.3-.1 4.9c-.1 1.5-.2 3.1-.4 4.7c-.3 3.2-.8 6.4-1.5 9.5c-1.3 6.2-3.2 12.3-5.6 18c-4.9 11.5-11.9 21.8-20.6 30.5C306.5 357.3 282.5 368 256 368c-53 0-96-43-96-96c0-39.2 0-78.4 0-117.6z" />
        <path d="M160 272l0-117.6c0-5.8 4.7-10.4 10.4-10.4l.2 0c3.4 0 6.5 1.6 8.5 4.3l40 53.3c3 4 7.8 6.4 12.8 6.4l48 0c5 0 9.8-2.4 12.8-6.4l40-53.3c2-2.7 5.2-4.3 8.5-4.3l.2 0c5.8 0 10.4 4.7 10.4 10.4L352 272c0 53-43 96-96 96s-96-43-96-96zm72 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm64 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default ShieldCat;
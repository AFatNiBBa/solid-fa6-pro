
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flower-tulip` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flower-tulip?s=duotone flower-tulip}
 * @preview ![flower-tulip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/flower-tulip.svg)
 */
const FlowerTulip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 349.5C0 439.3 72.7 512 162.5 512l61.5 0 32 0 32 0 61.5 0C439.3 512 512 439.3 512 349.5c0-16.3-13.2-29.5-29.5-29.5L432 320c-59.5 0-112.1 29.5-144 74.8L288 256l-64 0 0 138.8C192.1 349.5 139.5 320 80 320l-50.5 0C13.2 320 0 333.2 0 349.5z" />
        <path d="M96 128V44c0-6.6 5.4-12 12-12c2.6 0 5.1 .8 7.2 2.4L176 80 243.2 5.3c3-3.4 7.4-5.3 11.9-5.3h1.7c4.5 0 8.9 1.9 11.9 5.3L336 80l60.8-45.6c2.1-1.6 4.6-2.4 7.2-2.4c6.6 0 12 5.4 12 12v84c0 70.7-57.3 128-128 128H224c-70.7 0-128-57.3-128-128z" />
    </Icon>
);

export default FlowerTulip;
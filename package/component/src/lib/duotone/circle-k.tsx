
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-k` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-k?s=duotone circle-k}
 * @preview ![circle-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-k.svg)
 */
const CircleK: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 87.8L310.9 135.2c4.7-4.8 10.9-7.2 17.1-7.2c6.1 0 12.1 2.3 16.8 6.9c9.5 9.3 9.6 24.5 .3 33.9l-73.1 74.3 75.3 102.7c7.8 10.7 5.5 25.7-5.2 33.5c-4.3 3.1-9.2 4.6-14.2 4.6c-7.4 0-14.7-3.4-19.4-9.8L238 277.8l-30 30.5 0 51.7c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-61.5L160 152z" />
        <path d="M344.8 134.9c9.5 9.3 9.6 24.5 .3 33.9l-73.1 74.3 75.3 102.7c7.8 10.7 5.5 25.7-5.2 33.5s-25.7 5.5-33.5-5.2L238 277.8l-30 30.5 0 51.7c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-61.5L160 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 87.8L310.9 135.2c9.3-9.5 24.5-9.6 33.9-.3z" />
    </Icon>
);

export default CircleK;
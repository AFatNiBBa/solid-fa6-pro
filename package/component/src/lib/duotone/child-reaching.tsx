
import { Icon, generic } from "../../index";

/**
 * A component that renders the `child-reaching` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child-reaching?s=duotone child-reaching}
 * @preview ![child-reaching](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/child-reaching.svg)
 */
const ChildReaching: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M128 64a64 64 0 1 0 128 0A64 64 0 1 0 128 64z" />
        <path d="M155.7 170.2c11.7 3.8 24 5.8 36.6 5.8c39.9 0 77.1-20.2 98.8-53.6l18.1-27.9c9.6-14.8 29.5-19 44.3-9.4s19 29.5 9.4 44.3l-18.2 27.9c-18.2 28-43.5 50-72.7 64.2L272 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-258.6C83.6 207.4 58.9 186.1 40.9 159L21.4 129.8c-9.8-14.7-5.8-34.6 8.9-44.4s34.6-5.8 44.4 8.9l19.5 29.2c14.3 21.5 35.1 37.4 58.8 45.8c.9 .3 1.8 .6 2.7 .9z" />
    </Icon>
);

export default ChildReaching;
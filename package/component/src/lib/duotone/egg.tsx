
import { Icon, generic } from "../../index";

/**
 * A component that renders the `egg` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/egg?s=duotone egg}
 * @preview ![egg](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/egg.svg)
 */
const Egg: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 288C0 394 86 496 192 496s192-102 192-208c0-112-64-272-192-272S0 176 0 288zm64 0c0-28.3 5.7-61.9 16.9-93.5c11.2-31.5 28.4-62.4 52.3-84.2c6.5-6 16.7-5.5 22.6 1c2.8 3.1 4.2 6.9 4.2 10.8c0 4.3-1.8 8.7-5.2 11.8c-18.8 17.1-33.6 42.7-43.7 71.2C101 233.6 96 263.5 96 288c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
        <path d="M155.8 111.4c6 6.5 5.5 16.7-1 22.6c-18.8 17.1-33.6 42.7-43.7 71.2C101 233.6 96 263.5 96 288c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-28.3 5.7-61.9 16.9-93.5c11.2-31.5 28.4-62.4 52.3-84.2c6.5-6 16.7-5.5 22.6 1z" />
    </Icon>
);

export default Egg;
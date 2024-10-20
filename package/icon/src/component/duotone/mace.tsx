
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mace` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mace?s=duotone mace}
 * @preview ![mace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mace.svg)
 */
const Mace: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480c0 8.2 3.1 16.4 9.4 22.6s14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L217.1 340.1c-18.4-11.3-34-26.8-45.3-45.3L9.4 457.4C3.1 463.6 0 471.8 0 480z" />
        <path d="M272.8 10.9L244.8 95c-40.4 13.5-72.3 45.4-85.8 85.8l-84.1 28C68.4 211 64 217.1 64 224s4.4 13 10.9 15.2l84.1 28c13.5 40.4 45.4 72.3 85.8 85.8l28 84.1c2.2 6.5 8.3 10.9 15.2 10.9s13-4.4 15.2-10.9l28-84.1c40.4-13.5 72.3-45.4 85.8-85.8l84.1-28c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-84.1-28c-13.5-40.4-45.4-72.3-85.8-85.8l-28-84.1C301 4.4 294.9 0 288 0s-13 4.4-15.2 10.9zM288 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Mace;
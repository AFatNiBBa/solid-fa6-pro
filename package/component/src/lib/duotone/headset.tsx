
import { Icon, generic } from "../../index";

/**
 * A component that renders the `headset` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headset?s=duotone headset}
 * @preview ![headset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/headset.svg)
 */
const Headset: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40C48 141.1 141.1 48 256 48s208 93.1 208 208l0 144.1c0 22.1-17.9 40-40 40L313.6 440c-8.3-14.4-23.8-24-41.6-24l-32 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l32 0c17.8 0 33.3-9.7 41.6-24l110.4 .1c48.6 0 88.1-39.4 88.1-88L512 256C512 114.6 397.4 0 256 0S0 114.6 0 256z" />
        <path d="M144 208c-35.3 0-64 28.7-64 64l0 48c0 35.3 28.7 64 64 64l16 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32l-16 0zm224 0l-16 0c-17.7 0-32 14.3-32 32l0 112c0 17.7 14.3 32 32 32l16 0c35.3 0 64-28.7 64-64l0-48c0-35.3-28.7-64-64-64z" />
    </Icon>
);

export default Headset;
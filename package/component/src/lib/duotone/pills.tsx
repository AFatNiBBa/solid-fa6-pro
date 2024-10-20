
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pills` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pills?s=duotone pills}
 * @preview ![pills](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pills.svg)
 */
const Pills: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 144l0 80 0 32 32 0 160 0 32 0 0-32 0-80c0-61.9-50.1-112-112-112S0 82.1 0 144zM256 320c0 88.4 71.6 160 160 160c28.9 0 56-7.7 79.4-21.1c12.3-7.1 13.1-23.7 3.1-33.8L310.9 237.5c-10-10-26.7-9.3-33.8 3.1C263.7 264 256 291.1 256 320zm77.5-105.1L521.1 402.5c10 10 26.7 9.3 33.8-3.1C568.3 376 576 348.9 576 320c0-88.4-71.6-160-160-160c-28.9 0-56 7.7-79.4 21.1c-12.3 7.1-13.1 23.7-3.1 33.8z" />
        <path d="M32 256L0 256l0 32 0 80c0 61.9 50.1 112 112 112s112-50.1 112-112l0-80 0-32-32 0L32 256z" />
    </Icon>
);

export default Pills;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed-pulse` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-pulse?s=duotone bed-pulse}
 * @preview ![bed-pulse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bed-pulse.svg)
 */
const BedPulse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 240a80 80 0 1 0 160 0A80 80 0 1 0 96 240zm192-48l0 128 0 32 32 0 288 0 32 0 0-32 0-64c0-53-43-96-96-96l-82.1 0-11.2 23.8c-8.6 18.3-26.4 30.5-46.5 32s-39.5-8-50.7-24.8L332.7 160 320 160c-17.7 0-32 14.3-32 32z" />
        <path d="M483.2 9.6C478.1 2.9 469.9-.7 461.6 .1s-15.7 6-19.3 13.7l-45.9 97.5L372 74.7C367.5 68 360 64 352 64L216 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l123.2 0L380 173.3c4.8 7.2 13.1 11.3 21.7 10.6s16.3-5.9 19.9-13.7l47-99.9 24.1 32.1c4.5 6 11.6 9.6 19.2 9.6l104 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-92 0L483.2 9.6zM64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 512 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 0-32-32 0L64 352 64 96z" />
    </Icon>
);

export default BedPulse;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-turn-to-dots` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-turn-to-dots?s=duotone arrows-turn-to-dots}
 * @preview ![arrows-turn-to-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-turn-to-dots.svg)
 */
const ArrowsTurnToDots: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-17.7 14.3-32 32-32l146.7 0-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c12.5-12.5 12.5-32.8 0-45.3l-80-80c-6.2-6.2-14.4-9.4-22.6-9.4s-16.4 3.1-22.6 9.4c-12.5 12.5-12.5 32.8 0 45.3L242.7 352 96 352c-53 0-96 43-96 96zm384-64a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M249.4 25.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L269.3 96 416 96c53 0 96 43 96 96l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7-14.3-32-32-32l-146.7 0 25.4 25.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-80-80c-12.5-12.5-12.5-32.8 0-45.3l80-80zM64 192A64 64 0 1 1 64 64a64 64 0 1 1 0 128z" />
    </Icon>
);

export default ArrowsTurnToDots;
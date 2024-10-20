
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-to-bracket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-bracket?s=duotone up-to-bracket}
 * @preview ![up-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/up-to-bracket.svg)
 */
const UpToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-53-43-96-96-96L96 0C43 0 0 43 0 96z" />
        <path d="M196.7 171.3L73.9 294.1c-6.4 6.4-9.9 15-9.9 24C64 336.8 79.2 352 97.9 352l62.1 0 0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 62.1 0c18.7 0 33.9-15.2 33.9-33.9c0-9-3.6-17.6-9.9-24L251.3 171.3c-7.2-7.2-17.1-11.3-27.3-11.3s-20.1 4.1-27.3 11.3z" />
    </Icon>
);

export default UpToBracket;
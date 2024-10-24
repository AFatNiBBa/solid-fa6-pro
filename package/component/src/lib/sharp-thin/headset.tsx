
import { Icon } from "../../index";

/**
 * A component that renders the `headset` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headset?s=sharp-thin headset}
 * @preview ![headset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/headset.svg)
 */
const Headset: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16s240 107.5 240 240l0 200.1L320 456l0-24 0-16-16 0-64 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l64 0 16 0 0-16 0-24 184 .1 8 0 0-8L512 256C512 114.6 397.4 0 256 0S0 114.6 0 256l0 56 0 8 16 0 0-8 0-56zM304 464l0 8s0 0 0 0l0 24-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 0 32zM80 208l80 0 0 160-80 0 0-160zM64 192l0 16 0 160 0 16 16 0 80 0 16 0 0-16 0-160 0-16-16 0-80 0-16 0zm368 16l0 160-80 0 0-160 80 0zm16-16l-16 0-80 0-16 0 0 16 0 160 0 16 16 0 80 0 16 0 0-16 0-160 0-16z" />
    </Icon>
);

export default Headset;
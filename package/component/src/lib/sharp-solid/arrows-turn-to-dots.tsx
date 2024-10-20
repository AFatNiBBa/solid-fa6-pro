
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-turn-to-dots` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-turn-to-dots?s=sharp-solid arrows-turn-to-dots}
 * @preview ![arrows-turn-to-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrows-turn-to-dots.svg)
 */
const ArrowsTurnToDots: typeof Icon = x => (
    <Icon {...x}>
        <path d="M265.4 25.4L288 2.7 333.3 48 310.6 70.6 285.3 96 480 96l32 0 0 32 0 96 0 32-64 0 0-32 0-64-162.7 0 25.4 25.4L333.3 208 288 253.3l-22.6-22.6-80-80L162.7 128l22.6-22.6 80-80zm-18.7 256l80 80L349.3 384l-22.6 22.6-80 80L224 509.3 178.7 464l22.6-22.6L226.7 416 64 416l0 64 0 32L0 512l0-32 0-96 0-32 32 0 194.7 0-25.4-25.4L178.7 304 224 258.7l22.6 22.6zM384 384a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM64 192A64 64 0 1 1 64 64a64 64 0 1 1 0 128z" />
    </Icon>
);

export default ArrowsTurnToDots;
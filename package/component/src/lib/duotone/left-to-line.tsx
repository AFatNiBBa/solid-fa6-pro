
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-to-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-line?s=duotone left-to-line}
 * @preview ![left-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/left-to-line.svg)
 */
const LeftToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32L64 96c0-17.7-14.3-32-32-32S0 78.3 0 96z" />
        <path d="M107.3 283.3L230.1 406.1c6.4 6.4 15 9.9 24 9.9c18.7 0 33.9-15.2 33.9-33.9l0-62.1 128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0 0-62.1c0-18.7-15.2-33.9-33.9-33.9c-9 0-17.6 3.6-24 9.9L107.3 228.7C100.1 235.9 96 245.8 96 256s4.1 20.1 11.3 27.3z" />
    </Icon>
);

export default LeftToLine;
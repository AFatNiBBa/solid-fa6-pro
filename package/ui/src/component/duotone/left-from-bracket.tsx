
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-from-bracket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-from-bracket?s=duotone left-from-bracket}
 * @preview ![left-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/left-from-bracket.svg)
 */
const LeftFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32z" />
        <path d="M11.3 283.3L134.1 406.1c6.4 6.4 15 9.9 24 9.9c18.7 0 33.9-15.2 33.9-33.9l0-62.1 128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0 0-62.1c0-18.7-15.2-33.9-33.9-33.9c-9 0-17.6 3.6-24 9.9L11.3 228.7C4.1 235.9 0 245.8 0 256s4.1 20.1 11.3 27.3z" />
    </Icon>
);

export default LeftFromBracket;
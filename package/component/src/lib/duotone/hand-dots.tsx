
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-dots` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-dots?s=duotone hand-dots}
 * @preview ![hand-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-dots.svg)
 */
const HandDots: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 312c0 10.6 4.2 21.1 12.4 29L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 272c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4C3.7 292.2 0 302.1 0 312zm208 88a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64-64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64-64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm32 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm32-96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M304 368a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm32 64a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM192 384a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default HandDots;
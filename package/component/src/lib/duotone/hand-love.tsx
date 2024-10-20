
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-love` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-love?s=duotone hand-love}
 * @preview ![hand-love](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-love.svg)
 */
const HandLove: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M11 284.4c-15.2 16-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-240c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128 0 64c0 35.3-28.7 64-64 64c-19.1 0-36.3-8.4-48-21.7c-11.7 13.3-28.9 21.7-48 21.7c-35.3 0-64-28.7-64-64l0-96 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 304c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4z" />
        <path d="M256 160c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32zm96 32c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default HandLove;
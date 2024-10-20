
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crosshairs-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs-simple?s=duotone crosshairs-simple}
 * @preview ![crosshairs-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/crosshairs-simple.svg)
 */
const CrosshairsSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm64 0c0-10.9 .9-21.6 2.7-32C80.1 143.6 143.6 80.1 224 66.7c10.4-1.7 21.1-2.7 32-2.7s21.6 .9 32 2.7C368.4 80.1 431.9 143.6 445.3 224c1.7 10.4 2.7 21.1 2.7 32s-.9 21.6-2.7 32C431.9 368.4 368.4 431.9 288 445.3c-10.4 1.7-21.1 2.7-32 2.7s-21.6-.9-32-2.7C143.6 431.9 80.1 368.4 66.7 288c-1.7-10.4-2.7-21.1-2.7-32z" />
        <path d="M288 66.7c-10.4-1.7-21.1-2.7-32-2.7s-21.6 .9-32 2.7l0 61.3c0 17.7 14.3 32 32 32s32-14.3 32-32l0-61.3zM66.7 288l61.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-61.3 0c-1.7 10.4-2.7 21.1-2.7 32s.9 21.6 2.7 32zM224 445.3c10.4 1.7 21.1 2.7 32 2.7s21.6-.9 32-2.7l0-61.3c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 61.3zM445.3 224L384 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l61.3 0c1.7-10.4 2.7-21.1 2.7-32s-.9-21.6-2.7-32z" />
    </Icon>
);

export default CrosshairsSimple;
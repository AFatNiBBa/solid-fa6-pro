
import { Icon, generic } from "../../index";

/**
 * A component that renders the `puzzle-piece` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle-piece?s=sharp-duotone-solid puzzle-piece}
 * @preview ![puzzle-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/puzzle-piece.svg)
 */
const PuzzlePiece: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 89.6c-19.1-8.3-32-23.8-32-41.6c0-26.5 28.7-48 64-48s64 21.5 64 48c0 17.8-12.9 33.3-32 41.6l0 38.4 128 0 0 128 38.4 0c8.3-19.1 23.8-32 41.6-32c26.5 0 48 28.7 48 64s-21.5 64-48 64c-17.8 0-33.3-12.9-41.6-32L384 320l0 192-128 0 0-38.4c19.1-8.3 32-23.8 32-41.6c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 17.8 12.9 33.3 32 41.6l0 38.4L0 512 0 320l38.4 0c8.3 19.1 23.8 32 41.6 32c26.5 0 48-28.7 48-64s-21.5-64-48-64c-17.8 0-33.3 12.9-41.6 32L0 256 0 128l192 0 0-38.4z" />
    </Icon>
);

export default PuzzlePiece;
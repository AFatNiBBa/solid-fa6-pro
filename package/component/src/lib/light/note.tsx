
import { Icon } from "../../index";

/**
 * A component that renders the `note` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note?s=light note}
 * @preview ![note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/note.svg)
 */
const Note: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 64c17.7 0 32 14.3 32 32l0 208-96 0c-26.5 0-48 21.5-48 48l0 96L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l320 0zm18.7 272L304 434.7l0-82.7c0-8.8 7.2-16 16-16l82.7 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l213.5 0c17 0 33.3-6.7 45.3-18.7L429.3 354.7c12-12 18.7-28.3 18.7-45.3L448 96c0-35.3-28.7-64-64-64L64 32zm64 344a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM104 112a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm24 144a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Note;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `note` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note?s=duotone note}
 * @preview ![note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/note.svg)
 */
const Note: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 224-128 0c-17.7 0-32 14.3-32 32l0 128L64 480c-35.3 0-64-28.7-64-64L0 96zm64 32a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 128a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 128a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M288 352V480h5.5c17 0 33.3-6.7 45.3-18.7l90.5-90.5c12-12 18.7-28.3 18.7-45.3V320H320c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default Note;
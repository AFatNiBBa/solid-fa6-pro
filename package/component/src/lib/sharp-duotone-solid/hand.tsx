
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand?s=sharp-duotone-solid hand}
 * @preview ![hand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand.svg)
 */
const Hand: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.3 329.4l29 27.6 95.5 91c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208 0-32-64 0 0 32 0 128-32 0 0-192 0-32-64 0 0 32 0 192-32 0 0-224 0-32L224 0l0 32 0 224-32 0 0-192 0-32-64 0 0 32 0 272c0 1.5 0 3.1 .1 4.6L84.5 299.1l-29-27.6L.3 329.4zM192 320l16 0 8 0 152 0 16 0 0 32-16 0-77 0c17.9 18.7 29 44.1 29 72l0 8 0 16-32 0 0-16 0-8c0-39.8-32.2-72-72-72l-8 0-16 0 0-32z" />
        <path d="M208 320l-16 0 0 32 16 0 8 0c39.8 0 72 32.2 72 72l0 8 0 16 32 0 0-16 0-8c0-27.9-11-53.3-29-72l77 0 16 0 0-32-16 0-152 0-8 0z" />
    </Icon>
);

export default Hand;
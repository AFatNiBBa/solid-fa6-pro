
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bug-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bug-slash?s=sharp-duotone-solid bug-slash}
 * @preview ![bug-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bug-slash.svg)
 */
const BugSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 256l0 64 32 0 64 0c0 24.2 5.4 47.2 15 67.7l-53.6 53.6L98.7 464 144 509.3l22.6-22.6 47.1-47.1c24.5 21.8 55.8 36.2 90.3 39.6l0-143.7L160 222.1l0 33.9-64 0-32 0zM224 96l0 32 192 0 0-32c0-53-43-96-96-96s-96 43-96 96zm11.4 64L477.6 348c1.6-9.1 2.4-18.4 2.4-28l64 0 32 0 0-64-32 0-64 0 0-50.7 54.6-54.6L557.3 128 512 82.7l-22.6 22.6L434.7 160l-199.3 0zM336 360.7l0 118.5c36.6-3.6 69.7-19.6 94.8-43.8L336 360.7z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default BugSlash;
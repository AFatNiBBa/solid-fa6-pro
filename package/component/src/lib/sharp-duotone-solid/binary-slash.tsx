
import { Icon, generic } from "../../index";

/**
 * A component that renders the `binary-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary-slash?s=sharp-duotone-solid binary-slash}
 * @preview ![binary-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/binary-slash.svg)
 */
const BinarySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 0l0 32 0 44.6c21.3 16.6 42.7 33.1 64 49.7L192 64l64 0 0 96-20.6 0 82.4 64 2.1 0 0-32 0-160 0-32L288 0 160 0 128 0zm0 288l0 64 32 0 16 0 0 96-16 0-32 0 0 64 32 0 48 0 48 0 32 0 0-64-32 0-16 0 0-128 0-32-32 0-48 0-32 0zm32-65.9l0 1.9 2.5 0-2.5-1.9zM320 348.1L320 480l0 32 32 0 128 0 32 0 0-12.6L446.8 448 384 448l0-49.5-64-50.4zM352 0l0 64 32 0 16 0 0 96-16 0-32 0 0 64 32 0 48 0 48 0 32 0 0-64-32 0-16 0 0-128 0-32L432 0 384 0 352 0zm48.3 288c37.2 28.9 74.5 57.8 111.7 86.7l0-54.7 0-32-32 0-79.7 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default BinarySlash;
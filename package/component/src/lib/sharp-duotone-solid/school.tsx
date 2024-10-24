
import { Icon, generic } from "../../index";

/**
 * A component that renders the `school` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school?s=sharp-duotone-solid school}
 * @preview ![school](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/school.svg)
 */
const School: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 512l256 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 256 0 0-416L480 96 320 0 160 96 0 96zm80 96c21.3 0 42.7 0 64 0l0 96c-21.3 0-42.7 0-64 0l0-96zm0 128l64 0 0 96-64 0 0-96zM408 176a88 88 0 1 1 -176 0 88 88 0 1 1 176 0zm88 16c21.3 0 42.7 0 64 0l0 96c-21.3 0-42.7 0-64 0l0-96zm0 128l64 0 0 96-64 0 0-96z" />
        <path d="M336 144l0 16 16 0 16 0 0 32-16 0-32 0-16 0 0-16 0-32 0-16 32 0 0 16zM80 192l64 0 0 96-64 0 0-96zm416 0l64 0 0 96-64 0 0-96zM144 320l0 96-64 0 0-96 64 0zm352 0l64 0 0 96-64 0 0-96z" />
    </Icon>
);

export default School;
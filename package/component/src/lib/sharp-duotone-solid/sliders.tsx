
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sliders` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sliders?s=sharp-duotone-solid sliders}
 * @preview ![sliders](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sliders.svg)
 */
const Sliders: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64l0 64 32 0 64 0 0-64L32 64 0 64zM0 224l0 64 32 0 256 0 0-64L32 224 0 224zM0 384l0 64 32 0 32 0 0-64-32 0L0 384zm224 0l0 64 256 0 32 0 0-64-32 0-256 0zM256 64l0 64 224 0 32 0 0-64-32 0L256 64zM448 224l0 64 32 0 32 0 0-64-32 0-32 0z" />
        <path d="M112 384l64 0 0 64-64 0 0-64zM64 448l0 48 48 0 64 0 48 0 0-48 0-64 0-48-48 0-64 0-48 0 0 48 0 64zM336 224l64 0 0 64-64 0 0-64zm-48 64l0 48 48 0 64 0 48 0 0-48 0-64 0-48-48 0-64 0-48 0 0 48 0 64zM144 128l0-64 64 0 0 64-64 0zM96 176l48 0 64 0 48 0 0-48 0-64 0-48-48 0-64 0L96 16l0 48 0 64 0 48z" />
    </Icon>
);

export default Sliders;
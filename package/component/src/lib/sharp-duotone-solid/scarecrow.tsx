
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scarecrow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scarecrow?s=sharp-duotone-solid scarecrow}
 * @preview ![scarecrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/scarecrow.svg)
 */
const Scarecrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 96c0 11.2 1.9 22 5.5 32c13.2 37.3 48.7 64 90.5 64s77.4-26.7 90.5-64c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96zm80-16a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM192 400l0 80 0 32 64 0 0-32 0-80-32 16-32-16zM272 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M133.5 128L16 128l16 32L0 192l32 32L16 256l112 0L96 416l64-32 64 32 64-32 64 32L320 256l112 0-16-32 32-32-32-32 16-32-117.5 0c-13.2 37.3-48.7 64-90.5 64s-77.4-26.7-90.5-64z" />
    </Icon>
);

export default Scarecrow;
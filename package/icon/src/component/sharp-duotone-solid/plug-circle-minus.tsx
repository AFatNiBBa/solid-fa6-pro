
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plug-circle-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug-circle-minus?s=sharp-duotone-solid plug-circle-minus}
 * @preview ![plug-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plug-circle-minus.svg)
 */
const PlugCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l32 0 320 0 32 0 0 38.6C310.1 219.5 256 287.4 256 368c0 11.4 1.1 22.5 3.1 33.3c-11.1 5.1-22.9 9-35.1 11.5l0 99.2-64 0 0-99.2C87 398 32 333.4 32 256l0-32L0 224l0-64zM64 0l64 0 0 32 0 96-64 0 0-96L64 0zM256 0l64 0 0 32 0 96-64 0 0-96 0-32z" />
        <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm64-128l-128 0-16 0 0-32 16 0 128 0 16 0 0 32-16 0z" />
    </Icon>
);

export default PlugCircleMinus;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-lean-canvas` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-lean-canvas?s=duotone diagram-lean-canvas}
 * @preview ![diagram-lean-canvas](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/diagram-lean-canvas.svg)
 */
const DiagramLeanCanvas: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 96l0 208 64 0 0-208L64 96zm448 0l0 208 64 0 0-208-64 0z" />
        <path d="M512 96l0 208 64 0 0-208-64 0zm-48 0l-64 0 0 80 64 0 0-80zM352 96l-64 0 0 208 64 0 0-208zM240 96l-64 0 0 80 64 0 0-80zM128 96L64 96l0 208 64 0 0-208zM64 352l0 64 232 0 0-64L64 352zm280 64l232 0 0-64-232 0 0 64zM0 96C0 60.7 28.7 32 64 32l512 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM240 304l0-80-64 0 0 80 64 0zm224-80l-64 0 0 80 64 0 0-80z" />
    </Icon>
);

export default DiagramLeanCanvas;
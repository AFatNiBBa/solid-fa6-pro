
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-lean-canvas` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-lean-canvas?s=sharp-light diagram-lean-canvas}
 * @preview ![diagram-lean-canvas](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/diagram-lean-canvas.svg)
 */
const DiagramLeanCanvas: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 64l0 256 96 0 0-256-96 0zm-32 0l-96 0 0 128 96 0 0-128zM352 64l-64 0 0 256 64 0 0-256zm-96 0l-96 0 0 128 96 0 0-128zM128 64L32 64l0 256 96 0 0-256zM32 352l0 96 272 0 0-96L32 352zm304 96l272 0 0-96-272 0 0 96zM0 32l32 0 576 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM256 320l0-96-96 0 0 96 96 0zm224-96l-96 0 0 96 96 0 0-96z" />
    </Icon>
);

export default DiagramLeanCanvas;

import { Icon } from "../../index";

/**
 * A component that renders the `diagram-lean-canvas` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-lean-canvas?s=thin diagram-lean-canvas}
 * @preview ![diagram-lean-canvas](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/diagram-lean-canvas.svg)
 */
const DiagramLeanCanvas: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 48l0 288 112 0 0-240c0-26.5-21.5-48-48-48l-64 0zm-16 0L384 48l0 144 112 0 0-144zM368 48l-96 0 0 288 96 0 0-288zM256 48L144 48l0 144 112 0 0-144zM128 48L64 48C37.5 48 16 69.5 16 96l0 240 112 0 0-288zM16 352l0 64c0 26.5 21.5 48 48 48l248 0 0-112L16 352zM328 464l248 0c26.5 0 48-21.5 48-48l0-64-296 0 0 112zM0 96C0 60.7 28.7 32 64 32l512 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM256 336l0-128-112 0 0 128 112 0zM496 208l-112 0 0 128 112 0 0-128z" />
    </Icon>
);

export default DiagramLeanCanvas;
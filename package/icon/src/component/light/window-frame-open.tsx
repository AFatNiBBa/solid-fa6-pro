
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame-open` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame-open?s=light window-frame-open}
 * @preview ![window-frame-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/window-frame-open.svg)
 */
const WindowFrameOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 32l144 0c17.7 0 32 14.3 32 32l0 192-176 0 0-224zM480 288l0-32 0-192c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64l0 192 0 32 32 0 384 0 32 0zM240 256L64 256 64 64c0-17.7 14.3-32 32-32l144 0 0 224zM16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 416 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-160-32 0 0 160L64 480l0-160-32 0 0 160-16 0z" />
    </Icon>
);

export default WindowFrameOpen;
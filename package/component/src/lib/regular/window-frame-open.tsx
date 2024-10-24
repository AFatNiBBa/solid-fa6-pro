
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame-open` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame-open?s=regular window-frame-open}
 * @preview ![window-frame-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/window-frame-open.svg)
 */
const WindowFrameOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 240l-152 0 0-192 136 0c8.8 0 16 7.2 16 16l0 176zm-200 0L80 240 80 64c0-8.8 7.2-16 16-16l136 0 0 192zm248 48l0-48 0-176c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64l0 176 0 48 48 0 352 0 48 0zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 400 0 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-144-48 0 0 144L80 464l0-144-48 0 0 144-8 0z" />
    </Icon>
);

export default WindowFrameOpen;
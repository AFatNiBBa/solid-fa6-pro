
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame-open` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame-open?s=sharp-regular window-frame-open}
 * @preview ![window-frame-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/window-frame-open.svg)
 */
const WindowFrameOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 240l-152 0 0-192 152 0 0 192zm-200 0L80 240 80 48l152 0 0 192zM32 0l0 48 0 192 0 48 48 0 352 0 48 0 0-48 0-192 0-48L432 0 80 0 32 0zM24 464L0 464l0 48 24 0 32 0 400 0 32 0 24 0 0-48-24 0-8 0 0-144-48 0 0 144L80 464l0-144-48 0 0 144-8 0z" />
    </Icon>
);

export default WindowFrameOpen;
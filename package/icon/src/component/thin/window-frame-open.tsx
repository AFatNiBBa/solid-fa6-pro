
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame-open` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame-open?s=thin window-frame-open}
 * @preview ![window-frame-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/window-frame-open.svg)
 */
const WindowFrameOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 16l0 256 200 0 0-208c0-26.5-21.5-48-48-48L264 16zM480 64l0 208 0 16-16 0L48 288l-16 0 0-16L32 64C32 28.7 60.7 0 96 0L416 0c35.3 0 64 28.7 64 64zM248 272l0-256L96 16C69.5 16 48 37.5 48 64l0 208 200 0zM8 496l24 0 0-176 16 0 0 176 416 0 0-176 16 0 0 176 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-32 0L40 512 8 512c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default WindowFrameOpen;
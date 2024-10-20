
import { Icon } from "../../index";

/**
 * A component that renders the `camera-security` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-security?s=regular camera-security}
 * @preview ![camera-security](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/camera-security.svg)
 */
const CameraSecurity: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c8.8 0 16 7.2 16 16l0 288c0 8.8-7.2 16-16 16L64 368c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l320 0zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l40.1 0L67.6 475.4c-4.6 7.4-4.8 16.7-.5 24.3s12.3 12.3 21 12.3l272 0c8.7 0 16.7-4.7 21-12.3s4-16.9-.5-24.3L343.9 416l40.1 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM287.5 416l29.5 48-186.1 0 29.5-48 127 0zM336 208a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM224 144a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default CameraSecurity;
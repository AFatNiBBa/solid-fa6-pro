
import { Icon } from "../../index";

/**
 * A component that renders the `camera-web` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-web?s=sharp-light camera-web}
 * @preview ![camera-web](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/camera-web.svg)
 */
const CameraWeb: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32a192 192 0 1 1 0 384 192 192 0 1 1 0-384zM351.3 408.3C409.7 367.9 448 300.4 448 224C448 100.3 347.7 0 224 0S0 100.3 0 224c0 76.4 38.3 143.9 96.7 184.3L40.9 480 16 512l40.5 0 334.9 0 40.5 0-24.9-32-55.8-71.7zm-27.8 16.4l43 55.3L81.4 480l43-55.3c30 14.9 63.8 23.3 99.6 23.3s69.6-8.4 99.6-23.3zM224 112a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </Icon>
);

export default CameraWeb;

import { Icon } from "../../index";

/**
 * A component that renders the `camera-web` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-web?s=light camera-web}
 * @preview ![camera-web](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/camera-web.svg)
 */
const CameraWeb: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32a192 192 0 1 1 0 384 192 192 0 1 1 0-384zM357.5 403.9C412.4 363 448 297.7 448 224C448 100.3 347.7 0 224 0S0 100.3 0 224c0 73.7 35.6 139 90.5 179.9L37 473.4c-5.6 7.2-6.5 17-2.5 25.2s12.4 13.4 21.5 13.4l336 0c9.1 0 17.5-5.2 21.5-13.4s3.1-18-2.5-25.2l-53.5-69.5zm-27.1 17.3L375.8 480 72.2 480l45.3-58.9C149.2 438.3 185.5 448 224 448s74.8-9.7 106.5-26.9zM224 112a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </Icon>
);

export default CameraWeb;
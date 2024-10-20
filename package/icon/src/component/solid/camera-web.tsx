
import { Icon } from "../../index";

/**
 * A component that renders the `camera-web` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-web?s=solid camera-web}
 * @preview ![camera-web](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/camera-web.svg)
 */
const CameraWeb: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M344.2 413.1C406.6 373.3 448 303.5 448 224C448 100.3 347.7 0 224 0S0 100.3 0 224c0 79.5 41.4 149.3 103.8 189.1L45.6 453.8c-11.4 8-16.4 22.5-12.2 35.8S50 512 64 512l320 0c14 0 26.3-9.1 30.5-22.4s-.7-27.8-12.2-35.8l-58.2-40.7zM224 352a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-288a160 160 0 1 1 0 320 160 160 0 1 1 0-320zM176 224c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-26.5 0-48 21.5-48 48z" />
    </Icon>
);

export default CameraWeb;
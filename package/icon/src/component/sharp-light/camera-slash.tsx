
import { Icon } from "../../index";

/**
 * A component that renders the `camera-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-slash?s=sharp-light camera-slash}
 * @preview ![camera-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/camera-slash.svg)
 */
const CameraSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32.4 10L19.9 .1 .1 25.3l12.6 9.9L607.8 502.2l12.6 9.9 19.8-25.2-12.6-9.9L32.4 10zm468 470l-40.5-32L96 448l0-287.3L64 135.4 64 448l0 32 32 0 404.4 0zM206.4 84.8l26.7 21.1 14-41.9 145.9 0 14 42.1 7.3 21.9 23.1 0L544 128l0 223.3 32 25.3L576 128l0-32-32 0L437.3 96 416 32 224 32 206.4 84.8zm7 168.6c-3.5 10.9-5.4 22.5-5.4 34.6c0 61.9 50.1 112 112 112c21.4 0 41.4-6 58.4-16.4l-27.6-21.8c-9.5 4-19.9 6.1-30.8 6.1c-44.2 0-80-35.8-80-80c0-4.4 .3-8.6 1-12.8l-27.6-21.8z" />
    </Icon>
);

export default CameraSlash;
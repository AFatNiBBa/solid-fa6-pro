
import { Icon } from "../../index";

/**
 * A component that renders the `camera-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-slash?s=light camera-slash}
 * @preview ![camera-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/camera-slash.svg)
 */
const CameraSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM576 376.6L576 160c0-35.3-28.7-64-64-64l-71.1 0L430.5 64.8C423.9 45.2 405.6 32 384.9 32L255.1 32c-20.7 0-39 13.2-45.5 32.8l-5.9 17.8 26.7 21.1 9.6-28.7c2.2-6.5 8.3-10.9 15.2-10.9l129.9 0c6.9 0 13 4.4 15.2 10.9l14 42.1c2.2 6.5 8.3 10.9 15.2 10.9l82.7 0c17.7 0 32 14.3 32 32l0 191.3 32 25.3zM96 160.7L67.7 138.4c-2.4 6.8-3.7 14-3.7 21.6l0 256c0 35.3 28.7 64 64 64l372.4 0-40.5-32L128 448c-17.7 0-32-14.3-32-32l0-255.3zM378.4 383.6l-27.6-21.8c-9.5 4-19.9 6.1-30.8 6.1c-44.2 0-80-35.8-80-80c0-4.4 .3-8.6 1-12.8l-27.6-21.8c-3.5 10.9-5.4 22.5-5.4 34.6c0 61.9 50.1 112 112 112c21.4 0 41.4-6 58.4-16.4z" />
    </Icon>
);

export default CameraSlash;
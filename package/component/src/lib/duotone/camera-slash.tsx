
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-slash?s=duotone camera-slash}
 * @preview ![camera-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/camera-slash.svg)
 */
const CameraSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 160l0 256c0 35.3 28.7 64 64 64l359.4 0L356.4 376.8c-11.2 4.6-23.5 7.2-36.4 7.2c-53 0-96-43-96-96c0-5 .4-9.9 1.1-14.6L65.2 147.4c-.8 4.1-1.2 8.3-1.2 12.6zm90.8-64c43.6 34.1 87.1 68.3 130.7 102.4c10.7-4.1 22.4-6.4 34.6-6.4c53 0 96 43 96 96c0 4.1-.3 8.2-.8 12.2c53.4 41.8 106.7 83.6 160 125.4c.5-3.1 .7-6.3 .7-9.6l0-256c0-35.3-28.7-64-64-64l-74.7 0L426.9 64.8C420.4 45.2 402.1 32 381.4 32L258.6 32c-20.7 0-39 13.2-45.5 32.8L202.7 96l-47.9 0z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default CameraSlash;
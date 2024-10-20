
import { Icon } from "../../index";

/**
 * A component that renders the `camera-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-slash?s=solid camera-slash}
 * @preview ![camera-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/camera-slash.svg)
 */
const CameraSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-55.5-43.5c.5-3.1 .7-6.3 .7-9.6l0-256c0-35.3-28.7-64-64-64l-74.7 0L426.9 64.8C420.4 45.2 402.1 32 381.4 32L258.6 32c-20.7 0-39 13.2-45.5 32.8L202.7 96l-47.9 0L38.8 5.1zM285.4 198.4c10.7-4.1 22.4-6.4 34.6-6.4c53 0 96 43 96 96c0 4.1-.3 8.2-.8 12.2L285.4 198.4zM224 288c0-5 .4-9.9 1.1-14.6L65.2 147.4c-.8 4.1-1.2 8.3-1.2 12.6l0 256c0 35.3 28.7 64 64 64l359.4 0L356.4 376.8c-11.2 4.6-23.5 7.2-36.4 7.2c-53 0-96-43-96-96z" />
    </Icon>
);

export default CameraSlash;
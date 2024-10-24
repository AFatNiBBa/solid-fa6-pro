
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-web-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-web-slash?s=sharp-duotone-solid camera-web-slash}
 * @preview ![camera-web-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/camera-web-slash.svg)
 */
const CameraWebSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 224c0 81 43 152 107.5 191.4L128 472l0 40 384 0 0-12.6L359.4 379.1c-12.6 3.2-25.8 4.9-39.4 4.9c-88.4 0-160-71.6-160-160c0-.6 0-1.3 0-1.9l-58.8-46.3C97.8 191.3 96 207.4 96 224zM142.3 87.7l50.6 39.3C222 88.7 268.1 64 320 64c88.4 0 160 71.6 160 160c0 37.5-12.9 71.9-34.4 99.2l50.6 39.3c30-38.1 47.9-86.2 47.9-138.4C544 100.3 443.7 0 320 0C247.6 0 183.2 34.4 142.3 87.7zm52.2 161.6C206.2 307.8 257.9 352 320 352c1.6 0 3.2 0 4.8-.1L194.5 249.2zm23.6-102.7L256 176c14.6-19.4 37.8-32 64-32l0 32c-15.9 0-30 7.7-38.7 19.6l139 107.9C437.6 281.7 448 254.1 448 224c0-70.7-57.3-128-128-128c-41.6 0-78.5 19.8-101.9 50.5z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default CameraWebSlash;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-web-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-web-slash?s=duotone camera-web-slash}
 * @preview ![camera-web-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/camera-web-slash.svg)
 */
const CameraWebSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 224c0 79.5 41.4 149.3 103.8 189.1l-58.2 40.7c-11.4 8-16.4 22.5-12.2 35.8S146 512 160 512l320 0c11.6 0 22.1-6.2 27.7-16L359.4 379.1c-12.6 3.2-25.8 4.9-39.4 4.9c-88.4 0-160-71.6-160-160c0-.6 0-1.3 0-1.9l-58.8-46.3C97.8 191.3 96 207.4 96 224zM143 86.7l50.4 39.5C222.6 88.4 268.5 64 320 64c88.4 0 160 71.6 160 160c0 37.7-13 72.3-34.8 99.6l50.4 39.5C525.9 324.9 544 276.6 544 224C544 100.3 443.7 0 320 0C248 0 183.9 34 143 86.7zm51.5 162.5C206.2 307.8 257.9 352 320 352c1.6 0 3.2 0 4.8-.1L194.5 249.2zm24-103.3c12.6 9.9 25.2 19.7 37.8 29.6C270.9 156.4 294 144 320 144c8.8 0 16 7.2 16 16s-7.2 16-16 16c-15.8 0-29.7 7.6-38.5 19.3c46.2 36.2 92.3 72.4 138.5 108.6c17.5-21.9 28-49.7 28-79.9c0-70.7-57.3-128-128-128c-41.3 0-78.1 19.6-101.5 50z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default CameraWebSlash;
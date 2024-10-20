
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-melting` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-melting?s=sharp-duotone-solid face-melting}
 * @preview ![face-melting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-melting.svg)
 */
const FaceMelting: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 448l0 32 0 32 32 0 288 0 256 0 32 0 0-32 0-32-32 0-16 0c-8.9 0-16-7.2-16-16s7.2-16 16-16l48 0 32 0 0-32 0-32-32 0-1.3 0c-23.6 0-39.8-24.1-35.4-47.2c3-15.8 4.6-32.1 4.6-48.8C576 114.6 461.4 0 320 0S64 114.6 64 256c0 38.5 8.5 75.1 23.8 107.9c15.5 33.4-6 84.1-42.8 84.1L32 448 0 448zM177.5 299l28.8-14 7 14.4c12 24.7 35.9 53.6 77.8 64.8s77.1-1.9 99.8-17.2l13.3-9L422 364.5l-13.3 9c-28.1 19-72.8 35.9-126 21.7s-83.4-51.2-98.3-81.7l-7-14.4zM287.5 189a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM441 238.7a32 32 0 1 1 -61.8-16.6A32 32 0 1 1 441 238.7z" />
        <path d="M247.2 219.9a32 32 0 1 0 16.6-61.8 32 32 0 1 0 -16.6 61.8zm154.6 41.4a32 32 0 1 0 16.6-61.8 32 32 0 1 0 -16.6 61.8z" />
    </Icon>
);

export default FaceMelting;
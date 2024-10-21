
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-melting` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-melting?s=duotone face-melting}
 * @preview ![face-melting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-melting.svg)
 */
const FaceMelting: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 480c0 17.7 14.3 32 32 32l288 0 256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.3 0c-23.6 0-39.8-24.1-35.4-47.2c3-15.8 4.6-32.1 4.6-48.8C576 114.6 461.4 0 320 0S64 114.6 64 256c0 38.5 8.5 75.1 23.8 107.9c15.5 33.4-6 84.1-42.9 84.1L32 448c-17.7 0-32 14.3-32 32zM184.4 313.3c-3.9-7.9-.5-17.5 7.4-21.4s17.5-.5 21.4 7.4c12 24.7 35.9 53.6 77.8 64.8s77.1-1.9 99.8-17.2c7.3-5 17.3-3 22.2 4.3s3 17.3-4.3 22.2c-28.1 19-72.8 35.9-126 21.7s-83.4-51.2-98.3-81.7zM287.5 189a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM441 238.7a32 32 0 1 1 -61.8-16.6A32 32 0 1 1 441 238.7z" />
        <path d="M247.2 219.9a32 32 0 1 0 16.6-61.8 32 32 0 1 0 -16.6 61.8zm154.6 41.4a32 32 0 1 0 16.6-61.8 32 32 0 1 0 -16.6 61.8z" />
    </Icon>
);

export default FaceMelting;
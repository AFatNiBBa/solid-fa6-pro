
import { Icon } from "../../index";

/**
 * A component that renders the `camera-retro` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-retro?s=light camera-retro}
 * @preview ![camera-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/camera-retro.svg)
 */
const CameraRetro: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 112L64 112c-17.7 0-32 14.3-32 32l0 80 113.1 0c22.1-38.3 63.5-64 110.9-64s88.7 25.7 110.9 64L480 224l0-128c0-17.7-14.3-32-32-32L277.3 64c-6.9 0-13.7 2.2-19.2 6.4l-46.9 35.2c-5.5 4.2-12.3 6.4-19.2 6.4zM32 256l0 160c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-160-100 0c2.6 10.2 4 21 4 32c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-11 1.4-21.8 4-32L32 256zM0 416L0 144c0-35.3 28.7-64 64-64l128 0 46.9-35.2C250 36.5 263.5 32 277.3 32L448 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zM352 288a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM64 48c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 64c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default CameraRetro;
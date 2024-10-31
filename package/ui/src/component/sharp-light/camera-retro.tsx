
import { Icon } from "../../index";

/**
 * A component that renders the `camera-retro` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-retro?s=sharp-light camera-retro}
 * @preview ![camera-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/camera-retro.svg)
 */
const CameraRetro: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 112L32 112l0 112 113.1 0c22.1-38.3 63.5-64 110.9-64s88.7 25.7 110.9 64L480 224l0-160L266.7 64l-55.5 41.6c-5.5 4.2-12.3 6.4-19.2 6.4zM32 256l0 192 448 0 0-192-100 0c2.6 10.2 4 21 4 32c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-11 1.4-21.8 4-32L32 256zM192 80l64-48 224 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 112 0 80l32 0 160 0zM352 288a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM64 32l96 0 0 32L64 64l0-32z" />
    </Icon>
);

export default CameraRetro;

import { Icon } from "../../index";

/**
 * A component that renders the `camera-retro` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-retro?s=regular camera-retro}
 * @preview ![camera-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/camera-retro.svg)
 */
const CameraRetro: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 112L64 112c-8.8 0-16 7.2-16 16l0 64 108.1 0c23.5-29.3 59.5-48 99.9-48s76.5 18.7 99.9 48L464 192l0-96c0-8.8-7.2-16-16-16L271.1 80c-2.5 0-4.9 .6-7.2 1.7l-50.5 25.2c-6.7 3.3-14 5.1-21.5 5.1zM48 240l0 176c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-176-84 0c2.6 10.2 4 21 4 32c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-11 1.4-21.8 4-32l-84 0zM0 416L0 128C0 92.7 28.7 64 64 64l0-16c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 16 32 0 50.5-25.2c8.9-4.4 18.7-6.8 28.6-6.8L448 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zM336 272a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default CameraRetro;

import { Icon } from "../../index";

/**
 * A component that renders the `camera-retro` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-retro?s=thin camera-retro}
 * @preview ![camera-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/camera-retro.svg)
 */
const CameraRetro: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 96L64 96c-26.5 0-48 21.5-48 48l0 88 130 0c18.5-42.4 60.8-72 110-72s91.5 29.6 110 72l130 0 0-136c0-26.5-21.5-48-48-48L277.3 48c-10.4 0-20.5 3.4-28.8 9.6L201.6 92.8c-2.8 2.1-6.1 3.2-9.6 3.2zM16 248l0 168c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-168-124.3 0c2.8 10.2 4.3 20.9 4.3 32c0 66.3-53.7 120-120 120s-120-53.7-120-120c0-11.1 1.5-21.8 4.3-32L16 248zM0 416L0 144c0-35.3 28.7-64 64-64l128 0 46.9-35.2C250 36.5 263.5 32 277.3 32L448 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zM360 280a104 104 0 1 0 -208 0 104 104 0 1 0 208 0zM64 40c0-4.4 3.6-8 8-8l80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L72 48c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default CameraRetro;
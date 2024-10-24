
import { Icon, generic } from "../../index";

/**
 * A component that renders the `globe-stand` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-stand?s=sharp-duotone-solid globe-stand}
 * @preview ![globe-stand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/globe-stand.svg)
 */
const GlobeStand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 208a144 144 0 1 0 288 0A144 144 0 1 0 64 208z" />
        <path d="M23 359l-17 17L40 409.9l17-17 10.5-10.5c34.3 27.7 74.9 43.8 116.5 48.3l0 33.3L64 464l0 48 288 0 0-48-120 0 0-33.3c49.1-5.3 96.8-26.7 134.4-64.3c81.7-81.7 87.1-211 16.1-298.9L393 57l17-17L376 6.1 359 23 332.5 49.6l-17 17 17 17c68.7 68.7 68.7 180.2 0 248.9s-180.2 68.7-248.9 0l-17-17-17 17L23 359z" />
    </Icon>
);

export default GlobeStand;
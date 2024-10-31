
import { Icon, generic } from "../../index";

/**
 * A component that renders the `globe-stand` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-stand?s=duotone globe-stand}
 * @preview ![globe-stand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/globe-stand.svg)
 */
const GlobeStand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 208a144 144 0 1 0 288 0A144 144 0 1 0 64 208z" />
        <path d="M15 367c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l18.5-18.5c34.3 27.7 74.9 43.8 116.5 48.3l0 33.3-96 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0 0-33.3c49.1-5.3 96.8-26.7 134.4-64.3c81.7-81.7 87.1-211 16.1-298.9L401 49c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L332.5 49.6c-9.4 9.4-9.4 24.6 0 33.9c68.7 68.7 68.7 180.2 0 248.9s-180.2 68.7-248.9 0c-9.4-9.4-24.6-9.4-33.9 0L15 367z" />
    </Icon>
);

export default GlobeStand;
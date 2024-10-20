
import { Icon, generic } from "../../index";

/**
 * A component that renders the `satellite-dish` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/satellite-dish?s=duotone satellite-dish}
 * @preview ![satellite-dish](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/satellite-dish.svg)
 */
const SatelliteDish: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32z" />
        <path d="M60.6 220.6c-14.5-14.5-38.8-11.8-46.3 7.3C5.1 251.5 0 277.1 0 304C0 418.9 93.1 512 208 512c26.9 0 52.5-5.1 76.1-14.4c19-7.5 21.8-31.8 7.3-46.3L187.3 347.3l28.4-28.4c2.6 .7 5.4 1.1 8.3 1.1c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32c0 2.9 .4 5.6 1.1 8.3l-28.4 28.4L60.6 220.6z" />
    </Icon>
);

export default SatelliteDish;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `caravan-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan-simple?s=duotone caravan-simple}
 * @preview ![caravan-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/caravan-simple.svg)
 */
const CaravanSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 160l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128c-17.7 0-32 14.3-32 32zm48 272a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zM320 160l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32z" />
        <path d="M80 32C35.8 32 0 67.8 0 112L0 336c0 44.2 35.8 80 80 80l1.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96L576 416l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-160c0-88.4-71.6-160-160-160L80 32zM64 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 256c-17.7 0-32-14.3-32-32l0-64zm288-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default CaravanSimple;

import { Icon } from "../../index";

/**
 * A component that renders the `caravan-simple` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan-simple?s=solid caravan-simple}
 * @preview ![caravan-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/caravan-simple.svg)
 */
const CaravanSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 32C35.8 32 0 67.8 0 112L0 336c0 44.2 35.8 80 80 80l16 0c0 53 43 96 96 96s96-43 96-96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-160c0-88.4-71.6-160-160-160L80 32zM64 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 256c-17.7 0-32-14.3-32-32l0-64zm288-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zM144 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default CaravanSimple;
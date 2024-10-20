
import { Icon } from "../../index";

/**
 * A component that renders the `caravan-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan-simple?s=light caravan-simple}
 * @preview ![caravan-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/caravan-simple.svg)
 */
const CaravanSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 64c-26.5 0-48 21.5-48 48l0 224c0 26.5 21.5 48 48 48l21.5 0c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64L544 384l0-192c0-70.7-57.3-128-128-128L80 64zM96 416l-16 0c-44.2 0-80-35.8-80-80L0 112C0 67.8 35.8 32 80 32l336 0c88.4 0 160 71.6 160 160l0 192 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0-32 0-256 0c0 53-43 96-96 96s-96-43-96-96zM256 160l-128 0 0 64 128 0 0-64zM128 128l128 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm224 32l0 64 64 0 0-64-64 0zm-32 0c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64zM256 416a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default CaravanSimple;
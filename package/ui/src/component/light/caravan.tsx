
import { Icon } from "../../index";

/**
 * A component that renders the `caravan` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan?s=light caravan}
 * @preview ![caravan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/caravan.svg)
 */
const Caravan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 64c70.7 0 128 57.3 128 128l0 192-64 0 0-216c0-22.1-17.9-40-40-40l-80 0c-22.1 0-40 17.9-40 40l0 216-37.5 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64L80 384c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l336 0zM80 416l16 0c0 53 43 96 96 96s96-43 96-96l64 0 96 0 96 0 32 0 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-192c0-88.4-71.6-160-160-160L80 32C35.8 32 0 67.8 0 112L0 336c0 44.2 35.8 80 80 80zM448 224l-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 0 128-96 0 0-216c0-4.4 3.6-8 8-8l80 0c4.4 0 8 3.6 8 8l0 56zM128 160l128 0 0 64-128 0 0-64zm-32 0l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32zm96 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Caravan;

import { Icon } from "../../index";

/**
 * A component that renders the `address-card` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-card?s=light address-card}
 * @preview ![address-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/address-card.svg)
 */
const AddressCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm96 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM112 368c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48c0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16s16-7.2 16-16zM352 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0z" />
    </Icon>
);

export default AddressCard;
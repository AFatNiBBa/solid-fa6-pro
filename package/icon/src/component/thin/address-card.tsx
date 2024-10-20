
import { Icon } from "../../index";

/**
 * A component that renders the `address-card` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-card?s=thin address-card}
 * @preview ![address-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/address-card.svg)
 */
const AddressCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 160a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM96 360c0-30.9 25.1-56 56-56l80 0c30.9 0 56 25.1 56 56c0 4.4 3.6 8 8 8s8-3.6 8-8c0-39.8-32.2-72-72-72l-80 0c-39.8 0-72 32.2-72 72c0 4.4 3.6 8 8 8s8-3.6 8-8zM360 176c-4.4 0-8 3.6-8 8s3.6 8 8 8l144 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-144 0zm0 64c-4.4 0-8 3.6-8 8s3.6 8 8 8l144 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-144 0zm0 64c-4.4 0-8 3.6-8 8s3.6 8 8 8l144 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-144 0z" />
    </Icon>
);

export default AddressCard;
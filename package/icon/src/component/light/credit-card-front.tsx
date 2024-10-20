
import { Icon } from "../../index";

/**
 * A component that renders the `credit-card-front` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card-front?s=light credit-card-front}
 * @preview ![credit-card-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/credit-card-front.svg)
 */
const CreditCardFront: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM96 304c0 8.8 7.2 16 16 16l352 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-352 0c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0zM400 144l64 0c4.4 0 8 3.6 8 8l0 48c0 4.4-3.6 8-8 8l-64 0c-4.4 0-8-3.6-8-8l0-48c0-4.4 3.6-8 8-8zm-40 8l0 48c0 22.1 17.9 40 40 40l64 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-64 0c-22.1 0-40 17.9-40 40z" />
    </Icon>
);

export default CreditCardFront;
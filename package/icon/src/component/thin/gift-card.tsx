
import { Icon } from "../../index";

/**
 * A component that renders the `gift-card` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gift-card?s=thin gift-card}
 * @preview ![gift-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/gift-card.svg)
 */
const GiftCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M405.1 16c-20.3 0-39.2 10.5-50 27.7L302.4 128l25.6 0 80 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-2.9 0zM273.6 128L220.9 43.7C210.1 26.5 191.2 16 170.9 16L168 16c-30.9 0-56 25.1-56 56s25.1 56 56 56l80 0 25.6 0zm14.4-7.1l53.6-85.7C355.3 13.3 379.3 0 405.1 0L408 0c39.8 0 72 32.2 72 72c0 22.6-10.4 42.8-26.7 56l58.7 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l58.7 0C106.4 114.8 96 94.6 96 72c0-39.8 32.2-72 72-72l2.9 0c25.8 0 49.8 13.3 63.5 35.2L288 120.9zM168 144L64 144c-26.5 0-48 21.5-48 48l0 96 544 0 0-96c0-26.5-21.5-48-48-48l-104 0-80 0-22.9 0 69.1 82.9c2.8 3.4 2.4 8.4-1 11.3s-8.4 2.4-11.3-1L288 148.5l-73.9 88.6c-2.8 3.4-7.9 3.9-11.3 1s-3.9-7.9-1-11.3L270.9 144 248 144l-80 0zM16 304l0 96 544 0 0-96L16 304zM560 448l0-32L16 416l0 32c0 26.5 21.5 48 48 48l448 0c26.5 0 48-21.5 48-48z" />
    </Icon>
);

export default GiftCard;
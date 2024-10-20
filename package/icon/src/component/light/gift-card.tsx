
import { Icon } from "../../index";

/**
 * A component that renders the `gift-card` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gift-card?s=light gift-card}
 * @preview ![gift-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/gift-card.svg)
 */
const GiftCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M397.1 32c-17.6 0-33.9 9-43.2 23.9l-45 72.1 11.1 0 80 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-2.9 0zm-130 96l-45-72.1C212.8 41 196.5 32 178.9 32L176 32c-26.5 0-48 21.5-48 48s21.5 48 48 48l80 0 11.1 0zM288 101l38.8-62c15.1-24.2 41.7-39 70.3-39L400 0c44.2 0 80 35.8 80 80c0 18-6 34.6-16 48l48 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l48 0c-10-13.4-16-30-16-48c0-44.2 35.8-80 80-80l2.9 0c28.6 0 55.2 14.7 70.3 39L288 101zM176 160L64 160c-17.7 0-32 14.3-32 32l0 96 512 0 0-96c0-17.7-14.3-32-32-32l-112 0-77.8 0 58.1 69.8c5.7 6.8 4.7 16.9-2 22.5s-16.9 4.7-22.5-2L288 169l-67.7 81.3c-5.7 6.8-15.7 7.7-22.5 2s-7.7-15.7-2-22.5L253.8 160 176 160zM32 320l0 64 512 0 0-64L32 320zM544 448l0-32L32 416l0 32c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32z" />
    </Icon>
);

export default GiftCard;
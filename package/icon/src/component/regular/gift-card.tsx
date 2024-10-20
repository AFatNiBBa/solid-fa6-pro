
import { Icon } from "../../index";

/**
 * A component that renders the `gift-card` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gift-card?s=regular gift-card}
 * @preview ![gift-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/gift-card.svg)
 */
const GiftCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M353.5 68.8L318.7 128l1.3 0 72 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-2.2 0c-14.9 0-28.8 7.9-36.3 20.8zM288 197.5l-61.6 73.9c-8.5 10.2-23.6 11.6-33.8 3.1s-11.6-23.6-3.1-33.8L243.4 176 184 176 64 176c-8.8 0-16 7.2-16 16l0 128 480 0 0-128c0-8.8-7.2-16-16-16l-120 0-59.4 0 53.9 64.6c8.5 10.2 7.1 25.3-3.1 33.8s-25.3 7.1-33.8-3.1L288 197.5zM48 384l0 64c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-64L48 384zM256 128l1.3 0L222.5 68.8C214.9 55.9 201.1 48 186.2 48L184 48c-22.1 0-40 17.9-40 40s17.9 40 40 40l72 0zm7.9-83.6l24.1 41 24.1-41C328.3 16.9 357.9 0 389.8 0L392 0c48.6 0 88 39.4 88 88c0 14.4-3.5 28-9.6 40l41.6 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l41.6 0C99.5 116 96 102.4 96 88c0-48.6 39.4-88 88-88l2.2 0c31.9 0 61.5 16.9 77.7 44.4z" />
    </Icon>
);

export default GiftCard;
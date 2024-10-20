
import { Icon } from "../../index";

/**
 * A component that renders the `gift-card` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gift-card?s=sharp-regular gift-card}
 * @preview ![gift-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/gift-card.svg)
 */
const GiftCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M353.5 68.8L318.7 128l1.3 0 72 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-2.2 0c-14.9 0-28.8 7.9-36.3 20.8zM288 197.5l-61.6 73.9-15.4 18.4-36.9-30.7 15.4-18.4L243.4 176 184 176 48 176l0 144 480 0 0-144-136 0-59.4 0 53.9 64.6 15.4 18.4-36.9 30.7-15.4-18.4L288 197.5zM48 384l0 80 480 0 0-80L48 384zM256 128l1.3 0L222.5 68.8C214.9 55.9 201.1 48 186.2 48L184 48c-22.1 0-40 17.9-40 40s17.9 40 40 40l72 0zm7.9-83.6l24.1 41 24.1-41C328.3 16.9 357.9 0 389.8 0L392 0c48.6 0 88 39.4 88 88c0 14.4-3.5 28-9.6 40l57.6 0 48 0 0 48 0 288 0 48-48 0L48 512 0 512l0-48L0 176l0-48 48 0 57.6 0C99.5 116 96 102.4 96 88c0-48.6 39.4-88 88-88l2.2 0c31.9 0 61.5 16.9 77.7 44.4z" />
    </Icon>
);

export default GiftCard;
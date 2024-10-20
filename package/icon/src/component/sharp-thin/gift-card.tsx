
import { Icon } from "../../index";

/**
 * A component that renders the `gift-card` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gift-card?s=sharp-thin gift-card}
 * @preview ![gift-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/gift-card.svg)
 */
const GiftCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M405.1 16c-20.3 0-39.2 10.5-50 27.7L302.4 128l25.6 0 80 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-2.9 0zM273.6 128L220.9 43.7C210.1 26.5 191.2 16 170.9 16L168 16c-30.9 0-56 25.1-56 56s25.1 56 56 56l80 0 25.6 0zm14.4-7.1l53.6-85.7C355.3 13.3 379.3 0 405.1 0L408 0c39.8 0 72 32.2 72 72c0 22.6-10.4 42.8-26.7 56L560 128l16 0 0 16 0 352 0 16-16 0L16 512 0 512l0-16L0 144l0-16 16 0 106.7 0C106.4 114.8 96 94.6 96 72c0-39.8 32.2-72 72-72l2.9 0c25.8 0 49.8 13.3 63.5 35.2L288 120.9zM168 144L16 144l0 144 544 0 0-144-152 0-80 0-22.9 0 69.1 82.9 5.1 6.1L367 243.3l-5.1-6.1L288 148.5l-73.9 88.6-5.1 6.1L196.7 233l5.1-6.1L270.9 144 248 144l-80 0zM16 304l0 96 544 0 0-96L16 304zM560 496l0-80L16 416l0 80 544 0z" />
    </Icon>
);

export default GiftCard;

import { Icon } from "../../index";

/**
 * A component that renders the `credit-card` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card?s=thin credit-card}
 * @preview ![credit-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/credit-card.svg)
 */
const CreditCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 32 544 0 0-32c0-26.5-21.5-48-48-48L64 48zM16 144l0 96 544 0 0-96L16 144zm0 112l0 160c0 26.5 21.5 48 48 48l448 0c26.5 0 48-21.5 48-48l0-160L16 256zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM96 360c0-4.4 3.6-8 8-8l80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0c-4.4 0-8-3.6-8-8zm128 0c0-4.4 3.6-8 8-8l144 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-144 0c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default CreditCard;
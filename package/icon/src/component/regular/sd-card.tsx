
import { Icon } from "../../index";

/**
 * A component that renders the `sd-card` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sd-card?s=regular sd-card}
 * @preview ![sd-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sd-card.svg)
 */
const SdCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 64l0 384c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-293.5c0-4.2 1.7-8.3 4.7-11.3l90.5-90.5c3-3 7.1-4.7 11.3-4.7L320 48c8.8 0 16 7.2 16 16zm48 384l0-384c0-35.3-28.7-64-64-64L154.5 0c-17 0-33.3 6.7-45.3 18.7L18.7 109.3C6.7 121.3 0 137.5 0 154.5L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64zM176 96c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z" />
    </Icon>
);

export default SdCard;

import { Icon } from "../../index";

/**
 * A component that renders the `sd-card` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sd-card?s=light sd-card}
 * @preview ![sd-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sd-card.svg)
 */
const SdCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 64l0 384c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-293.5c0-8.5 3.4-16.6 9.4-22.6l90.5-90.5c6-6 14.1-9.4 22.6-9.4L320 32c17.7 0 32 14.3 32 32zm32 384l0-384c0-35.3-28.7-64-64-64L154.5 0c-17 0-33.3 6.7-45.3 18.7L18.7 109.3C6.7 121.3 0 137.5 0 154.5L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64zM192 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z" />
    </Icon>
);

export default SdCard;
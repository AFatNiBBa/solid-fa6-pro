
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sd-cards` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sd-cards?s=duotone sd-cards}
 * @preview ![sd-cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sd-cards.svg)
 */
const SdCards: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 120L0 376c0 75.1 60.9 136 136 136l224 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-224 0c-48.6 0-88-39.4-88-88l0-256c0-13.3-10.7-24-24-24S0 106.7 0 120zM256 88l0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 0l0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M448 64c0-35.3-28.7-64-64-64L237.3 0C220.3 0 204 6.7 192 18.7L114.7 96c-12 12-18.7 28.3-18.7 45.3L96 352c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-288zM304 88l0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24s24 10.7 24 24zm80 0l0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default SdCards;
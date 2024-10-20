
import { Icon, generic } from "../../index";

/**
 * A component that renders the `seal-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal-exclamation?s=duotone seal-exclamation}
 * @preview ![seal-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/seal-exclamation.svg)
 */
const SealExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M4.4 256c0 12.3 4.7 24.6 14.1 33.9L64 335.5 64 400c0 26.5 21.5 48 48 48l64.5 0 45.6 45.6c18.7 18.7 49.1 18.7 67.9 0L335.5 448l64.5 0c26.5 0 48-21.5 48-48l0-64.5 45.6-45.6c18.7-18.7 18.7-49.1 0-67.9L448 176.5l0-64.5c0-26.5-21.5-48-48-48l-64.5 0L289.9 18.4c-18.7-18.7-49.1-18.7-67.9 0L176.5 64 112 64c-26.5 0-48 21.5-48 48l0 64.5L18.4 222.1C9 231.4 4.4 243.7 4.4 256zM288 352a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM232 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112z" />
        <path d="M280 152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zM256 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default SealExclamation;
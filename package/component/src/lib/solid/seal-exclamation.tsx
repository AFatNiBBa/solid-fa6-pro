
import { Icon } from "../../index";

/**
 * A component that renders the `seal-exclamation` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal-exclamation?s=solid seal-exclamation}
 * @preview ![seal-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/seal-exclamation.svg)
 */
const SealExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M222.1 17.9c18.7-18.7 49.1-18.7 67.9 0L336 64l64 0c26.5 0 48 21.5 48 48l0 64 45.6 45.6c18.7 18.7 18.7 49.1 0 67.9L448 335.1l0 64.9c0 26.5-21.5 48-48 48l-64.9 0-45.1 45.1c-18.7 18.7-49.1 18.7-67.9 0L176.9 448 112 448c-26.5 0-48-21.5-48-48l0-64.9L18.4 289.5c-18.7-18.7-18.7-49.1 0-67.9L64 176l0-64c0-26.5 21.5-48 48-48l64 0 46.1-46.1zM256 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default SealExclamation;
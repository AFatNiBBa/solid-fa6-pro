
import { Icon } from "../../index";

/**
 * A component that renders the `seal` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal?s=regular seal}
 * @preview ![seal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/seal.svg)
 */
const Seal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M210.4 97.9c-9 9-21.2 14.1-33.9 14.1L112 112l0 64.5c0 12.7-5.1 24.9-14.1 33.9L52.4 256l45.6 45.6c9 9 14.1 21.2 14.1 33.9l0 64.5 64.5 0c12.7 0 24.9 5.1 33.9 14.1L256 459.6l45.6-45.6c9-9 21.2-14.1 33.9-14.1l64.5 0 0-64.5c0-12.7 5.1-24.9 14.1-33.9L459.6 256l-45.6-45.6c-9-9-14.1-21.2-14.1-33.9l0-64.5-64.5 0c-12.7 0-24.9-5.1-33.9-14.1L256 52.4 210.4 97.9zm11.6-79.5c18.7-18.7 49.1-18.7 67.9 0L335.5 64 400 64c26.5 0 48 21.5 48 48l0 64.5 45.6 45.6c18.7 18.7 18.7 49.1 0 67.9L448 335.5l0 64.5c0 26.5-21.5 48-48 48l-64.5 0-45.6 45.6c-18.7 18.7-49.1 18.7-67.9 0L176.5 448 112 448c-26.5 0-48-21.5-48-48l0-64.5L18.4 289.9c-18.7-18.7-18.7-49.1 0-67.9L64 176.5 64 112c0-26.5 21.5-48 48-48l64.5 0 45.6-45.6z" />
    </Icon>
);

export default Seal;

import { Icon } from "../../index";

/**
 * A component that renders the `gavel` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gavel?s=regular gavel}
 * @preview ![gavel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/gavel.svg)
 */
const Gavel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M313 7c9.3 9.3 9.4 24.3 .2 33.7L471.3 198.8c9.4-9.2 24.4-9.1 33.7 .2c9.4 9.4 9.4 24.6 0 33.9l-16.7 16.8L393 345l-16 16c-9.4 9.4-24.6 9.4-33.9 0c-9-9-9.4-23.5-.9-32.9L184 169.9c-9.4 8.4-23.9 8.1-32.9-.9c-9.4-9.4-9.4-24.6 0-33.9l16-16 95.2-95.3L279 7c9.4-9.4 24.6-9.4 33.9 0zM279.2 74.7L217.9 136 376 294.1l61.3-61.3L279.2 74.7zM223.4 254.6l33.9 33.9-49.8 49.8 7 7c12.5 12.5 12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0l-48-48c-12.5-12.5-12.5-32.8 0-45.3l112-112c12.5-12.5 32.8-12.5 45.3 0l7 7 49.8-49.8zm-79.4 88L54.6 432 80 457.4 169.4 368 144 342.6z" />
    </Icon>
);

export default Gavel;
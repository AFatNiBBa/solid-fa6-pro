
import { Icon } from "../../index";

/**
 * A component that renders the `gavel` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gavel?s=thin gavel}
 * @preview ![gavel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/gavel.svg)
 */
const Gavel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M301.7 2.3c3.1 3.1 3.1 8.2 0 11.3L291.3 24 488 220.7l10.3-10.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-16 16-112 112-16 16c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L364.7 344 168 147.3l-10.3 10.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l16-16 112-112 16-16c3.1-3.1 8.2-3.1 11.3 0zM179.3 136L376 332.7 476.7 232 280 35.3 179.3 136zm-24 172.7c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6l48 48c6.2 6.2 16.4 6.2 22.6 0l112-112c6.2-6.2 6.2-16.4 0-22.6l-48-48zm-33.9-11.3c12.5-12.5 32.8-12.5 45.3 0L185 315.7l53.1-53.1 11.3 11.3L196.3 327l18.3 18.3c12.5 12.5 12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0l-48-48c-12.5-12.5-12.5-32.8 0-45.3l112-112z" />
    </Icon>
);

export default Gavel;
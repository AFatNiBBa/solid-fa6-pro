
import { Icon } from "../../index";

/**
 * A component that renders the `print` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print?s=thin print}
 * @preview ![print](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/print.svg)
 */
const Print: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 160l-16 0 0-96C64 28.7 92.7 0 128 0L357.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 18.7 28.3 18.7 45.3l0 69.5-16 0 0-69.5c0-12.7-5.1-24.9-14.1-33.9L391.4 30.1c-9-9-21.2-14.1-33.9-14.1L128 16c-26.5 0-48 21.5-48 48l0 96zm368 48L64 208c-26.5 0-48 21.5-48 48l0 128c0 8.8 7.2 16 16 16l32 0 0-48c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 48 32 0c8.8 0 16-7.2 16-16l0-128c0-26.5-21.5-48-48-48zm0 208l0 64c0 17.7-14.3 32-32 32L96 512c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32L0 256c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 128c0 17.7-14.3 32-32 32l-32 0zM96 336c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16L96 336zm336-80a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Print;
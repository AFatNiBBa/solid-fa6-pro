
import { Icon } from "../../index";

/**
 * A component that renders the `bong` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bong?s=sharp-regular bong}
 * @preview ![bong](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bong.svg)
 */
const Bong: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M120 259.2C95.5 273.4 75.6 294.6 63 320L321 320c-12.6-25.4-32.5-46.6-57.1-60.8l-24-13.9 0-27.7L240 48l-96 0 0 169.7 0 27.7-24 13.9zM288 48l0 169.7c14.2 8.2 27.2 18.2 38.8 29.6L366.1 208l-7-7-17-17L376 150.1l17 17 24 24 24 24 17 17L424 265.9l-17-17-7-7-43.3 43.3C374 314.1 384 347.9 384 384c0 49.2-18.5 94-48.9 128L48.9 512C18.5 478 0 433.2 0 384c0-71.1 38.6-133.1 96-166.3L96 48l-8 0L64 48 64 0 88 0l8 0 48 0 96 0 48 0 8 0 24 0 0 48-24 0-8 0z" />
    </Icon>
);

export default Bong;
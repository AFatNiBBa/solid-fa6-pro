
import { Icon } from "../../index";

/**
 * A component that renders the `vial` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial?s=thin vial}
 * @preview ![vial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/vial.svg)
 */
const Vial: typeof Icon = x => (
    <Icon {...x}>
        <path d="M322.3 2.3c3.1-3.1 8.2-3.1 11.3 0l24 24 128 128 24 24c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L480 171.3l-98.3 98.3L168.2 483.1C149.7 501.6 124.6 512 98.5 512C44.1 512 0 467.9 0 413.5c0-26.1 10.4-51.2 28.9-69.7l85.5-85.5L340.7 32 322.3 13.7c-3.1-3.1-3.1-8.2 0-11.3zm29.7 41L139.3 256l233.4 0 96-96L352 43.3zM356.7 272l-233.4 0L40.2 355.1C24.7 370.6 16 391.6 16 413.5C16 459.1 52.9 496 98.5 496c21.9 0 42.9-8.7 58.3-24.2L356.7 272z" />
    </Icon>
);

export default Vial;

import { Icon } from "../../index";

/**
 * A component that renders the `vial` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial?s=sharp-thin vial}
 * @preview ![vial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/vial.svg)
 */
const Vial: typeof Icon = x => (
    <Icon {...x}>
        <path d="M331.5 .2l5.7 5.7 20.5 20.5 128 128 20.5 20.5 5.7 5.7-11.3 11.3-5.7-5.7L480 171.3l-98.3 98.3L168.2 483.1C149.7 501.6 124.6 512 98.5 512C44.1 512 0 467.9 0 413.5c0-26.1 10.4-51.2 28.9-69.7l85.5-85.5L340.7 32 325.9 17.2l-5.7-5.7L331.5 .2zM352 43.3L139.3 256l233.4 0 96-96L352 43.3zM356.7 272l-233.4 0L40.2 355.1C24.7 370.6 16 391.6 16 413.5C16 459.1 52.9 496 98.5 496c21.9 0 42.9-8.7 58.3-24.2L356.7 272z" />
    </Icon>
);

export default Vial;
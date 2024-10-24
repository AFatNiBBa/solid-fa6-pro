
import { Icon } from "../../index";

/**
 * A component that renders the `screwdriver` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver?s=sharp-light screwdriver}
 * @preview ![screwdriver](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/screwdriver.svg)
 */
const Screwdriver: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 112l0 48 48 0 69.7-93L445 42.3 352 112zM320 96L448 0l64 64L416 192l-64 0-9.4 0-76.7 76.7-22.6-22.6L320 169.4l0-9.4 0-64zM118.6 489.4L96 512 73.4 489.4 22.6 438.6 0 416l22.6-22.6L161.4 254.6 184 232l22.6 22.6 50.7 50.7L280 328l-22.6 22.6L118.6 489.4zM234.7 328L184 277.3 45.3 416 96 466.7 234.7 328z" />
    </Icon>
);

export default Screwdriver;
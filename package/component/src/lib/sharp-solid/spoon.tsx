
import { Icon } from "../../index";

/**
 * A component that renders the `spoon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spoon?s=sharp-solid spoon}
 * @preview ![spoon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/spoon.svg)
 */
const Spoon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 160.2C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192l-39.6 0-21.5-21.5L70.6 486.6 48 509.3 2.7 464l22.6-22.6L245.5 221.3 224 199.8l0-39.6z" />
    </Icon>
);

export default Spoon;
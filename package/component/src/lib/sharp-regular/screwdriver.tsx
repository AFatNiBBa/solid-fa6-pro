
import { Icon } from "../../index";

/**
 * A component that renders the `screwdriver` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver?s=sharp-regular screwdriver}
 * @preview ![screwdriver](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/screwdriver.svg)
 */
const Screwdriver: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 120l0 24 24 0 56.6-75.5-5.1-5.1L368 120zM512 64L416 192l-48 0-14.1 0-82.3 82.3-33.9-33.9L320 158.1l0-14.1 0-48L448 0l64 64zM129.9 478.1L96 512 62.1 478.1 33.9 449.9 0 416l33.9-33.9L150.1 265.9 184 232l33.9 33.9 28.1 28.1L280 328l-33.9 33.9L129.9 478.1zM212.1 328L184 299.9 67.9 416 96 444.1 212.1 328z" />
    </Icon>
);

export default Screwdriver;

import { Icon } from "../../index";

/**
 * A component that renders the `cube` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cube?s=sharp-regular cube}
 * @preview ![cube](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cube.svg)
 */
const Cube: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 6.3l8.5 3.2 232 88 15.5 5.9 0 16.6 0 264 0 16-14.8 6.1-232 96L256 506l-9.2-3.8-232-96L0 400l0-16L0 120l0-16.6 15.5-5.9 232-88L256 6.3zM48 368l184 76.1 0-203.7L48 168.1 48 368zm232 76.1L464 368l0-199.9L280 240.4l0 203.7zM256 57.7l-182 69 182 71.5 182-71.5-182-69z" />
    </Icon>
);

export default Cube;
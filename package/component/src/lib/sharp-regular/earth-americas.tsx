
import { Icon } from "../../index";

/**
 * A component that renders the `earth-americas` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/earth-americas?s=sharp-regular earth-americas}
 * @preview ![earth-americas](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/earth-americas.svg)
 */
const EarthAmericas: typeof Icon = x => (
    <Icon {...x}>
        <path d="M437.6 154.4L400 192l0 80 63.4 0C455.2 379.4 365.5 464 256 464C141.1 464 48 370.9 48 256c0-19.5 2.7-38.4 7.7-56.3L96 240l48 0 48 48 0 64 32 32 0 48 64 0 0-32 64-64 0-80-128 0-32-32 0-32 80 0 0-32-32-32 0-16 32-32 0-31.4C343.2 54 404.4 95.3 437.6 154.4zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default EarthAmericas;

import { Icon } from "../../index";

/**
 * A component that renders the `crosshairs` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs?s=sharp-regular crosshairs}
 * @preview ![crosshairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/crosshairs.svg)
 */
const Crosshairs: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 0l0 24 0 17.3C380.1 52.4 459.6 131.9 470.7 232l17.3 0 24 0 0 48-24 0-17.3 0C459.6 380.1 380.1 459.6 280 470.7l0 17.3 0 24-48 0 0-24 0-17.3C131.9 459.6 52.4 380.1 41.3 280L24 280 0 280l0-48 24 0 17.3 0C52.4 131.9 131.9 52.4 232 41.3L232 24l0-24 48 0zM89.7 280c10.5 73.6 68.7 131.8 142.3 142.3l0-30.3 0-24 48 0 0 24 0 30.3c73.6-10.5 131.8-68.7 142.3-142.3L392 280l-24 0 0-48 24 0 30.3 0C411.8 158.4 353.6 100.2 280 89.7l0 30.3 0 24-48 0 0-24 0-30.3C158.4 100.2 100.2 158.4 89.7 232l30.3 0 24 0 0 48-24 0-30.3 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Crosshairs;
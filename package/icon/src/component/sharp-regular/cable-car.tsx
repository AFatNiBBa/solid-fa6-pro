
import { Icon } from "../../index";

/**
 * A component that renders the `cable-car` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cable-car?s=sharp-regular cable-car}
 * @preview ![cable-car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cable-car.svg)
 */
const CableCar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-64-8a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM160 272l0 80-80 0 0-80 80 0zm48 0l96 0 0 80-96 0 0-80zm144 0l80 0 0 80-80 0 0-80zm80 128l0 64L80 464l0-64 104 0 144 0 104 0zM80 224l-48 0 0 48 0 192 0 48 48 0 352 0 48 0 0-48 0-192 0-48-48 0-152 0 0-76.6 205-43.9 23.5-5L498.4 51.5l-23.5 5-224 48-224 48-23.5 5 10.1 46.9 23.5-5 195-41.8 0 66.3L80 224z" />
    </Icon>
);

export default CableCar;
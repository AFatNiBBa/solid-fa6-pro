
import { Icon } from "../../index";

/**
 * A component that renders the `car-bolt` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-bolt?s=sharp-regular car-bolt}
 * @preview ![car-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/car-bolt.svg)
 */
const CarBolt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M120 32l-17 0L97.3 48.1 52.6 176 48 176 0 176l0 48L0 352l0 48 0 80 48 0 0-80 416 0 0 80 48 0 0-80 0-48 0-128 0-48-48 0-4.6 0L414.7 48.1 409 32l-17 0L120 32zM408.6 176L384 176l0 48 80 0 0 128L48 352l0-128 80 0 0-48-24.6 0L137 80 375 80l33.6 96zM112 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm320-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM160 224l88 0-24 96L352 192l-88 0 24-96L160 224z" />
    </Icon>
);

export default CarBolt;
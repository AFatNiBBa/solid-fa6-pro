
import { Icon } from "../../index";

/**
 * A component that renders the `car-battery` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-battery?s=sharp-thin car-battery}
 * @preview ![car-battery](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/car-battery.svg)
 */
const CarBattery: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 80l0 48-96 0 0-48 96 0zm16 48l0-48 0-16-16 0L80 64 64 64l0 16 0 48-48 0L0 128l0 16L0 432l0 16 16 0 480 0 16 0 0-16 0-288 0-16-16 0-48 0 0-48 0-16-16 0-96 0-16 0 0 16 0 48-128 0zm144 0l0-48 96 0 0 48-96 0zm-16 16l16 0 96 0 16 0 48 0 0 288L16 432l0-288 48 0 16 0 96 0 16 0 128 0zm56 72l-16 0 0 8 0 40-40 0-8 0 0 16 8 0 40 0 0 40 0 8 16 0 0-8 0-40 40 0 8 0 0-16-8 0-40 0 0-40 0-8zM96 264l-8 0 0 16 8 0 96 0 8 0 0-16-8 0-96 0z" />
    </Icon>
);

export default CarBattery;
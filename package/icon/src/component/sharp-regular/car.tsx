
import { Icon } from "../../index";

/**
 * A component that renders the `car` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car?s=sharp-regular car}
 * @preview ![car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/car.svg)
 */
const Car: typeof Icon = x => (
    <Icon {...x}>
        <path d="M120 32l-17.3 0L97.2 48.4 54.7 176 48 176 0 176l0 48L0 352l0 48 0 80 48 0 0-80 416 0 0 80 48 0 0-80 0-48 0-128 0-48-48 0-6.7 0L414.8 48.4 409.3 32 392 32 120 32zM406.7 176l-301.4 0 32-96 237.4 0 32 96zM464 224l0 128L48 352l0-128 416 0zM144 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm256 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Car;
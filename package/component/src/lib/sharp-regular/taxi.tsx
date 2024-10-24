
import { Icon } from "../../index";

/**
 * A component that renders the `taxi` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taxi?s=sharp-regular taxi}
 * @preview ![taxi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/taxi.svg)
 */
const Taxi: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 0L160 0l0 64-40 0-17.3 0L97.2 80.4 54.7 208 48 208 0 208l0 48L0 384l0 48 0 80 48 0 0-80 416 0 0 80 48 0 0-80 0-48 0-128 0-48-48 0-6.7 0L414.8 80.4 409.3 64 392 64l-40 0 0-64zm22.7 112l32 96-301.4 0 32-96 237.4 0zM48 256l416 0 0 128L48 384l0-128zm64 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm320-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Taxi;
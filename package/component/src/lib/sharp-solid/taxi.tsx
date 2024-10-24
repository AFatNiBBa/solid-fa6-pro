
import { Icon } from "../../index";

/**
 * A component that renders the `taxi` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taxi?s=sharp-solid taxi}
 * @preview ![taxi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/taxi.svg)
 */
const Taxi: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 0L160 0l0 64-40 0L97.3 64 89.8 85.4 41.3 224 0 224 0 432l0 80 96 0 0-80 320 0 0 80 96 0 0-80 0-208-41.3 0L422.2 85.4 414.7 64 392 64l-40 0 0-64zm17.3 128l33.6 96-293.8 0 33.6-96 226.6 0zM96 288a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm288 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Taxi;
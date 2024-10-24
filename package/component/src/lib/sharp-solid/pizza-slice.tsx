
import { Icon } from "../../index";

/**
 * A component that renders the `pizza-slice` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pizza-slice?s=sharp-solid pizza-slice}
 * @preview ![pizza-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pizza-slice.svg)
 */
const PizzaSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M99.9 112.2L0 512l399.8-99.9c.2-4 .2-8 .2-12.1c0-159.1-128.9-288-288-288c-4 0-8.1 .1-12.1 .2zM432 404l80-20C512 171.9 340.1 0 128 0L108 80c1.3 0 2.7 0 4 0c176.7 0 320 143.3 320 320c0 1.3 0 2.7 0 4zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default PizzaSlice;
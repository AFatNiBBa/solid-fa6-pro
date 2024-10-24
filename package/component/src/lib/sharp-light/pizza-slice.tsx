
import { Icon } from "../../index";

/**
 * A component that renders the `pizza-slice` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pizza-slice?s=sharp-light pizza-slice}
 * @preview ![pizza-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pizza-slice.svg)
 */
const PizzaSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M8.8 476.8L0 512l35.2-8.8L512 384C512 171.9 340.1 0 128 0L8.8 476.8zM44 468l88.8-355.3c142.5 10.2 256.3 124 266.5 266.5L44 468zM140.7 81.3l12.1-48.4C327.4 45 467 184.6 479.1 359.2l-48.4 12.1C417.1 217.5 294.5 94.9 140.7 81.3zM176 264a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120 72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM144 392a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default PizzaSlice;
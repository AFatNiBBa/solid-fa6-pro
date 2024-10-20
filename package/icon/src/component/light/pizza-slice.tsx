
import { Icon } from "../../index";

/**
 * A component that renders the `pizza-slice` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pizza-slice?s=light pizza-slice}
 * @preview ![pizza-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pizza-slice.svg)
 */
const PizzaSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M167.5 32.8c-6.1-.4-12.4 3.7-14.4 11.1l-10 37.6C295 96.1 415.9 217 430.5 368.9l37.6-10c7.4-2 11.5-8.3 11.1-14.4C467.7 177.7 334.3 44.3 167.5 32.8zM38.6 473.4l360.5-96.1c-11-140.9-123.5-253.4-264.4-264.4L38.6 473.4zM4.7 507.3c-4-4-5.6-9.9-4.1-15.4L122.2 35.6C127.7 14.9 146.9-.7 169.7 .9C352.5 13.5 498.5 159.5 511.1 342.3c1.6 22.8-14 41.9-34.7 47.5L20.1 511.5c-5.5 1.5-11.4-.1-15.4-4.1zM176 216a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 120a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-104 8a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default PizzaSlice;
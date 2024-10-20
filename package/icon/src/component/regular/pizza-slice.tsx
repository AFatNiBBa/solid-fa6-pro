
import { Icon } from "../../index";

/**
 * A component that renders the `pizza-slice` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pizza-slice?s=regular pizza-slice}
 * @preview ![pizza-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pizza-slice.svg)
 */
const PizzaSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M122.2 35.6L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L476.4 389.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9c-22.8-1.6-41.9 14-47.5 34.7zM144.6 138C264.3 152.7 359.3 247.7 374 367.4L61.2 450.8 144.6 138zm12.5-46.8l11.3-42.3C325.6 60.7 451.3 186.4 463.1 343.7l-42.3 11.3c-19.7-136.2-127.5-244-263.7-263.7zM192 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM224 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default PizzaSlice;

import { Icon } from "../../index";

/**
 * A component that renders the `candy` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy?s=sharp-regular candy}
 * @preview ![candy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/candy.svg)
 */
const Candy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M309 399.6L198.5 178.7C184.3 201 176 227.5 176 256c0 75.8 58.6 137.9 133 143.6zM233.3 141L360 394.4c17.1-4.9 32.8-12.9 46.7-23.4L280 117.6c-17.1 4.9-32.8 12.9-46.7 23.4zM331 112.4L441.5 333.3C455.7 311 464 284.5 464 256c0-75.8-58.6-137.9-133-143.6zM504.6 308.9C481.7 389.2 407.7 448 320 448s-161.7-58.8-184.6-139.1L35.2 365.2 7 327l35.6-35.6L0 279l0-46 42.6-12.5L7 185l28.2-38.2 100.1 56.3C158.3 122.8 232.3 64 320 64s161.7 58.8 184.6 139.1l100.1-56.3L633 185l-35.6 35.6L640 233l0 46-42.6 12.5L633 327l-28.2 38.2L504.6 308.9z" />
    </Icon>
);

export default Candy;
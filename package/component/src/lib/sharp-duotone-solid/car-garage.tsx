
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-garage` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-garage?s=sharp-duotone-solid car-garage}
 * @preview ![car-garage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car-garage.svg)
 */
const CarGarage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M4.7 170.7l29.9 56.6 28.3-15L320 76.2 577 212.3l28.3 15 29.9-56.6-28.3-15L335 11.7 320 3.8l-15 7.9L33 155.7l-28.3 15z" />
        <path d="M224 160l-21.1 0-8.3 19.4L148 288l-36 0 0 96 0 64 0 64 80 0 0-64 256 0 0 64 80 0 0-64 0-64 0-96-36 0L445.4 179.4 437.1 160 416 160l-192 0zM422.3 288l-204.7 0 27.4-64 149.8 0 27.4 64zM168 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm280-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default CarGarage;
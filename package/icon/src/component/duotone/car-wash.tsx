
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-wash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-wash?s=duotone car-wash}
 * @preview ![car-wash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/car-wash.svg)
 */
const CarWash: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 80c0 26.5 21.5 48 48 48s48-16 48-48S64 0 64 0s-48 48-48 80zm160 0c0 26.5 21.5 48 48 48s48-16 48-48s-48-80-48-80s-48 48-48 80zm160 0c0 26.5 21.5 48 48 48s48-16 48-48s-48-80-48-80s-48 48-48 80z" />
        <path d="M138.8 234.6L119.7 288l208.6 0-19.1-53.4c-2.3-6.4-8.3-10.6-15.1-10.6l-140.3 0c-6.8 0-12.8 4.3-15.1 10.6zM50.2 292.4l28.3-79.3C89.9 181.3 120 160 153.8 160l140.3 0c33.8 0 64 21.3 75.3 53.1l28.3 79.3c20.1 8.5 34.2 28.4 34.2 51.6l0 40 0 64 0 32c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-32L96 448l0 32c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-32 0-64 0-40c0-23.2 14.1-43.1 34.2-51.6zM120 368a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm232 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default CarWash;
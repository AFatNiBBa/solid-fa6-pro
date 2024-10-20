
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-garage` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-garage?s=duotone car-garage}
 * @preview ![car-garage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/car-garage.svg)
 */
const CarGarage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M12.2 205.4c5.9 10.3 16.7 16.1 27.8 16.1c5.4 0 10.8-1.4 15.8-4.2L320 66.4 584.1 217.4c5 2.9 10.5 4.2 15.8 4.2c11.1 0 21.9-5.8 27.8-16.1c8.8-15.3 3.4-34.9-11.9-43.7L343.8 6.3c-14.8-8.4-32.9-8.4-47.6 0L24.1 161.8c-15.3 8.8-20.7 28.3-11.9 43.7z" />
        <path d="M234.8 234.6L215.7 288l208.6 0-19.1-53.4c-2.3-6.4-8.3-10.6-15.1-10.6l-140.3 0c-6.8 0-12.8 4.3-15.1 10.6zm-88.6 57.8l28.3-79.3C185.9 181.3 216 160 249.8 160l140.3 0c33.8 0 64 21.3 75.3 53.1l28.3 79.3c20.1 8.5 34.2 28.4 34.2 51.6l0 40 0 64 0 32c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-32-256 0 0 32c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-32 0-64 0-40c0-23.2 14.1-43.1 34.2-51.6zM216 368a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm232 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default CarGarage;
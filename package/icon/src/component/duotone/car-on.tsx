
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-on` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-on?s=duotone car-on}
 * @preview ![car-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/car-on.svg)
 */
const CarOn: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 56c0 6.1 2.3 12.3 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L73 39c-9.4-9.4-24.6-9.4-33.9 0c-4.7 4.7-7 10.8-7 17zM232 24l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80c0-13.3-10.7-24-24-24s-24 10.7-24 24zM391 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c4.7-4.7 7-10.8 7-17s-2.3-12.3-7-17c-9.4-9.4-24.6-9.4-33.9 0L391 87z" />
        <path d="M170.8 234.6L151.7 288l208.6 0-19.1-53.4c-2.3-6.4-8.3-10.6-15.1-10.6l-140.3 0c-6.8 0-12.8 4.3-15.1 10.6zM82.2 292.4l28.3-79.3C121.9 181.3 152 160 185.8 160l140.3 0c33.8 0 64 21.3 75.3 53.1l28.3 79.3c20.1 8.5 34.2 28.4 34.2 51.6l0 40 0 64 0 32c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-32-256 0 0 32c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-32 0-64 0-40c0-23.2 14.1-43.1 34.2-51.6zM152 368a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm232 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default CarOn;
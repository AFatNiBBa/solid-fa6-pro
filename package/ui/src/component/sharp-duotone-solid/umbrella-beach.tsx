
import { Icon, generic } from "../../index";

/**
 * A component that renders the `umbrella-beach` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella-beach?s=sharp-duotone-solid umbrella-beach}
 * @preview ![umbrella-beach](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/umbrella-beach.svg)
 */
const UmbrellaBeach: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M214 448l68.1 0 75.1-206.3c-20-7.3-40.1-14.6-60.1-21.9L214 448z" />
        <path d="M434 269.7L223.5 193l3.3-9.1c18.1-49.8 45.6-95.6 80.9-135.1l4-4.5C335 18.3 371.8 8.9 404.8 20.6c.9 .3 1.9 .7 2.8 1.1c31.9 12.6 53.3 43 54.4 77.4l.2 6c1.7 52.9-6.8 105.7-24.9 155.5l-3.3 9.1zM287.8 23.1l-4 4.5c-38 42.5-67.6 91.9-87.1 145.5l-3.3 9.1-105-38.2C131.5 59.7 217 7.7 308.4 4.9C300.9 10 294 16.1 287.8 23.1zM494 98.1c-.3-8.5-1.4-16.8-3.4-24.8c65.5 61 95.9 153.9 75.2 244.3l-101.7-37 3.3-9.1c19.5-53.6 28.6-110.4 26.8-167.4l-.2-6zM32 448l512 0 32 0 0 64-32 0L32 512 0 512l0-64 32 0z" />
    </Icon>
);

export default UmbrellaBeach;
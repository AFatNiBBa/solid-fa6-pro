
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-moon-rain` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-moon-rain?s=sharp-duotone-solid cloud-moon-rain}
 * @preview ![cloud-moon-rain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cloud-moon-rain.svg)
 */
const CloudMoonRain: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 512l56 0 64-96-56 0L0 512zm96 0l56 0 64-96-56 0L96 512zm96 0l56 0 64-96-56 0-64 96zm96 0l56 0 64-96-56 0-64 96zm50.7-410.5c43.2 14.1 74.8 53.8 77 101.2c23.3 11 42.2 29.9 53.3 53.2c46.4-2 86.3-28.9 106.9-67.7c-14.8 9.4-32.4 14.9-51.2 14.9c-52.8 0-95.6-43-95.6-96c0-50.1 38.2-91.3 87-95.6C500.2 4.1 482.3 0 463.5 0C402.1 0 350.9 43.5 338.7 101.5z" />
        <path d="M367.9 383.9l80 0 0-80c0-39.3-28.4-72.1-65.8-78.7c1.2-5.6 1.9-11.3 1.9-17.2c0-44.2-35.8-80-80-80c-17 0-32.8 5.3-45.8 14.4C241.3 114.6 210.8 96 176 96c-53 0-96 43-96 96l0 1.3c-45.4 7.6-80 47.1-80 94.6l0 96 96 0 271.9 0z" />
    </Icon>
);

export default CloudMoonRain;
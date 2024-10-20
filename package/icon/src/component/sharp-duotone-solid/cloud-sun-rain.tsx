
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-sun-rain` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-sun-rain?s=sharp-duotone-solid cloud-sun-rain}
 * @preview ![cloud-sun-rain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cloud-sun-rain.svg)
 */
const CloudSunRain: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 121.3L60.7 208 0 294.7 104 312l17.3 104L160 388.9l0-97.8c-28.7-16.6-48-47.6-48-83.2c0-53 43-96 96-96c18.4 0 35.6 5.2 50.2 14.1c11.9-19.9 29.1-36.2 49.6-47.2L294.7 0 208 60.7 121.3 0 104 104 0 121.3zM144 208c0 18.5 7.8 35.1 20.3 46.8c10.6-39.7 39.9-71.8 77.8-86.4c.8-4.3 1.8-8.5 3-12.6C234.7 148.4 221.8 144 208 144c-35.3 0-64 28.7-64 64zm40 304l56 0 64-96-9.3 0L248 416l-64 96zm96 0l56 0 64-96-56 0-64 96zm96 0l56 0 64-96-56 0-64 96zm96 0l56 0 64-96-56 0-64 96z" />
        <path d="M559.9 383.9l80 0 0-80c0-39.3-28.4-72.1-65.8-78.7c1.2-5.6 1.9-11.3 1.9-17.2c0-44.2-35.8-80-80-80c-17 0-32.8 5.3-45.8 14.4C433.3 114.6 402.8 96 368 96c-53 0-96 43-96 96l0 1.3c-45.4 7.6-80 47.1-80 94.6l0 96 96 0 271.9 0z" />
    </Icon>
);

export default CloudSunRain;
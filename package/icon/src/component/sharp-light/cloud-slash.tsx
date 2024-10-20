
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-slash?s=sharp-light cloud-slash}
 * @preview ![cloud-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cloud-slash.svg)
 */
const CloudSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32.5 10L19.9 .1 .1 25.3l12.6 9.9L607.8 502.2l12.6 9.9 19.8-25.2-12.6-9.9L32.5 10zM459.9 448L144 448 32 448l0-112c0-48.7 31.1-90.2 74.7-105.6l21.3-7.5 0-22.6 0-8.2c0-2 0-4 .1-5.9L98.7 162.8C96.9 172.3 96 182 96 192l0 8.2C40.1 220 0 273.3 0 336L0 448l0 32 32 0 112 0 356.4 0-40.5-32zM256 32c-31.4 0-60.6 9-85.3 24.6L197.8 78C215.2 69 235 64 256 64c45.1 0 84.8 23.3 107.6 58.7l14.2 22 24.3-9.5c11.7-4.6 24.4-7.1 37.9-7.1c57.4 0 104 46.6 104 104l0 9.1 0 18.5 16 9.2c28.8 16.6 48 47.7 48 83.2l0 49.8 32 25.3 0-75.1c0-47.4-25.7-88.7-64-110.9l0-9.1c0-75.1-60.9-136-136-136c-17.5 0-34.2 3.3-49.5 9.3C362 61.2 312.4 32 256 32z" />
    </Icon>
);

export default CloudSlash;
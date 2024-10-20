
import { Icon, generic } from "../../index";

/**
 * A component that renders the `meter-droplet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-droplet?s=duotone meter-droplet}
 * @preview ![meter-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/meter-droplet.svg)
 */
const MeterDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c53.7 0 103.5-16.5 144.6-44.7C390 447.2 384 424.3 384 400c0-23.6 5.8-46.9 16.9-67.8l75.3-141.2c4.9-9.2 12.1-16.7 20.6-22.1C461.2 70.4 366.8 0 256 0C114.6 0 0 114.6 0 256zm128-96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32zm96 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32zm96 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32z" />
        <path d="M429.2 347.3l75.3-141.2c4.6-8.7 13.7-14.1 23.5-14.1s18.9 5.4 23.5 14.1l75.3 141.2c8.7 16.2 13.2 34.3 13.2 52.7c0 61.9-50.1 112-112 112s-112-50.1-112-112c0-18.4 4.5-36.5 13.2-52.7z" />
    </Icon>
);

export default MeterDroplet;
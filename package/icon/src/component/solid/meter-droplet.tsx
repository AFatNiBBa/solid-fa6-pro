
import { Icon } from "../../index";

/**
 * A component that renders the `meter-droplet` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-droplet?s=solid meter-droplet}
 * @preview ![meter-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/meter-droplet.svg)
 */
const MeterDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 512c53.7 0 103.5-16.5 144.6-44.7C390 447.2 384 424.3 384 400c0-23.6 5.8-46.9 16.9-67.8l75.3-141.2c4.9-9.2 12.1-16.7 20.6-22.1C461.2 70.4 366.8 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512zM192 160l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32zm96 0l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32zm96 0l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32zm120.5 46.1L429.2 347.3C420.5 363.5 416 381.6 416 400c0 61.9 50.1 112 112 112s112-50.1 112-112c0-18.4-4.5-36.5-13.2-52.7L551.5 206.1c-4.6-8.7-13.7-14.1-23.5-14.1s-18.9 5.4-23.5 14.1z" />
    </Icon>
);

export default MeterDroplet;
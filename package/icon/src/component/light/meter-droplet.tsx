
import { Icon } from "../../index";

/**
 * A component that renders the `meter-droplet` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-droplet?s=light meter-droplet}
 * @preview ![meter-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/meter-droplet.svg)
 */
const MeterDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 480c49.7 0 95.5-16.2 132.7-43.5c2.8 10.8 6.9 21.1 12 30.7C359.5 495.5 309.7 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0C366.8 0 461.2 70.4 496.8 169c-8.5 5.3-15.7 12.9-20.6 22.1l-3.8 7.1C447 102.5 359.7 32 256 32C132.3 32 32 132.3 32 256s100.3 224 224 224zM176 144l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16zm96 0l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16zm96 0l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16zm89.4 218.4c-6.2 11.6-9.4 24.5-9.4 37.6c0 44.2 35.8 80 80 80s80-35.8 80-80c0-13.1-3.2-26.1-9.4-37.6L528 230 457.4 362.4zm-28.2-15.1l75.3-141.2c4.6-8.7 13.7-14.1 23.5-14.1s18.9 5.4 23.5 14.1l75.3 141.2c8.7 16.2 13.2 34.3 13.2 52.7c0 61.9-50.1 112-112 112s-112-50.1-112-112c0-18.4 4.5-36.5 13.2-52.7z" />
    </Icon>
);

export default MeterDroplet;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-mirrors` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-mirrors?s=duotone car-mirrors}
 * @preview ![car-mirrors](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/car-mirrors.svg)
 */
const CarMirrors: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 400l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48-96 0zM141.1 192l293.8 0-26.1-74.6C404.3 104.6 392.2 96 378.6 96L197.4 96c-13.6 0-25.7 8.6-30.2 21.4c-8.7 24.9-17.4 49.7-26.1 74.6zM448 400l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48-96 0z" />
        <path d="M167.2 117.4c4.5-12.8 16.6-21.4 30.2-21.4l181.2 0c13.6 0 25.7 8.6 30.2 21.4L434.9 192l-293.8 0 26.1-74.6zM32 224l8.6 0c-5.4 9.4-8.6 20.3-8.6 32l0 144 512 0 0-144c0-11.7-3.1-22.6-8.6-32l8.6 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-52.5 0L469.2 96.3C455.7 57.8 419.4 32 378.6 32L197.4 32c-40.8 0-77.1 25.8-90.6 64.3L84.5 160 32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32zm64 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default CarMirrors;
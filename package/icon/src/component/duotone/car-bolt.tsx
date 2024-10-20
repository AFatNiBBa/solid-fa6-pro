
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-bolt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-bolt?s=duotone car-bolt}
 * @preview ![car-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/car-bolt.svg)
 */
const CarBolt: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 400l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48L0 400zm416 0l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48-96 0z" />
        <path d="M74.8 96.3L39.6 196.8C16.4 206.4 0 229.3 0 256L0 400l512 0 0-144c0-26.7-16.4-49.6-39.6-59.2L437.2 96.3C423.7 57.8 387.4 32 346.6 32L165.4 32c-40.8 0-77.1 25.8-90.6 64.3zM96 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm288 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM318.3 119.2L281.9 192l54.1 0c6.9 0 13 4.4 15.2 10.9s-.1 13.7-5.6 17.9l-128 96c-5.9 4.5-14.2 4.2-19.9-.5s-7.4-12.8-4.1-19.4L230.1 224 176 224c-6.9 0-13-4.4-15.2-10.9s.1-13.7 5.6-17.9l128-96c5.9-4.5 14.2-4.2 19.9 .5s7.4 12.8 4.1 19.4z" />
    </Icon>
);

export default CarBolt;
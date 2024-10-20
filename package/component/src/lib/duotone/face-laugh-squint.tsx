
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-laugh-squint` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-laugh-squint?s=duotone face-laugh-squint}
 * @preview ![face-laugh-squint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-laugh-squint.svg)
 */
const FaceLaughSquint: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96.8 58.1c-3.8-13.7 7.4-26.1 21.6-26.1l275.2 0c14.2 0 25.5 12.4 21.6 26.1C396.2 382 332.1 432 256 432s-140.2-50-159.2-117.9zM116 125.1c0-9 9.6-14.7 17.5-10.5c30 16 59.9 32 89.9 47.9c10.7 5.7 10.7 21.1 0 26.8c-30 16-59.9 32-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6c12-14.4 24-28.8 36-43.2c-12-14.4-24-28.8-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6zm172.6 37.4c30-16 59.9-32 89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5c0 2.8-1 5.5-2.8 7.6c-12 14.4-24 28.8-36 43.2c12 14.4 24 28.8 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5c-30-16-59.9-32-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8z" />
        <path d="M116 125.1c0-9 9.6-14.7 17.5-10.5l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6zm280 0c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z" />
    </Icon>
);

export default FaceLaughSquint;
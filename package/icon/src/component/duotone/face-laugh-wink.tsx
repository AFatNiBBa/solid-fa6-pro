
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-laugh-wink` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-laugh-wink?s=duotone face-laugh-wink}
 * @preview ![face-laugh-wink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-laugh-wink.svg)
 */
const FaceLaughWink: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96.8 58.1c-3.8-13.7 7.4-26.1 21.6-26.1l275.2 0c14.2 0 25.5 12.4 21.6 26.1C396.2 382 332.1 432 256 432s-140.2-50-159.2-117.9zM144.4 192c0-17.7 14.3-32 32-32c8.8 0 16.8 3.6 22.6 9.4c2.9 2.9 5.2 6.3 6.9 10.2c.8 1.9 1.4 3.9 1.9 6c.2 1 .4 2.1 .5 3.2c.1 .5 .1 1.1 .1 1.6s0 1 0 1.8c0 .5 0 1 0 1.5s-.1 1.1-.1 1.6c-.1 1.1-.3 2.1-.5 3.2c-.4 2.1-1.1 4.1-1.9 6c-1.6 3.8-4 7.3-6.9 10.2c-5.8 5.8-13.8 9.4-22.6 9.4c-17.7 0-32-14.3-32-32zm130.8 6.4c30.4-40.5 91.2-40.5 121.6 0c2.2 2.9 3.2 6.2 3.2 9.6c0 4.9-2.2 9.7-6.4 12.8c-7.1 5.3-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4z" />
        <path d="M176.4 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm124.4-6.4c17.6-23.5 52.8-23.5 70.4 0c5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4c-30.4-40.5-91.2-40.5-121.6 0c-5.3 7.1-3.9 17.1 3.2 22.4s17.1 3.9 22.4-3.2z" />
    </Icon>
);

export default FaceLaughWink;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-squint` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-squint?s=duotone face-grin-squint}
 * @preview ![face-grin-squint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-grin-squint.svg)
 */
const FaceGrinSquint: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm105.2 75.5c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19c12.3-3.8 24.3 6.9 19.3 18.7C382.4 390.6 324.2 432 256.3 432s-126.2-41.4-151.1-100.5zM116 157.1c0-9 9.6-14.7 17.5-10.5c30 16 59.9 32 89.9 47.9c10.7 5.7 10.7 21.1 0 26.8c-30 16-59.9 32-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6c12-14.4 24-28.8 36-43.2c-12-14.4-24-28.8-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6zm172.6 37.4c30-16 59.9-32 89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5c0 2.8-1 5.5-2.8 7.6c-12 14.4-24 28.8-36 43.2c12 14.4 24 28.8 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5c-30-16-59.9-32-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8z" />
        <path d="M116 157.1c0-9 9.6-14.7 17.5-10.5l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6zm280 0c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z" />
    </Icon>
);

export default FaceGrinSquint;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-hearts` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-hearts?s=duotone face-grin-hearts}
 * @preview ![face-grin-hearts](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-grin-hearts.svg)
 */
const FaceGrinHearts: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm97.1-67.9c4.8-17.8 23.1-28.4 40.8-23.6l16.1 4.3 4.3-16.1c4.8-17.8 23.1-28.4 40.8-23.6s28.4 23.1 23.6 40.8l-17.4 65c-1.9 7.1-8.4 11.9-15.4 11.9c-1.4 0-2.8-.2-4.2-.5l-65.1-17.4c-17.8-4.8-28.4-23.1-23.6-40.8zm8 143.4c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19c12.3-3.8 24.3 6.9 19.3 18.7C382.4 390.6 324.2 432 256.3 432s-126.2-41.4-151.1-100.5zM289.1 170c-4.8-17.8 5.8-36.1 23.6-40.8s36.1 5.8 40.9 23.6l4.3 16.1 16.1-4.3c17.8-4.8 36.1 5.8 40.8 23.6s-5.8 36.1-23.6 40.8l-65.1 17.4c-1.4 .4-2.8 .5-4.2 .5c-7.1 0-13.5-4.7-15.4-11.9l-17.4-65z" />
        <path d="M158.4 152.7c4.8-17.8 23.1-28.4 40.8-23.6s28.4 23.1 23.6 40.8l-17.4 65c-2.3 8.5-11.1 13.6-19.6 11.3l-65.1-17.4c-17.8-4.8-28.4-23.1-23.6-40.8s23.1-28.4 40.8-23.6l16.1 4.3 4.3-16.1zm195.2 0l4.3 16.1 16.1-4.3c17.8-4.8 36.1 5.8 40.8 23.6s-5.8 36.1-23.6 40.8l-65.1 17.4c-8.5 2.3-17.3-2.8-19.6-11.3l-17.4-65c-4.8-17.8 5.8-36.1 23.6-40.8s36.1 5.8 40.9 23.6z" />
    </Icon>
);

export default FaceGrinHearts;
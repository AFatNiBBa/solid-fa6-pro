
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bomb` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bomb?s=duotone bomb}
 * @preview ![bomb](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bomb.svg)
 */
const Bomb: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M352 79.7c0 4.5 3 8.7 7.2 10.2l45.7 16.8 16.8 45.8c1.5 4.4 5.8 7.5 10.4 7.5s8.9-3.1 10.4-7.5l16.5-45.8 45.7-16.8c4.2-1.5 7.2-5.7 7.2-10.2c0-4.6-3-8.9-7.2-10.4L459.1 52.4 442.6 6.5C440.7 2.6 436.5 0 432.1 0s-8.5 2.6-10.4 6.5L405.2 52.4l-46 16.8c-4.3 1.6-7.3 5.9-7.2 10.4z" />
        <path d="M281.4 105.4c12.5-12.5 32.8-12.5 45.3 0l80 80c12.5 12.5 12.5 32.8 0 45.3l-2.9 2.9c7.9 22 12.2 45.7 12.2 70.5c0 114.9-93.1 208-208 208S0 418.9 0 304S93.1 96 208 96c24.7 0 48.5 4.3 70.5 12.3l2.9-2.9zM96 296c0-57.4 46.6-104 104-104l8 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-8 0c-75.1 0-136 60.9-136 136l0 8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-8z" />
    </Icon>
);

export default Bomb;
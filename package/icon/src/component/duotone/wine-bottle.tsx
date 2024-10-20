
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wine-bottle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-bottle?s=duotone wine-bottle}
 * @preview ![wine-bottle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wine-bottle.svg)
 */
const WineBottle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M54.7 278.7c41.8-41.8 83.7-83.7 125.5-125.5c.8-.8 1.7-1.7 2.5-2.5c27.5 27.5 55.1 55.1 82.6 82.6c12.5 12.5 12.5 32.8 0 45.3c-27.6 27.6-55.2 55.2-82.7 82.7c-6.2 6.2-14.4 9.4-22.6 9.4c-4.1 0-8.2-.8-12-2.3c-1.9-.8-3.8-1.8-5.6-2.9c-.9-.6-1.7-1.2-2.6-1.9s-1.6-1.4-2.4-2.2c-27.5-27.5-55.1-55.1-82.6-82.6zM350.1 94.1c10.7-10.7 21.3-21.3 32-32l9.5-9.5c-10.6-12.6-10-31.4 1.9-43.2C399.6 3.1 407.8 0 416 0s16.4 3.1 22.6 9.4l64 64c6.2 6.2 9.4 14.4 9.4 22.6s-3.1 16.4-9.4 22.6c-11.8 11.8-30.7 12.5-43.2 1.9l-9.5 9.5c-10.7 10.7-21.3 21.3-32 32c-22.6-22.6-45.3-45.3-67.9-67.9z" />
        <path d="M350.1 94.1l67.9 67.9-16.8 16.8c-9.2 9.2-11.5 22.9-8.6 35.6c9.4 40.9-1.9 85.6-33.8 117.5L197.3 493.3c-25 25-65.5 25-90.5 0l-88-88c-25-25-25-65.5 0-90.5l36-36 82.6 82.6c12.5 12.5 32.8 12.5 45.3 0l82.7-82.7c12.5-12.5 12.5-32.8 0-45.3l-82.6-82.6c31.7-30 75.1-40.4 115-31.3c12.6 2.9 26.4 .5 35.5-8.6l16.8-16.8z" />
    </Icon>
);

export default WineBottle;
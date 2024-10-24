
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mountain` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain?s=duotone mountain}
 * @preview ![mountain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mountain.svg)
 */
const Mountain: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M135.7 191.7l59.5 79.3c.4 .5 .8 1 1.3 1.5s.9 .9 1.4 1.3c1 .8 2 1.5 3.1 2c.6 .3 1.1 .5 1.7 .7s1.2 .4 1.7 .5c1.2 .3 2.4 .4 3.6 .4c4.8 0 9.6-2.1 12.8-6.4c8.5-11.4 17.1-22.8 25.6-34.1c6-8.1 15.5-12.8 25.6-12.8l124.6 0L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L135.7 191.7z" />
        <path d="M396.6 224L272 224c-10.1 0-19.6 4.7-25.6 12.8l-25.6 34.1c-6.4 8.5-19.2 8.5-25.6 0l-59.5-79.3L8.6 394.4C3 403.3 0 413.6 0 424.1C0 455 25 480 55.9 480l400.2 0c30.9 0 55.9-25 55.9-55.9c0-10.5-3-20.8-8.6-29.7L396.6 224z" />
    </Icon>
);

export default Mountain;

import { Icon } from "../../index";

/**
 * A component that renders the `mountain` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain?s=regular mountain}
 * @preview ![mountain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mountain.svg)
 */
const Mountain: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 424.1c0 4.4-3.5 7.9-7.9 7.9L55.9 432c-4.4 0-7.9-3.5-7.9-7.9c0-1.5 .4-2.9 1.2-4.2L149.6 260l39.5 50.8c4.6 5.9 11.7 9.3 19.2 9.3s14.5-3.6 19-9.6L268 256l92 0L462.8 419.9c.8 1.3 1.2 2.7 1.2 4.2zM329.8 208L256 208c-7.6 0-14.7 3.6-19.2 9.6l-29.1 38.9-30.9-39.8L256 90.3 329.8 208zM55.9 480l400.2 0c30.9 0 55.9-25 55.9-55.9c0-10.5-3-20.8-8.6-29.7L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1C0 455 25 480 55.9 480z" />
    </Icon>
);

export default Mountain;
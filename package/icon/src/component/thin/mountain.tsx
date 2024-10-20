
import { Icon } from "../../index";

/**
 * A component that renders the `mountain` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain?s=thin mountain}
 * @preview ![mountain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mountain.svg)
 */
const Mountain: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 424.1c0 22-17.9 39.9-39.9 39.9L55.9 464c-22 0-39.9-17.9-39.9-39.9c0-7.5 2.1-14.9 6.1-21.2L130.6 229.9l55.7 55.7c3.1 3.1 8.2 3.1 11.3 0L259.3 224l118.3 0L489.9 402.9c4 6.4 6.1 13.7 6.1 21.2zM367.6 208L256 208c-2.1 0-4.2 .8-5.7 2.3L192 268.7l-50.3-50.3-2.3-2.3L238.8 57.5C242.5 51.6 249 48 256 48s13.5 3.6 17.2 9.5L367.6 208zM55.9 480l400.2 0c30.9 0 55.9-25 55.9-55.9c0-10.5-3-20.8-8.6-29.7L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1C0 455 25 480 55.9 480z" />
    </Icon>
);

export default Mountain;
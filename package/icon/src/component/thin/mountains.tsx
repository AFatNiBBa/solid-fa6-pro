
import { Icon } from "../../index";

/**
 * A component that renders the `mountains` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountains?s=thin mountains}
 * @preview ![mountains](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mountains.svg)
 */
const Mountains: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M496 424.1c0 22-17.9 39.9-39.9 39.9L55.9 464c-22 0-39.9-17.9-39.9-39.9c0-7.5 2.1-14.9 6.1-21.2L238.8 57.5C242.5 51.6 249 48 256 48s13.5 3.6 17.2 9.5L489.9 402.9c4 6.4 6.1 13.7 6.1 21.2zm-496 0C0 455 25 480 55.9 480l400.2 0 122.8 0c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 164.1 487.8 160 480 160s-15 4.1-19.1 10.7l-48.2 79L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1zM422.2 264.9L474.6 179c1.2-1.9 3.2-3 5.4-3s4.3 1.2 5.4 3l132 216.3c4.3 7.1 6.6 15.2 6.6 23.5c0 24.9-20.2 45.1-45.1 45.1l-83.6 0c10.3-10.1 16.8-24.3 16.8-39.9c0-10.5-3-20.8-8.6-29.7L422.2 264.9z" />
    </Icon>
);

export default Mountains;
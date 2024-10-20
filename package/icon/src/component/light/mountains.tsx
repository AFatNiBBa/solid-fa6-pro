
import { Icon } from "../../index";

/**
 * A component that renders the `mountains` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountains?s=light mountains}
 * @preview ![mountains](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mountains.svg)
 */
const Mountains: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 424.1c0 13.2-10.7 23.9-23.9 23.9L55.9 448C42.7 448 32 437.3 32 424.1c0-4.5 1.3-8.9 3.7-12.7L252.4 66c.8-1.3 2.2-2 3.6-2s2.9 .8 3.6 2L476.3 411.4c2.4 3.8 3.7 8.2 3.7 12.7zm-480 0C0 455 25 480 55.9 480l400.2 0 122.8 0c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 164.1 487.8 160 480 160s-15 4.1-19.1 10.7l-48.2 79L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1zM431.7 280L480 200.9 603.7 403.7c2.8 4.6 4.3 9.8 4.3 15.2c0 16.1-13 29.1-29.1 29.1l-72.2 0c3.4-7.3 5.4-15.4 5.4-23.9c0-10.5-3-20.8-8.6-29.7L431.7 280z" />
    </Icon>
);

export default Mountains;
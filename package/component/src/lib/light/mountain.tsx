
import { Icon } from "../../index";

/**
 * A component that renders the `mountain` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain?s=light mountain}
 * @preview ![mountain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mountain.svg)
 */
const Mountain: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 424.1c0 13.2-10.7 23.9-23.9 23.9L55.9 448C42.7 448 32 437.3 32 424.1c0-4.5 1.3-8.9 3.7-12.7L140.2 244.8 195.5 314c3.1 3.9 7.8 6.1 12.7 6s9.6-2.4 12.6-6.4L264 256l114.9 0 97.5 155.4c2.4 3.8 3.7 8.2 3.7 12.7zM358.8 224L256 224c-5 0-9.8 2.4-12.8 6.4l-35.6 47.5-49.4-61.8L252.4 66c.8-1.3 2.2-2 3.6-2s2.9 .8 3.6 2l99.1 158zM55.9 480l400.2 0c30.9 0 55.9-25 55.9-55.9c0-10.5-3-20.8-8.6-29.7L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1C0 455 25 480 55.9 480z" />
    </Icon>
);

export default Mountain;
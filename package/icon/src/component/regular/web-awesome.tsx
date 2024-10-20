
import { Icon } from "../../index";

/**
 * A component that renders the `web-awesome` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/web-awesome?s=regular web-awesome}
 * @preview ![web-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/web-awesome.svg)
 */
const WebAwesome: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M372.2 52c0 20.9-12.4 39-30.2 47.2L448 192l102.2-20.4 2.2-.4c-5.3-7.7-8.4-17.1-8.4-27.1c0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48l-9.8 21.8L481 442.3c-10.3 23-33.2 37.7-58.4 37.7l-205.2 0c-25.2 0-48-14.8-58.4-37.7L56.2 213.8 46.4 192C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1l2.2 .4L192 192 298.1 99.1c-17.7-8.3-30-26.3-30-47.1c0-28.7 23.3-52 52-52s52 23.3 52 52zm44.2 176.1L320 143.8l-96.4 84.3c-11.2 9.8-26.4 13.9-41 10.9L114 225.4l88.7 197.2c2.6 5.7 8.3 9.4 14.6 9.4l205.2 0c6.3 0 12-3.7 14.6-9.4L526 225.4l-68.5 13.7c-14.6 2.9-29.8-1.1-41-10.9z" />
    </Icon>
);

export default WebAwesome;
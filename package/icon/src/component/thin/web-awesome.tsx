
import { Icon } from "../../index";

/**
 * A component that renders the `web-awesome` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/web-awesome?s=thin web-awesome}
 * @preview ![web-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/web-awesome.svg)
 */
const WebAwesome: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M284.2 52a36 36 0 1 1 72 0 36 36 0 1 1 -72 0zM323 103.9L437.5 204c3.7 3.3 8.8 4.6 13.7 3.6l115.3-23.1c3.3 2.1 6.9 3.8 10.7 5L466.4 435.7c-7.8 17.2-24.9 28.3-43.8 28.3l-205.2 0c-18.9 0-36-11.1-43.8-28.3L62.9 189.6c3.8-1.2 7.4-2.9 10.7-5l115.3 23.1c4.9 1 9.9-.4 13.7-3.6L317 103.9c1.1 .1 2.1 .1 3.2 .1c1 0 1.9 0 2.9-.1zM46.4 192L159 442.3c10.3 23 33.2 37.7 58.4 37.7l205.2 0c25.2 0 48-14.8 58.4-37.7L593.6 192c25.8-.9 46.4-22 46.4-48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 10.1 3.1 19.4 8.4 27.1L448 192 342 99.2C359.8 91 372.2 72.9 372.2 52c0-28.7-23.3-52-52-52s-52 23.3-52 52c0 20.8 12.3 38.8 30 47.1L192 192 87.6 171.1c5.3-7.7 8.4-17.1 8.4-27.1c0-26.5-21.5-48-48-48S0 117.5 0 144c0 26 20.6 47.1 46.4 48zM592 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM16 144a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default WebAwesome;
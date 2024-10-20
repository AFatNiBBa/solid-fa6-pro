
import { Icon } from "../../index";

/**
 * A component that renders the `web-awesome` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/web-awesome?s=light web-awesome}
 * @preview ![web-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/web-awesome.svg)
 */
const WebAwesome: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M340.2 52a20 20 0 1 0 -40 0 20 20 0 1 0 40 0zm-42 47.1c-17.7-8.3-30-26.3-30-47.1c0-28.7 23.3-52 52-52s52 23.3 52 52c0 20.9-12.4 39-30.2 47.2L448 192l104.4-20.9c-5.3-7.7-8.4-17.1-8.4-27.1c0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48l-1.8 3.9L481 442.3c-10.3 23-33.2 37.7-58.4 37.7l-205.2 0c-25.2 0-48-14.8-58.4-37.7L48.1 195.9 46.4 192C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1L192 192 298.1 99.1zM48.2 192l-.2 0-.1 0 .1 0 .2 0zm406.1 31.4c-9.8 2-19.9-.7-27.3-7.3L320 122.5 213.1 216.1c-7.5 6.6-17.6 9.2-27.3 7.3l-99-19.8L188.2 429.1c5.2 11.5 16.6 18.9 29.2 18.9l205.2 0c12.6 0 24-7.4 29.2-18.9L553.3 203.6l-99 19.8zM592 160a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM64 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default WebAwesome;
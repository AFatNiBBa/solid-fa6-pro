
import { Icon } from "../../index";

/**
 * A component that renders the `web-awesome` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/web-awesome?s=sharp-light web-awesome}
 * @preview ![web-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/web-awesome.svg)
 */
const WebAwesome: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M300.2 52a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM342 99.2C359.8 91 372.2 72.9 372.2 52c0-28.7-23.3-52-52-52s-52 23.3-52 52c0 20.8 12.3 38.8 30 47.1L192 192 87.6 171.1c5.3-7.7 8.4-17.1 8.4-27.1c0-26.5-21.5-48-48-48S0 117.5 0 144c0 26 20.6 47.1 46.4 48l1.7 3.9L176 480l288 0L591.9 195.9l1.8-3.9c25.8-.9 46.4-22 46.4-48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 10.1 3.1 19.4 8.4 27.1L448 192 342 99.2zM47.9 192l.1 0 .2 0-.2 0-.1 0zm390.9 34.5l15.5-3.1 99-19.8L443.3 448l-246.6 0L86.7 203.6l99 19.8 15.5 3.1 11.9-10.4L320 122.5l106.9 93.6 11.9 10.4zM592 128a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM320.2 104s0 0 0 0l.2 0-.2 0zM32 144a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default WebAwesome;
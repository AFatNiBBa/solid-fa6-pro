
import { Icon } from "../../index";

/**
 * A component that renders the `truck-bolt` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-bolt?s=solid truck-bolt}
 * @preview ![truck-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/truck-bolt.svg)
 */
const TruckBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 0-96zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM270.3 87.2L233.9 160l54.1 0c6.9 0 13 4.4 15.2 10.9s-.1 13.7-5.6 17.9l-128 96c-5.9 4.5-14.2 4.2-19.9-.5s-7.4-12.8-4.1-19.4L182.1 192 128 192c-6.9 0-13-4.4-15.2-10.9s.1-13.7 5.6-17.9l128-96c5.9-4.5 14.2-4.2 19.9 .5s7.4 12.8 4.1 19.4z" />
    </Icon>
);

export default TruckBolt;
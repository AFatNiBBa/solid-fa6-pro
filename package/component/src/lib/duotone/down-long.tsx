
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-long` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-long?s=duotone down-long}
 * @preview ![down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/down-long.svg)
 */
const DownLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 288c42.7 0 85.3 0 128 0c0-42.7 0-85.3 0-128c0-53.3 0-106.7 0-160c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32z" />
        <path d="M313.4 360.5c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0L96 320l-72 0c-9.6 0-18.2 5.7-22 14.5s-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144z" />
    </Icon>
);

export default DownLong;
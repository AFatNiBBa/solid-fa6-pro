
import { Icon } from "../../index";

/**
 * A component that renders the `circle-phone-hangup` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-hangup?s=regular circle-phone-hangup}
 * @preview ![circle-phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-phone-hangup.svg)
 */
const CirclePhoneHangup: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM391.4 294l21.7-35.2c4.8-7.8 3.4-17.5-3.4-23.8c-84.9-78.6-222.6-78.6-307.5 0c-6.8 6.3-8.2 16.1-3.4 23.8L120.6 294c5.3 8.6 16.8 12.3 26.7 8.5l46.2-17.6c8.7-3.3 14.1-11.6 13.1-20.3L203.7 238c33.8-10.8 70.8-10.8 104.6 0l-2.9 26.7c-.9 8.7 4.4 16.9 13.1 20.3l46.2 17.6c9.9 3.8 21.4 .2 26.7-8.5z" />
    </Icon>
);

export default CirclePhoneHangup;
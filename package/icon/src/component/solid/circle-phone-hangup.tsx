
import { Icon } from "../../index";

/**
 * A component that renders the `circle-phone-hangup` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-hangup?s=solid circle-phone-hangup}
 * @preview ![circle-phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-phone-hangup.svg)
 */
const CirclePhoneHangup: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM391.4 310c-5.3 8.6-16.8 12.3-26.7 8.5l-46.2-17.6c-8.7-3.3-14.1-11.6-13.1-20.3l2.9-26.7c-33.8-10.8-70.8-10.8-104.6 0l2.9 26.7c.9 8.7-4.4 16.9-13.1 20.3l-46.2 17.6c-9.9 3.8-21.4 .2-26.7-8.5L98.8 274.8c-4.8-7.8-3.4-17.5 3.4-23.8c84.9-78.6 222.6-78.6 307.5 0c6.8 6.3 8.2 16.1 3.4 23.8L391.4 310z" />
    </Icon>
);

export default CirclePhoneHangup;
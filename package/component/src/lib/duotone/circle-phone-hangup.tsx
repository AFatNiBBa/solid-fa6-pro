
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-phone-hangup` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-hangup?s=duotone circle-phone-hangup}
 * @preview ![circle-phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-phone-hangup.svg)
 */
const CirclePhoneHangup: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm98.8 18.8c-4.8-7.8-3.4-17.5 3.4-23.8c42.5-39.3 98.1-59 153.7-59s111.3 19.7 153.7 59c4.1 3.8 6.3 8.9 6.3 14c0 3.4-.9 6.7-2.8 9.8L391.4 310c-5.3 8.6-16.8 12.3-26.7 8.5l-46.2-17.6c-8.7-3.3-14.1-11.6-13.1-20.3l2.9-26.7c-33.8-10.8-70.8-10.8-104.6 0l2.9 26.7c.9 8.7-4.4 16.9-13.1 20.3l-46.2 17.6c-9.9 3.8-21.4 .2-26.7-8.5L98.8 274.8z" />
        <path d="M364.7 318.5c9.9 3.8 21.4 .2 26.7-8.5l21.7-35.2c4.8-7.8 3.4-17.5-3.4-23.8c-84.9-78.6-222.6-78.6-307.5 0c-6.8 6.3-8.2 16.1-3.4 23.8L120.6 310c5.3 8.6 16.8 12.3 26.7 8.5l46.2-17.6c8.7-3.3 14.1-11.6 13.1-20.3L203.7 254c33.8-10.8 70.8-10.8 104.6 0l-2.9 26.7c-.9 8.7 4.4 16.9 13.1 20.3l46.2 17.6z" />
    </Icon>
);

export default CirclePhoneHangup;
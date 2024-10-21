
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-phone-hangup` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone-hangup?s=duotone square-phone-hangup}
 * @preview ![square-phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-phone-hangup.svg)
 */
const SquarePhoneHangup: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM66.8 274.8C62 267 63.4 257.3 70.3 251c42.5-39.3 98.1-59 153.7-59s111.3 19.7 153.7 59c4.1 3.8 6.3 8.9 6.3 14c0 3.4-.9 6.7-2.8 9.8L359.4 310c-5.3 8.6-16.8 12.3-26.7 8.5l-46.2-17.6c-8.7-3.3-14.1-11.6-13.1-20.3l2.9-26.7c-33.8-10.8-70.8-10.8-104.6 0l2.9 26.7c.9 8.7-4.4 16.9-13.1 20.3l-46.2 17.6c-9.9 3.8-21.4 .2-26.7-8.5L66.8 274.8z" />
        <path d="M332.7 318.5c9.9 3.8 21.4 .2 26.7-8.5l21.7-35.2c4.8-7.8 3.4-17.5-3.4-23.8c-84.9-78.6-222.6-78.6-307.5 0c-6.8 6.3-8.2 16.1-3.4 23.8L88.6 310c5.3 8.6 16.8 12.3 26.7 8.5l46.2-17.6c8.7-3.3 14.1-11.6 13.1-20.3L171.7 254c33.8-10.8 70.8-10.8 104.6 0l-2.9 26.7c-.9 8.7 4.4 16.9 13.1 20.3l46.2 17.6z" />
    </Icon>
);

export default SquarePhoneHangup;
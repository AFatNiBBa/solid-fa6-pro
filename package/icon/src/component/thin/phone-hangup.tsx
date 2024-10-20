
import { Icon } from "../../index";

/**
 * A component that renders the `phone-hangup` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-hangup?s=thin phone-hangup}
 * @preview ![phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/phone-hangup.svg)
 */
const PhoneHangup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M421.1 240.8c6.5 2.2 10.9 8.3 10.9 15.2l0 69.8c0 7.6 5.4 14.2 12.9 15.7l110.3 22.1c7.1 1.4 14.2-2.1 17.4-8.5l39.5-79.1c5.7-11.4 3.9-23.6-3.6-31C560.1 196.5 457.9 128 320 128S79.9 196.5 31.4 244.9c-7.5 7.4-9.3 19.7-3.6 31L67.4 355c3.2 6.5 10.4 9.9 17.4 8.5l110.3-22.1c7.5-1.5 12.9-8.1 12.9-15.7l0-69.8c0-6.9 4.4-13 10.9-15.2c65.6-21.9 136.5-21.9 202.1 0zM416 256c-62.3-20.8-129.7-20.8-192 0l0 69.8c0 15.3-10.8 28.4-25.7 31.4L88 379.2C73.8 382 59.5 375 53.1 362.1L13.5 283.1c-8.3-16.5-6.5-36.5 6.6-49.5C70.7 183.1 176.8 112 320 112s249.3 71.1 299.9 121.5c13.1 13 14.9 33 6.6 49.5l-39.5 79.1C580.5 375 566.2 382 552 379.2L441.7 357.1c-15-3-25.7-16.1-25.7-31.4l0-69.8z" />
    </Icon>
);

export default PhoneHangup;
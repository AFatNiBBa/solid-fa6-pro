
import { Icon } from "../../index";

/**
 * A component that renders the `phone-hangup` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-hangup?s=solid phone-hangup}
 * @preview ![phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/phone-hangup.svg)
 */
const PhoneHangup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M11.7 266.3l41.9 94.3c6.1 13.7 20.8 21.3 35.5 18.4l109.2-21.8c15-3 25.7-16.1 25.7-31.4V240c62.3-20.8 129.7-20.8 192 0v85.8c0 15.3 10.8 28.4 25.7 31.4L550.9 379c14.7 2.9 29.4-4.7 35.5-18.4l41.9-94.3c7.2-16.2 5.1-35.1-7.4-47.7C570.8 168.1 464.2 96 320 96S69.2 168.1 19.1 218.6c-12.5 12.6-14.6 31.5-7.4 47.7z" />
    </Icon>
);

export default PhoneHangup;
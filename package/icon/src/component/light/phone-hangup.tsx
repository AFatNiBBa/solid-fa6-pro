
import { Icon } from "../../index";

/**
 * A component that renders the `phone-hangup` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-hangup?s=light phone-hangup}
 * @preview ![phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/phone-hangup.svg)
 */
const PhoneHangup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 128C185.6 128 85.9 196.7 38.8 245c-7.2 7.4-8.9 19.3-3.5 30.5l38.3 78.6c3.3 6.7 10.7 10.3 18 8.6l88-20.5c7.2-1.7 12.4-8.1 12.4-15.6l0-86.6c0-7.1 4.7-13.4 11.6-15.4l32.9-9.4c54.6-15.6 112.4-15.6 167 0l32.9 9.4c6.9 2 11.6 8.2 11.6 15.4l0 86.6c0 7.4 5.1 13.9 12.4 15.6l88 20.5c7.3 1.7 14.7-1.9 18-8.6l38.3-78.6c5.5-11.2 3.7-23.2-3.5-30.5C554.1 196.7 454.4 128 320 128zM15.9 222.6C67.2 170.1 174.6 96 320 96s252.8 74.1 304.1 126.6c18.1 18.5 19.8 45.6 9.3 66.9l-38.3 78.6c-9.8 20.1-32.2 30.8-54 25.7l-88-20.5c-21.7-5.1-37.1-24.4-37.1-46.8l0-74.5L394.7 246c-48.8-14-100.6-14-149.4 0L224 252.1l0 74.5c0 22.3-15.4 41.7-37.1 46.8l-88 20.5c-21.8 5.1-44.2-5.6-54-25.7L6.5 289.5c-10.4-21.3-8.7-48.4 9.3-66.9z" />
    </Icon>
);

export default PhoneHangup;
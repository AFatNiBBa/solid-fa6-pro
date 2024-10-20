
import { Icon } from "../../index";

/**
 * A component that renders the `phone-volume` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-volume?s=regular phone-volume}
 * @preview ![phone-volume](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/phone-volume.svg)
 */
const PhoneVolume: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zm73 166.7c11.3-13.8 30.3-18.5 46.7-11.4l112 48c17.6 7.5 27.4 26.5 23.4 45.1l-24 112c-4 18.4-20.3 31.6-39.1 31.6c0 0 0 0 0 0c-6.1 0-12.2-.1-18.2-.4c0 0-.1 0-.1 0c0 0 0 0 0 0c-10-.4-19.8-1.1-29.6-2.2C175.2 485.6 0 295.2 0 64c0 0 0 0 0 0C0 45.1 13.2 28.8 31.6 24.9l112-24c18.7-4 37.6 5.8 45.1 23.4l48 112c7 16.4 2.4 35.4-11.4 46.7l-40.6 33.2c26.7 46 65.1 84.4 111.1 111.1L329 286.7zm133.8 78.1l-100.4-43L333 357.6c-14.9 18.2-40.8 22.9-61.2 11.1c-53.3-30.9-97.7-75.3-128.6-128.6c-11.8-20.4-7.1-46.3 11.1-61.2l35.9-29.4-43-100.4L48.1 70.5C51.5 286.2 225.8 460.5 441.5 464l21.3-99.2z" />
    </Icon>
);

export default PhoneVolume;
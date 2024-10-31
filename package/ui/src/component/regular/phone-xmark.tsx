
import { Icon } from "../../index";

/**
 * A component that renders the `phone-xmark` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-xmark?s=regular phone-xmark}
 * @preview ![phone-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/phone-xmark.svg)
 */
const PhoneXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M361 286.7c11.3-13.8 30.3-18.5 46.7-11.4l112 48c17.6 7.5 27.4 26.5 23.4 45.1l-24 112c-4 18.4-20.3 31.6-39.1 31.6c0 0 0 0 0 0c-6.1 0-12.2-.1-18.2-.4c0 0-.1 0-.1 0c0 0 0 0 0 0c-10-.4-19.8-1.1-29.6-2.2C207.2 485.6 32 295.2 32 64c0 0 0 0 0 0c0-18.9 13.2-35.2 31.6-39.1l112-24c18.7-4 37.6 5.8 45.1 23.4l48 112c7 16.4 2.4 35.4-11.4 46.7l-40.6 33.2c26.7 46 65.1 84.4 111.1 111.1L361 286.7zm133.8 78.1l-100.4-43L365 357.6c-14.9 18.2-40.8 22.9-61.2 11.1c-53.3-30.9-97.7-75.3-128.6-128.6c-11.8-20.4-7.1-46.3 11.1-61.2l35.9-29.4-43-100.4L80.1 70.5C83.5 286.2 257.8 460.5 473.5 464l21.3-99.2zM375 7c9.4-9.4 24.6-9.4 33.9 0l47 47L503 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47L375 41c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default PhoneXmark;
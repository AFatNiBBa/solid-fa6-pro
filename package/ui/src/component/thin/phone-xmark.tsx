
import { Icon } from "../../index";

/**
 * A component that renders the `phone-xmark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-xmark?s=thin phone-xmark}
 * @preview ![phone-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/phone-xmark.svg)
 */
const PhoneXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M329.8 382.5c6.6 3.1 14.6 1.3 19.2-4.3l40.4-49.3c6.7-8.2 18-11 27.8-7l96 40c11.1 4.6 17.1 16.8 13.9 28.5l-24 88C500.3 488.8 490.8 496 480 496C241.4 496 48 302.6 48 64c0-10.8 7.2-20.3 17.7-23.2l88-24c11.6-3.2 23.8 2.8 28.5 13.9l40 96c4.1 9.8 1.3 21.1-7 27.8l-49.3 40.4c-5.7 4.7-7.5 12.6-4.3 19.2c34.8 73.8 94.5 133.5 168.3 168.3zM377 318.7L336.7 368C266.2 334.7 209.2 277.7 176 207.3L225.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96c-7.7-18.6-28-28.5-47.4-23.2l-88 24C44.1 30.2 32 46 32 64c0 247.4 200.6 448 448 448c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6zM370.3 18.3c-3.1 3.1-3.1 8.2 0 11.3L436.7 96l-66.3 66.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L448 107.3l66.3 66.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L459.3 96l66.3-66.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L448 84.7 381.7 18.3c-3.1-3.1-8.2-3.1-11.3 0z" />
    </Icon>
);

export default PhoneXmark;

import { Icon } from "../../index";

/**
 * A component that renders the `phone-arrow-right` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-arrow-right?s=solid phone-arrow-right}
 * @preview ![phone-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/phone-arrow-right.svg)
 */
const PhoneArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24zM425 7l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L312 128c-13.3 0-24-10.7-24-24s10.7-24 24-24l118.1 0L391 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
    </Icon>
);

export default PhoneArrowRight;
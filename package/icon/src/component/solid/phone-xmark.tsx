
import { Icon } from "../../index";

/**
 * A component that renders the `phone-xmark` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-xmark?s=solid phone-xmark}
 * @preview ![phone-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/phone-xmark.svg)
 */
const PhoneXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M149.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L176 207.3c33.3 70.4 90.3 127.4 160.7 160.7L377 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C513.8 499.9 498 512 480 512C232.6 512 32 311.4 32 64c0-18 12.1-33.8 29.5-38.6l88-24zM367 15c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47L367 49c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default PhoneXmark;
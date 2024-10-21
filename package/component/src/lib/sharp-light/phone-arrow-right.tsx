
import { Icon } from "../../index";

/**
 * A component that renders the `phone-arrow-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-arrow-right?s=sharp-light phone-arrow-right}
 * @preview ![phone-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/phone-arrow-right.svg)
 */
const PhoneArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280.4 355.3l21.3 12.3L319 350.2l40.7-40.7L475.8 356 453.3 480l-5.3 0C218.2 480 32 293.7 32 64l0-5.3L156 36.2l46.5 116.1-40.7 40.7-17.3 17.3 12.3 21.3c29.6 51.4 72.4 94.1 123.7 123.7zM512 336L352 272l-55.6 55.6c-46.5-26.8-85.2-65.5-112-112L240 160 176 0 0 32 0 64C0 311.4 200.6 512 448 512l32 0 32-176zM411.3 12.7L400 1.4 377.4 24l11.3 11.3L449.4 96 304 96l-16 0 0 32 16 0 145.4 0-60.7 60.7L377.4 200 400 222.6l11.3-11.3 88-88L510.6 112l-11.3-11.3-88-88z" />
    </Icon>
);

export default PhoneArrowRight;

import { Icon } from "../../index";

/**
 * A component that renders the `phone-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-xmark?s=sharp-light phone-xmark}
 * @preview ![phone-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/phone-xmark.svg)
 */
const PhoneXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M312.4 355.3l21.3 12.3L351 350.2l40.7-40.7L507.8 356 485.3 480l-5.3 0C250.2 480 64 293.7 64 64l0-5.3L188 36.2l46.5 116.1-40.7 40.7-17.3 17.3 12.3 21.3c29.6 51.4 72.4 94.1 123.7 123.7zM544 336L384 272l-55.6 55.6c-46.5-26.8-85.2-65.5-112-112L272 160 208 0 32 32l0 32c0 247.4 200.6 448 448 448l32 0 32-176zM391.4 .8L368.8 23.4l11.3 11.3L433.4 88l-53.3 53.3-11.3 11.3 22.6 22.6 11.3-11.3L456 110.6l53.3 53.3 11.3 11.3 22.6-22.6-11.3-11.3L478.6 88l53.3-53.3 11.3-11.3L520.6 .8 509.3 12.1 456 65.4 402.7 12.1 391.4 .8z" />
    </Icon>
);

export default PhoneXmark;
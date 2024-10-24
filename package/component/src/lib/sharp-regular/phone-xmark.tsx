
import { Icon } from "../../index";

/**
 * A component that renders the `phone-xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-xmark?s=sharp-regular phone-xmark}
 * @preview ![phone-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/phone-xmark.svg)
 */
const PhoneXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304.4 369.2l31.9 18.4 26-26 33.2-33.2L489.7 366l-17.8 97.9C257.4 459.7 84.3 286.6 80.1 72L178 54.2l37.7 94.2-33.2 33.2-26 26 18.4 31.9c31 53.8 75.8 98.6 129.6 129.6zM544 336L384 272l-55.6 55.6c-46.5-26.8-85.2-65.5-112-112L272 160 208 0 32 32l0 32c0 247.4 200.6 448 448 448l32 0 32-176zm-6-296L504 6.1 487 23l-47 47L393 23l-17-17L342.1 40l17 17 47 47-47 47-17 17L376 201.9l17-17 47-47 47 47 17 17L537.9 168l-17-17-47-47 47-47 17-17z" />
    </Icon>
);

export default PhoneXmark;
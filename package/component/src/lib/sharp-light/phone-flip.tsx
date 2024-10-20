
import { Icon } from "../../index";

/**
 * A component that renders the `phone-flip` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-flip?s=sharp-light phone-flip}
 * @preview ![phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/phone-flip.svg)
 */
const PhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M210.3 367.6l21.3-12.3c51.4-29.6 94.1-72.4 123.7-123.7l12.2-21.3-17.3-17.3-40.7-40.7L356 36.2 480 58.7l0 5.3c0 229.7-186.3 416-416 416l-5.3 0L36.2 356l116.1-46.5L193 350.2l17.3 17.4zM160 272L0 336 32 512l32 0c247.4 0 448-200.6 448-448l0-32L336 0 272 160l55.6 55.6c-26.8 46.5-65.5 85.2-112 112L160 272z" />
    </Icon>
);

export default PhoneFlip;
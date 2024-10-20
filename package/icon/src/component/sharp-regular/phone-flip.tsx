
import { Icon } from "../../index";

/**
 * A component that renders the `phone-flip` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-flip?s=sharp-regular phone-flip}
 * @preview ![phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/phone-flip.svg)
 */
const PhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M207.7 387.5l31.9-18.4c53.8-31 98.6-75.8 129.6-129.6l18.4-31.9-26-26-33.2-33.2L366 54.2 463.9 72C459.7 286.6 286.6 459.7 72.1 463.9L54.3 366l94.2-37.7 33.2 33.2 26 26zM160 272L0 336 32 512l32 0c247.4 0 448-200.6 448-448l0-32L336 0 272 160l55.6 55.6c-26.8 46.5-65.5 85.2-112 112L160 272z" />
    </Icon>
);

export default PhoneFlip;
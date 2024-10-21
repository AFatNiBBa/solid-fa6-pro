
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-flip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-flip?s=sharp-duotone-solid phone-flip}
 * @preview ![phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/phone-flip.svg)
 */
const PhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M12.4 411.6l5.7 31.5c2.2-.3 4.4-.6 6.6-.9s4.4-.6 6.6-1c4.4-.7 8.7-1.4 13.1-2.2c8.7-1.6 17.3-3.4 25.8-5.5c17-4.1 33.7-9 50-14.8c32.5-11.6 63.5-26.5 92.5-44.3l-20.5-25c-53.7 32.4-114.6 54.1-179.7 62.2zm337-219.5c8.3 6.8 16.7 13.6 25 20.5c35.7-58 59.7-123.9 68.7-194.5c-10.5-1.9-21-3.8-31.5-5.7c-8.1 65.1-29.8 126-62.2 179.7z" />
        <path d="M443.1 18.1l36 6.5 32.8 6L512 64c0 247.4-200.6 448-448 448l-33.4 0-6-32.8-6.6-36c221.3-28.4 396.7-203.7 425.1-425zM12.4 411.6L8.6 391.2 3.1 360.5l28.4-12.9 88-40 28-12.7L167 318.7l25.1 30.7c-53.7 32.4-114.6 54.1-179.7 62.2zm337-219.5L318.7 167l-23.8-19.5 12.7-28 40-88L360.5 3.1l30.7 5.6 20.5 3.7c-8.1 65.1-29.8 126-62.2 179.7z" />
    </Icon>
);

export default PhoneFlip;
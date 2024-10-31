
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-flip` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-flip?s=duotone phone-flip}
 * @preview ![phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/phone-flip.svg)
 */
const PhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M6.3 412.3l8.5 31.2c2.2-.3 4.5-.6 6.7-.9c2.2-.3 4.5-.6 6.7-1c4.5-.7 8.9-1.4 13.3-2.2c8.8-1.6 17.6-3.4 26.2-5.4c17.3-4.1 34.3-9 50.8-14.9c33.1-11.7 64.6-26.8 94-44.9l-20.5-25C136.7 382.8 73.7 404.8 6.3 412.3zM349.4 192.1c8.3 6.8 16.7 13.6 25 20.5c36.2-58.9 60.4-125.9 69.2-197.8c-10.4-2.8-20.8-5.7-31.2-8.5c-7.5 67.4-29.5 130.4-62.9 185.8z" />
        <path d="M443.6 14.8l39 10.6C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-10.6-39c224-27.2 401.6-204.8 428.8-428.8zM6.3 412.3L1.4 394.5c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6l25.1 30.7C136.7 382.8 73.7 404.8 6.3 412.3zM349.4 192.1L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96c7.7-18.6 28-28.5 47.4-23.2l17.8 4.9c-7.5 67.4-29.5 130.4-62.9 185.8z" />
    </Icon>
);

export default PhoneFlip;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-swimming` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-swimming?s=sharp-duotone-solid person-swimming}
 * @preview ![person-swimming](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-swimming.svg)
 */
const PersonSwimming: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 64c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9s60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9s60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9l0-64c-19.3 0-38.6-6.1-54-13.1c-15.6-7.1-28.2-16.3-42-26.2c-13.9 9.9-26.4 19.1-42 26.2c-15.4 7-34.7 13.1-54 13.1s-38.6-6.1-54-13.1c-15.6-7.1-28.2-16.3-42-26.2c-13.9 9.9-26.4 19.1-42 26.2c-15.4 7-34.7 13.1-54 13.1s-38.6-6.1-54-13.1c-15.6-7.1-28.2-16.3-42-26.2c-13.9 9.9-26.4 19.1-42 26.2C38.6 345.9 19.3 352 0 352z" />
        <path d="M446.6 295.9l-134.2-115L333.3 160 448 160l32 0 0-64-32 0L320 96l-13.3 0-9.4 9.4-128 128-9.4 9.4 0 13.3 0 56.3c10.7 4 21.8 6.7 32 6.7c13 0 27.6-4.3 40.7-10.3c12-5.5 21.7-12.5 35.5-22.5l1.1-.8L288 272l19.7 14.2c13.9 10 23.6 17 35.5 22.5c13.1 6 27.7 10.3 40.7 10.3s27.6-4.3 40.7-10.3c7.6-3.5 14.4-7.6 21.9-12.7zM96 224A64 64 0 1 0 96 96a64 64 0 1 0 0 128z" />
    </Icon>
);

export default PersonSwimming;
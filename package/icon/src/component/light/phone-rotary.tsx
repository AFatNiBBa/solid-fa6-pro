
import { Icon } from "../../index";

/**
 * A component that renders the `phone-rotary` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-rotary?s=light phone-rotary}
 * @preview ![phone-rotary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/phone-rotary.svg)
 */
const PhoneRotary: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 142.4L32 192l72.9 0L86.6 224 32 224c-17.7 0-32-14.3-32-32l0-50.7c0-8.5 3.4-16.6 9.9-22.1C38.2 95.4 125.9 32 256 32s217.8 63.4 246.1 87.2c6.5 5.5 9.9 13.6 9.9 22.1l0 50.7c0 17.7-14.3 32-32 32l-54.6 0-18.3-32 72.9 0 0-49.6C453 120.1 373.2 64 256 64S59 120.1 32 142.4zm0-1.1s0 0 0 0s0 0 0 0zM32 401c0-11.1 2.9-22.1 8.4-31.8l101.1-177c10.5-18.4 29.5-30.4 50.4-32l0-32.2c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 64 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32.2c21 1.7 39.9 13.6 50.4 32l101.1 177c5.5 9.7 8.4 20.6 8.4 31.8l0 31c0 26.5-21.5 48-48 48L80 480c-26.5 0-48-21.5-48-48l0-31zM304 192l-96 0-10.9 0c-11.5 0-22.1 6.2-27.8 16.1L68.2 385.1C65.5 390 64 395.4 64 401l0 31c0 8.8 7.2 16 16 16l352 0c8.8 0 16-7.2 16-16l0-31c0-5.6-1.5-11-4.2-15.9l-101.1-177c-5.7-10-16.3-16.1-27.8-16.1L304 192zM208 320a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160z" />
    </Icon>
);

export default PhoneRotary;
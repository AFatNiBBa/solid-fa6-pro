
import { Icon } from "../../index";

/**
 * A component that renders the `phone-hangup` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-hangup?s=regular phone-hangup}
 * @preview ![phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/phone-hangup.svg)
 */
const PhoneHangup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 144C193.1 144 98.7 205.9 53.3 250.2c-4.6 4.5-6.6 12.9-2.1 21.8l36.1 71.5c1.6 3.2 5.2 4.9 8.7 4.2l102.4-20.3c3.7-.7 6.4-4 6.4-7.8l0-71.1c0-10.4 6.6-19.5 16.5-22.8l3.4-1.1c61.9-20.4 128.7-20.4 190.7 0l3.4 1.1c9.8 3.2 16.5 12.4 16.5 22.8l0 71.1c0 3.8 2.7 7.1 6.4 7.8L544 347.7c3.5 .7 7.1-1 8.7-4.2L588.8 272c4.5-8.9 2.6-17.3-2.1-21.8C541.3 205.9 446.9 144 320 144zM19.8 215.8C71.5 165.4 177.4 96 320 96s248.5 69.4 300.2 119.8c22 21.5 23.8 53.4 11.4 77.8l-36.1 71.5c-11.3 22.4-36.2 34.6-60.9 29.7L432.3 374.5c-26.2-5.2-45.1-28.2-45.1-54.9l0-53.4c-44-12-90.4-12-134.4 0l0 53.4c0 26.7-18.9 49.7-45.1 54.9L105.3 394.8c-24.7 4.9-49.6-7.3-60.9-29.7L8.3 293.6C-4 269.2-2.3 237.3 19.8 215.8z" />
    </Icon>
);

export default PhoneHangup;
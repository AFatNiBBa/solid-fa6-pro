
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-volume` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-volume?s=duotone phone-volume}
 * @preview ![phone-volume](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/phone-volume.svg)
 */
const PhoneVolume: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c1-3.5 1.4-7 1.4-10.5c0-15.8-9.4-30.6-24.6-36.9l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96C158.6 9.4 143.8 0 128 0c-3.5 0-7 .5-10.5 1.4l-88 24C12.1 30.2 0 46 0 64z" />
        <path d="M256 24c0-13.3 10.7-24 24-24C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24zm0 200a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM280 96c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default PhoneVolume;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-missed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-missed?s=duotone phone-missed}
 * @preview ![phone-missed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/phone-missed.svg)
 */
const PhoneMissed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 401.9c0 6.7 1.8 13.5 5.6 19.6L49.1 492c10.7 17.3 33.5 24.5 53.4 17l92.4-35.2c17.5-6.7 28.1-23.1 26.3-40.6l-5.8-53.3c67.6-21.7 141.5-21.7 209.1 0l-5.8 53.3c-1.9 17.4 8.8 33.9 26.3 40.6L537.5 509c5.3 2 10.8 3 16.3 3c14.9 0 29.3-7.3 37.1-20l43.5-70.5c9.6-15.5 6.7-35-6.9-47.6C542.6 295.3 431.3 256 320 256S97.4 295.3 12.5 373.9C4.3 381.6 0 391.7 0 401.9z" />
        <path d="M120 0L232 0c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-39 39 58.7 58.7C282.3 152.4 300.8 160 320 160s37.7-7.6 51.3-21.3L503 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L405.3 172.7C382.6 195.3 352 208 320 208s-62.6-12.7-85.3-35.3L176 113.9l-39 39c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2L96 24c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default PhoneMissed;
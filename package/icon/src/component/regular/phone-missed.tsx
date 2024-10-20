
import { Icon } from "../../index";

/**
 * A component that renders the `phone-missed` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-missed?s=regular phone-missed}
 * @preview ![phone-missed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/phone-missed.svg)
 */
const PhoneMissed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M120 0L232 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-54.1 0 55.4 55.4C254.2 124.3 282.5 136 312 136s57.8-11.7 78.6-32.6L487 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-96.4 96.4C394.7 167.2 354.2 184 312 184s-82.7-16.8-112.6-46.6L144 81.9l0 54.1c0 13.3-10.7 24-24 24s-24-10.7-24-24L96 24c0-13.3 10.7-24 24-24zM448 392l0 49.3c0 3.9 2.8 7.2 6.6 7.9l85.8 15.6c3.7 .7 7.4-1.3 8.8-4.8l24.7-58.8c7.4-17.6 2.5-30.9-4.4-36.9C520 321.8 432.8 272 320 272s-200 49.8-249.5 92.3c-6.9 5.9-11.8 19.3-4.4 36.9L90.8 460c1.5 3.5 5.1 5.4 8.8 4.8l85.8-15.6c3.8-.7 6.6-4 6.6-7.9l0-49.3c0-19.6 11.9-37.3 30.2-44.6c62.8-25.1 132.9-25.1 195.7 0C436 354.7 448 372.4 448 392zm-48 49.3l0-49.3c-51.4-20.5-108.6-20.5-160 0l0 49.3c0 27.1-19.4 50.3-46 55.1L108.2 512c-25.8 4.7-51.4-9.2-61.6-33.4L21.8 419.8c-13.5-32-8.9-69.3 17.4-91.9C95 280 192.9 224 320 224s225 56 280.8 103.9c26.3 22.6 30.9 59.9 17.4 91.9l-24.8 58.8c-10.2 24.2-35.8 38.1-61.6 33.4L446 496.4c-26.6-4.8-46-28-46-55.1z" />
    </Icon>
);

export default PhoneMissed;
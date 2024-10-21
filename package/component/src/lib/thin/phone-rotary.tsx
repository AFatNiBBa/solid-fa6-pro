
import { Icon } from "../../index";

/**
 * A component that renders the `phone-rotary` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-rotary?s=thin phone-rotary}
 * @preview ![phone-rotary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/phone-rotary.svg)
 */
const PhoneRotary: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48c124.8 0 209 60.9 235.8 83.4l7.9-9.4-7.9 9.4c2.5 2.1 4.2 5.5 4.2 9.8l0 50.7c0 8.8-7.2 16-16 16l-42.3 0c-6.5 0-12.4-4-14.9-10.1l-19.4-48.6c-4.3-10.8-12.8-20.5-25-25c-20-7.5-62.8-20.3-122.4-20.3s-102.4 12.8-122.4 20.3c-12.1 4.6-20.6 14.2-25 25L89.2 197.9C86.8 204 80.9 208 74.3 208L32 208c-8.8 0-16-7.2-16-16l0-50.7c0-4.3 1.7-7.8 4.2-9.8C47 108.9 131.2 48 256 48zM0 192c0 17.7 14.3 32 32 32l42.3 0c13.1 0 24.9-8 29.7-20.1l19.4-48.6c2.9-7.3 8.4-13.2 15.7-16c18.6-7 59.5-19.3 116.8-19.3s98.2 12.3 116.8 19.3c7.3 2.8 12.8 8.7 15.7 16L408 203.9c4.9 12.1 16.6 20.1 29.7 20.1l42.3 0c17.7 0 32-14.3 32-32l0-50.7c0-8.5-3.4-16.6-9.9-22.1C473.8 95.4 386.1 32 256 32S38.2 95.4 9.9 119.2C3.4 124.6 0 132.8 0 141.3L0 192zM48 401c0-8.4 2.2-16.6 6.3-23.8l101.1-177c8.5-15 24.5-24.2 41.7-24.2l117.7 0c17.2 0 33.1 9.2 41.7 24.2l101.1 177c4.1 7.3 6.3 15.5 6.3 23.8l0 31c0 17.7-14.3 32-32 32L80 464c-17.7 0-32-14.3-32-32l0-31zm-16 0l0 31c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-31c0-11.1-2.9-22.1-8.4-31.8l-101.1-177C359 172.3 337.8 160 314.9 160l-117.7 0c-23 0-44.2 12.3-55.6 32.2L40.4 369.2C34.9 378.9 32 389.9 32 401zm224-33a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm-72-56a72 72 0 1 0 144 0 72 72 0 1 0 -144 0z" />
    </Icon>
);

export default PhoneRotary;
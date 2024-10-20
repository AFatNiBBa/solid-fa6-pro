
import { Icon } from "../../index";

/**
 * A component that renders the `person-fairy` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-fairy?s=sharp-light person-fairy}
 * @preview ![person-fairy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-fairy.svg)
 */
const PersonFairy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128A64 64 0 1 1 320 0zM254.7 192l-5.3 128 6.6 0 32 0 64 0 32 0 6.6 0-5.3-128-130.6 0zM248 352l-32 0 1.3-32L224 160l192 0 6.7 160 1.3 32-32 0-8 0 0 144 0 16-32 0 0-16 0-144-64 0 0 144 0 16-32 0 0-16 0-144-8 0zm.2-224l-45.1 0C158.4 88.2 99.5 64 34.9 64L32 64l0 48c0 76.5 35.7 144.6 91.5 188.6l12.1 9.5 12.1 9.5-9.1 12.4-9.1 12.4C108.5 373.6 96 409.3 96 448l16 0c42.5 0 81.6-15.1 112-40.2l0 39.5C191.7 468 153.2 480 112 480l-32 0-16 0 0-16 0-16c0-45.7 14.7-88 39.7-122.3C40.6 275.9 0 198.7 0 112L0 48 0 32l16 0 18.9 0c84.9 0 161.1 37.1 213.4 96zM605.1 64c-64.6 0-123.5 24.2-168.2 64l-45.1 0C444 69.1 520.2 32 605.1 32L624 32l16 0 0 16 0 64c0 86.7-40.6 163.9-103.7 213.7C561.3 360 576 402.3 576 448l0 16 0 16-16 0-32 0c-41.2 0-79.7-12-112-32.7l0-39.5c30.4 25.1 69.5 40.2 112 40.2l16 0c0-38.7-12.5-74.4-33.6-103.5l-9.1-12.4-9.1-12.4 12.1-9.5 12.1-9.5C572.3 256.6 608 188.5 608 112l0-48-2.9 0z" />
    </Icon>
);

export default PersonFairy;
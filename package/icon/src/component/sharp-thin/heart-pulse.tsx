
import { Icon } from "../../index";

/**
 * A component that renders the `heart-pulse` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-pulse?s=sharp-thin heart-pulse}
 * @preview ![heart-pulse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/heart-pulse.svg)
 */
const HeartPulse: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 118.6l-11.3-11.3L220.5 83.1C198 60.6 167.5 48 135.8 48C69.6 48 16 101.6 16 167.8c0 31.8 12.6 62.2 35.1 84.7l3.5 3.5 4.6 0 79.5 0 37.9-91.1 7.1-17 7.6 16.8 65.1 144.6 56.5-112.9 7.2-14.3 7.2 14.3L356.9 256l95.9 0 4.6 0 3.5-3.5C483.4 230 496 199.5 496 167.8C496 101.6 442.4 48 376.2 48c-31.8 0-62.2 12.6-84.7 35.1l-24.2 24.2L256 118.6zM460.8 272l-8 0-11.4 0L352 272l-4.9 0-2.2-4.4L320 217.9 263.2 331.6l-7.5 15.1-6.9-15.4L184.3 188.1l-32.9 79-2.1 4.9-5.3 0-73.4 0-11.4 0-8 0L48 272l-8.2-8.2C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8l12.9 12.9L256 96l11.3-11.3 12.9-12.9c25.5-25.5 60-39.8 96-39.8C451.2 32 512 92.8 512 167.8c0 36-14.3 70.5-39.8 96L464 272l-3.2 0zM80 304l22.6 0L256 457.4 409.4 304l22.6 0L267.3 468.7 256 480l-11.3-11.3L80 304z" />
    </Icon>
);

export default HeartPulse;

import { Icon } from "../../index";

/**
 * A component that renders the `person-fairy` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-fairy?s=sharp-solid person-fairy}
 * @preview ![person-fairy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-fairy.svg)
 */
const PersonFairy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 0a64 64 0 1 1 0 128A64 64 0 1 1 320 0zM424 352l-40 0 0 160-128 0 0-160-40 0 8-192 192 0 8 192zM34.9 32c84.9 0 161.1 37.1 213.4 96l-54.9 0L182.6 384l41.4 0 0 63.3C191.7 468 153.2 480 112 480l-16 0-32 0 0-32c0-45.7 14.7-88 39.7-122.3C40.6 275.9 0 198.7 0 112L0 64 0 32l32 0 2.9 0zm411.8 96l-55 0C444 69.1 520.2 32 605.1 32l2.9 0 32 0 0 32 0 48c0 86.7-40.6 163.9-103.7 213.7C561.3 360 576 402.3 576 448l0 32-32 0-16 0c-41.2 0-79.7-12-112-32.7l0-63.3 41.4 0L446.7 128z" />
    </Icon>
);

export default PersonFairy;
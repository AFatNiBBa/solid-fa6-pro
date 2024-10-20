
import { Icon } from "../../index";

/**
 * A component that renders the `clock-one` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-one?s=thin clock-one}
 * @preview ![clock-one](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clock-one.svg)
 */
const ClockOne: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 104l0 125.6 49.3-74c2.5-3.7 7.4-4.7 11.1-2.2s4.7 7.4 2.2 11.1l-64 96c-2 2.9-5.6 4.2-9 3.2s-5.7-4.1-5.7-7.7l0-152c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default ClockOne;
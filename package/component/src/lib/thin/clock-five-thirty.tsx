
import { Icon } from "../../index";

/**
 * A component that renders the `clock-five-thirty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five-thirty?s=thin clock-five-thirty}
 * @preview ![clock-five-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clock-five-thirty.svg)
 */
const ClockFiveThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 1 480 0A240 240 0 1 1 16 256zm496 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM264 408l0-125.6 49.3 74c2.5 3.7 7.4 4.7 11.1 2.2s4.7-7.4 2.2-11.1l-64-96c-2-2.9-5.6-4.2-9-3.2s-5.7 4.1-5.7 7.7l0 152c0 4.4 3.6 8 8 8s8-3.6 8-8z" />
    </Icon>
);

export default ClockFiveThirty;
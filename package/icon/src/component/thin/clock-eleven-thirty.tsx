
import { Icon } from "../../index";

/**
 * A component that renders the `clock-eleven-thirty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eleven-thirty?s=thin clock-eleven-thirty}
 * @preview ![clock-eleven-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clock-eleven-thirty.svg)
 */
const ClockElevenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 0 480 0A240 240 0 1 0 16 256zm496 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM248 408l0-149.6-62.7-94c-2.5-3.7-1.5-8.6 2.2-11.1s8.6-1.5 11.1 2.2l64 96c.9 1.3 1.3 2.9 1.3 4.4l0 152c0 4.4-3.6 8-8 8s-8-3.6-8-8z" />
    </Icon>
);

export default ClockElevenThirty;
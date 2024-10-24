
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-light-stop` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light-stop?s=sharp-light traffic-light-stop}
 * @preview ![traffic-light-stop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/traffic-light-stop.svg)
 */
const TrafficLightStop: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 32l0 320c0 70.7 57.3 128 128 128s128-57.3 128-128l0-320L32 32zM0 0L32 0 288 0l32 0 0 32 0 320c0 88.4-71.6 160-160 160S0 440.4 0 352L0 32 0 0zM136 392a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm80 0a56 56 0 1 1 -112 0 56 56 0 1 1 112 0zM160 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm0 80a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0-136a56 56 0 1 1 0-112 56 56 0 1 1 0 112z" />
    </Icon>
);

export default TrafficLightStop;
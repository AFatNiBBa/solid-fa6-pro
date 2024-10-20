
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-light-slow` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light-slow?s=sharp-thin traffic-light-slow}
 * @preview ![traffic-light-slow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/traffic-light-slow.svg)
 */
const TrafficLightSlow: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M304 16l0 336c0 79.5-64.5 144-144 144S16 431.5 16 352L16 16l288 0zM16 0L0 0 0 16 0 352c0 88.4 71.6 160 160 160s160-71.6 160-160l0-336 0-16L304 0 16 0zM160 432a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm0-96a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm40-80a40 40 0 1 1 -80 0 40 40 0 1 1 80 0zm-96 0a56 56 0 1 0 112 0 56 56 0 1 0 -112 0zm56-96a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm0-96a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0 176a16 16 0 1 0 0 32 16 16 0 1 0 0-32z" />
    </Icon>
);

export default TrafficLightSlow;
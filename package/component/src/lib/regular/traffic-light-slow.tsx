
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-light-slow` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light-slow?s=regular traffic-light-slow}
 * @preview ![traffic-light-slow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/traffic-light-slow.svg)
 */
const TrafficLightSlow: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 48c-8.8 0-16 7.2-16 16l0 288c0 61.9 50.1 112 112 112s112-50.1 112-112l0-288c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L256 0c35.3 0 64 28.7 64 64l0 288c0 88.4-71.6 160-160 160S0 440.4 0 352L0 64zM144 376a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm64 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm0-120a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM144 136a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm64 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
    </Icon>
);

export default TrafficLightSlow;
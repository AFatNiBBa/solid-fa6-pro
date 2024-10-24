
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-cone` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-cone?s=sharp-thin traffic-cone}
 * @preview ![traffic-cone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/traffic-cone.svg)
 */
const TrafficCone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M210.4 0L216 0l80 0 5.6 0 1.9 5.3 160 448 2.7 7.5-15.1 5.4-2.7-7.5L404.6 336l-297.3 0L63.5 458.7l-2.7 7.5-15.1-5.4 2.7-7.5 160-448L210.4 0zM113.1 320l285.9 0L347.5 176l-183 0L113.1 320zm57.1-160l171.6 0L290.4 16l-68.7 0L170.2 160zM0 496l8 0 496 0 8 0 0 16-8 0L8 512l-8 0 0-16z" />
    </Icon>
);

export default TrafficCone;
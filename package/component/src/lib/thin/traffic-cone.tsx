
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-cone` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-cone?s=thin traffic-cone}
 * @preview ![traffic-cone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/traffic-cone.svg)
 */
const TrafficCone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M232.9 16l46.2 0c6.8 0 12.8 4.3 15.1 10.6L341.8 160l-171.6 0L217.8 26.6c2.3-6.4 8.3-10.6 15.1-10.6zM347.5 176l51.4 144-285.9 0 51.4-144 183 0zm57.1 160l43.8 122.7c1.5 4.2 6.1 6.3 10.2 4.8s6.3-6.1 4.8-10.2L309.2 21.2C304.7 8.5 292.6 0 279.1 0L232.9 0c-13.5 0-25.6 8.5-30.1 21.2L48.5 453.3c-1.5 4.2 .7 8.7 4.8 10.2s8.7-.7 10.2-4.8L107.4 336l297.3 0zM0 504c0 4.4 3.6 8 8 8l496 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 496c-4.4 0-8 3.6-8 8z" />
    </Icon>
);

export default TrafficCone;
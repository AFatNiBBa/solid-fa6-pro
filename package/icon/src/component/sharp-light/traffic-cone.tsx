
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-cone` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-cone?s=sharp-light traffic-cone}
 * @preview ![traffic-cone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/traffic-cone.svg)
 */
const TrafficCone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M221.2 0L232 0l48 0 10.8 0 4 10.1L482.8 480l13.2 0 16 0 0 32-16 0L16 512 0 512l0-32 16 0 13.2 0 188-469.9 4-10.1zm176 352l-282.3 0L63.6 480l384.7 0L397.2 352zm-12.8-32L333.2 192l-154.3 0L127.6 320l256.7 0zM191.6 160l128.7 0L269.2 32l-26.3 0L191.6 160z" />
    </Icon>
);

export default TrafficCone;
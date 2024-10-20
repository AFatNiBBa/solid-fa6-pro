
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-cone` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-cone?s=sharp-regular traffic-cone}
 * @preview ![traffic-cone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/traffic-cone.svg)
 */
const TrafficCone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M223.9 0L240 0l32 0 16.1 0 6.1 15L476.9 464l11.1 0 24 0 0 48-24 0L24 512 0 512l0-48 24 0 11.1 0L217.8 15l6.1-15zM386 368l-260 0L86.9 464l338.1 0-39-96zm-19.5-48L320.9 208l-129.9 0L145.5 320l221 0zM210.6 160l90.8 0L256 48.4 210.6 160z" />
    </Icon>
);

export default TrafficCone;
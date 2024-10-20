
import { Icon } from "../../index";

/**
 * A component that renders the `glass-empty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-empty?s=regular glass-empty}
 * @preview ![glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/glass-empty.svg)
 */
const GlassEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M6.3 7.8C10.9 2.8 17.3 0 24 0L360 0c6.7 0 13.1 2.8 17.7 7.8s6.8 11.6 6.2 18.3L347.7 446.2C344.5 483.4 313.3 512 276 512L108 512c-37.4 0-68.5-28.6-71.7-65.8L.1 26.1C-.5 19.4 1.8 12.7 6.3 7.8zM50.2 48l34 394.1C85.2 454.5 95.6 464 108 464L276 464c12.5 0 22.8-9.5 23.9-21.9L333.8 48 50.2 48z" />
    </Icon>
);

export default GlassEmpty;
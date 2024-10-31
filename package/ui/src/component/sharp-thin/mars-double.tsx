
import { Icon } from "../../index";

/**
 * A component that renders the `mars-double` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-double?s=sharp-thin mars-double}
 * @preview ![mars-double](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mars-double.svg)
 */
const MarsDouble: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 32l0 8 0 144 0 8-16 0 0-8 0-124.7-126 126c63.1 69.1 61.3 176.3-5.5 243.1c-48.6 48.6-118.5 62.8-179.6 42.7c4.8-4 9.5-8.2 14-12.5c53.3 14.1 112.5 .3 154.3-41.5c62.5-62.5 62.5-163.8 0-226.3l-5.7-5.7 5.7-5.7L612.7 48 488 48l-8 0 0-16 8 0 144 0 8 0zM288 32l8 0 144 0 8 0 0 8 0 144 0 8-16 0 0-8 0-124.7-126 126c28.6 31.3 46 72.9 46 118.7c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c45.7 0 87.4 17.4 118.7 46l126-126L296 48l-8 0 0-16zM176 464a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default MarsDouble;

import { Icon } from "../../index";

/**
 * A component that renders the `mars-double` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-double?s=thin mars-double}
 * @preview ![mars-double](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mars-double.svg)
 */
const MarsDouble: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M637.7 34.3c1.5 1.5 2.3 3.5 2.3 5.7l0 144c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-124.7-126 126c63.1 69.1 61.3 176.3-5.5 243.1c-48.6 48.6-118.5 62.8-179.6 42.7c4.8-4 9.5-8.2 14-12.5c53.3 14.1 112.5 .3 154.3-41.5c62.5-62.5 62.5-163.8 0-226.3c-3.1-3.1-3.1-8.2 0-11.3L612.7 48 488 48c-4.4 0-8-3.6-8-8s3.6-8 8-8l144 0c2.1 0 4.2 .8 5.7 2.3zM296 48c-4.4 0-8-3.6-8-8s3.6-8 8-8l144 0c4.4 0 8 3.6 8 8l0 144c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-124.7-126 126c28.6 31.3 46 72.9 46 118.7c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c45.7 0 87.4 17.4 118.7 46l126-126L296 48zM176 464a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default MarsDouble;
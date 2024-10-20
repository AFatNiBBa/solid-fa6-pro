
import { Icon } from "../../index";

/**
 * A component that renders the `mars-double` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-double?s=sharp-solid mars-double}
 * @preview ![mars-double](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mars-double.svg)
 */
const MarsDouble: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 32l128 0 0 128-32 32-41.4-41.4L321 204.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l53.6-53.6L288 64l32-32zM288 304A112 112 0 1 0 64 304a112 112 0 1 0 224 0zm16 164c18.9-14.8 35.2-32.8 48.1-53.1c5.2 .7 10.6 1.1 16 1.1c61.9 0 112-50.1 112-112c0-35.7-16.7-67.5-42.7-88L480 173.3l0-26.5 41.4-41.4L480 64l32-32 128 0 0 128-32 32-41.4-41.4L513 204.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176c-22.6 0-44.2-4.3-64-12z" />
    </Icon>
);

export default MarsDouble;
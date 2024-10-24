
import { Icon } from "../../index";

/**
 * A component that renders the `marker` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/marker?s=sharp-light marker}
 * @preview ![marker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/marker.svg)
 */
const Marker: typeof Icon = x => (
    <Icon {...x}>
        <path d="M6.8 478L0 512l34-6.8L160 480 485.5 154.5c17-17 26.5-40 26.5-64C512 40.5 471.5 0 421.5 0c-24 0-47 9.5-64 26.5L307.3 76.7l-48-48L248 17.4 236.7 28.7l-96 96L129.4 136 152 158.6l11.3-11.3L248 62.6l36.7 36.7L32 352 6.8 478zm34-6.8L61.5 367.8 187.3 241.9l82.7 82.7L144.2 450.5 40.8 471.2zM209.9 219.3L380.1 49.1c11-11 25.9-17.1 41.4-17.1C453.8 32 480 58.2 480 90.5c0 15.5-6.2 30.4-17.1 41.4L292.7 302.1l-82.7-82.7z" />
    </Icon>
);

export default Marker;
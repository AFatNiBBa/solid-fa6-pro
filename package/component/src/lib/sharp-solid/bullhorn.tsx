
import { Icon } from "../../index";

/**
 * A component that renders the `bullhorn` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullhorn?s=sharp-solid bullhorn}
 * @preview ![bullhorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bullhorn.svg)
 */
const Bullhorn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M440 0L426.1 0l-9.5 10.1L382 47.1C333.6 98.7 266 128 195.2 128l-3.2 0-32 0L0 128 0 352l64 0 0 160 128 0 0-160 3.2 0c70.8 0 138.4 29.3 186.8 80.9l34.7 37 9.5 10.1 13.9 0 8 0 32 0 0-32 0-147.6c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4L480 32l0-32L448 0l-8 0zM416 103.6L416 240l0 136.4C356.7 319.8 277.7 288 195.2 288l-3.2 0 0-96 3.2 0c82.4 0 161.4-31.8 220.8-88.4z" />
    </Icon>
);

export default Bullhorn;
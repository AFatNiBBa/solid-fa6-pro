
import { Icon } from "../../index";

/**
 * A component that renders the `loader` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/loader?s=sharp-thin loader}
 * @preview ![loader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/loader.svg)
 */
const Loader: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 8l0 88 0 8-16 0 0-8 0-88 0-8 16 0 0 8zm0 408l0 88 0 8-16 0 0-8 0-88 0-8 16 0 0 8zM0 248l8 0 88 0 8 0 0 16-8 0L8 264l-8 0 0-16zm416 0l88 0 8 0 0 16-8 0-88 0-8 0 0-16 8 0zM441.5 83.5l-5.7 5.7-62.2 62.2L368 157l-11.3-11.3 5.7-5.7 62.2-62.2 5.7-5.7 11.3 11.3zM147.3 377.6L85.1 439.8l-5.7 5.7L68.2 434.2l5.7-5.7L136 366.3l5.7-5.7L153 372l-5.7 5.7zM73.8 66.5l5.7 5.7L147.3 140l5.7 5.7L141.7 157l-5.7-5.7L68.2 83.5l-5.7-5.7L73.8 66.5zM373.6 366.3l62.2 62.2 5.7 5.7-11.3 11.3-5.7-5.7-62.2-62.2-5.7-5.7L368 360.7l5.7 5.7z" />
    </Icon>
);

export default Loader;
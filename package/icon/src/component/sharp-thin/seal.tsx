
import { Icon } from "../../index";

/**
 * A component that renders the `seal` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal?s=sharp-thin seal}
 * @preview ![seal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/seal.svg)
 */
const Seal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M331 75L267.3 11.3 256 0 244.7 11.3 181 75 91 75 75 75l0 16 0 90L11.3 244.7 0 256l11.3 11.3L75 331l0 90 0 16 16 0 90 0 63.7 63.7L256 512l11.3-11.3L331 437l90 0 16 0 0-16 0-90 63.7-63.7L512 256l-11.3-11.3L437 181l0-90 0-16-16 0-90 0zm90 16l0 90 0 6.6 4.7 4.7L489.4 256l-63.7 63.7-4.7 4.7 0 6.6 0 90-90 0-6.6 0-4.7 4.7L256 489.4l-63.7-63.7-4.7-4.7-6.6 0-90 0 0-90 0-6.6-4.7-4.7L22.6 256l63.7-63.7 4.7-4.7 0-6.6 0-90 90 0 6.6 0 4.7-4.7L256 22.6l63.7 63.7 4.7 4.7 6.6 0 90 0z" />
    </Icon>
);

export default Seal;
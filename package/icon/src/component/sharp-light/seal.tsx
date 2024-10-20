
import { Icon } from "../../index";

/**
 * A component that renders the `seal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal?s=sharp-light seal}
 * @preview ![seal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/seal.svg)
 */
const Seal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M331 75L278.6 22.6 256 0 233.4 22.6 181 75l-74 0L75 75l0 32 0 74L22.6 233.4 0 256l22.6 22.6L75 331l0 74 0 32 32 0 74 0 52.4 52.4L256 512l22.6-22.6L331 437l74 0 32 0 0-32 0-74 52.4-52.4L512 256l-22.6-22.6L437 181l0-74 0-32-32 0-74 0zm74 32l0 74 0 13.3 9.4 9.4L466.7 256l-52.4 52.4-9.4 9.4 0 13.3 0 74-74 0-13.3 0-9.4 9.4L256 466.7l-52.4-52.4-9.4-9.4L181 405l-74 0 0-74 0-13.3-9.4-9.4L45.3 256l52.4-52.4 9.4-9.4 0-13.3 0-74 74 0 13.3 0 9.4-9.4L256 45.3l52.4 52.4 9.4 9.4 13.3 0 74 0z" />
    </Icon>
);

export default Seal;
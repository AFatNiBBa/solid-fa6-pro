
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-up?s=sharp-regular arrow-turn-up}
 * @preview ![arrow-turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-turn-up.svg)
 */
const ArrowTurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 464L0 464l0 48 24 0 168 0 24 0 0-24 0-394.9 79 79 17 17 33.9-33.9-17-17L216 25.3l0-1.3-1.3 0L209 18.2l-17-17-17 17L169.3 24 168 24l0 1.3L55 138.2l-17 17L72 189.1l17-17 79-79L168 464 24 464z" />
    </Icon>
);

export default ArrowTurnUp;
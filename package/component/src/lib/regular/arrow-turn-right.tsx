
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-right?s=regular arrow-turn-right}
 * @preview ![arrow-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-turn-right.svg)
 */
const ArrowTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M377 369c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87L88 248c-22.1 0-40 17.9-40 40l0 168c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 288c0-48.6 39.4-88 88-88l342.1 0-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L505 207c9.4 9.4 9.4 24.6 0 33.9L377 369z" />
    </Icon>
);

export default ArrowTurnRight;
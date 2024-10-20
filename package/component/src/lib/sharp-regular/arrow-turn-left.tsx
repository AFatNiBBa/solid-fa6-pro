
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-left?s=sharp-regular arrow-turn-left}
 * @preview ![arrow-turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-turn-left.svg)
 */
const ArrowTurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 456l0 24 48 0 0-24 0-232 0-24-24 0L93.1 200l79-79 17-17L155.2 70.1l-17 17L18.2 207l-17 17 17 17 120 120 17 17L189.1 344l-17-17-79-79L464 248l0 208z" />
    </Icon>
);

export default ArrowTurnLeft;
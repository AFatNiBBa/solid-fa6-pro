
import { Icon } from "../../index";

/**
 * A component that renders the `brackets-round` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-round?s=sharp-regular brackets-round}
 * @preview ![brackets-round](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/brackets-round.svg)
 */
const BracketsRound: typeof Icon = x => (
    <Icon {...x}>
        <path d="M123.7 35.4C82 60.2 0 137.9 0 256S82 451.8 123.7 476.6l24.6-41.2C115.3 415.7 48 351.3 48 256s67.3-159.7 100.3-179.4L123.7 35.4zm264.6 0L363.7 76.6C396.7 96.3 464 160.7 464 256s-67.3 159.7-100.3 179.4l24.6 41.2C430 451.8 512 374.1 512 256s-82-195.8-123.7-220.6z" />
    </Icon>
);

export default BracketsRound;
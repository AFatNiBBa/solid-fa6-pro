
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-from-bracket` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-bracket?s=sharp-regular arrow-right-from-bracket}
 * @preview ![arrow-right-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-right-from-bracket.svg)
 */
const ArrowRightFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M168 80l24 0 0-48-24 0L24 32 0 32 0 56 0 456l0 24 24 0 144 0 24 0 0-48-24 0L48 432 48 80l120 0zM493.8 273l17-17-17-17-128-128-17-17L314.9 128l17 17 87 87L184 232l-24 0 0 48 24 0 234.9 0-87 87-17 17 33.9 33.9 17-17 128-128z" />
    </Icon>
);

export default ArrowRightFromBracket;
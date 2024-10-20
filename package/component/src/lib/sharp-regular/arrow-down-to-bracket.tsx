
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-bracket` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-bracket?s=sharp-regular arrow-down-to-bracket}
 * @preview ![arrow-down-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-down-to-bracket.svg)
 */
const ArrowDownToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M241 345l-17 17-17-17L79 217l-17-17L96 166.1l17 17 87 87L200 24l0-24 48 0 0 24 0 246.1 87-87 17-17L385.9 200l-17 17L241 345zM48 344l0 120 352 0 0-120 0-24 48 0 0 24 0 144 0 24-24 0L24 512 0 512l0-24L0 344l0-24 48 0 0 24z" />
    </Icon>
);

export default ArrowDownToBracket;
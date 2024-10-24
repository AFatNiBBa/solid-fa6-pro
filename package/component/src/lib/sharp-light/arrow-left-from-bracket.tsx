
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-from-bracket` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-from-bracket?s=sharp-light arrow-left-from-bracket}
 * @preview ![arrow-left-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-left-from-bracket.svg)
 */
const ArrowLeftFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M11.3 244.7L0 256l11.3 11.3 128 128 11.3 11.3L173.3 384l-11.3-11.3L61.3 272 336 272l16 0 0-32-16 0L61.3 240 161.9 139.3 173.3 128l-22.6-22.6-11.3 11.3-128 128zM336 448l-16 0 0 32 16 0 160 0 16 0 0-16 0-416 0-16-16 0L336 32l-16 0 0 32 16 0 144 0 0 384-144 0z" />
    </Icon>
);

export default ArrowLeftFromBracket;
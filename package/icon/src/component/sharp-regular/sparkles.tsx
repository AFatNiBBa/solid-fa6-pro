
import { Icon } from "../../index";

/**
 * A component that renders the `sparkles` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkles?s=sharp-regular sparkles}
 * @preview ![sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sparkles.svg)
 */
const Sparkles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 64L320 96l64 32 32 64 32-64 64-32L448 64 416 0 384 64zM256 320l74.3-37.2L384 256l-53.7-26.8L256 192l-37.2-74.3L192 64l-26.8 53.7L128 192 53.7 229.2 0 256l53.7 26.8L128 320l37.2 74.3L192 448l26.8-53.7L256 320zm-64 20.7l-21.1-42.1-7.2-14.3-14.3-7.2L107.3 256l42.1-21.1 14.3-7.2 7.2-14.3L192 171.3l21.1 42.1 7.2 14.3 14.3 7.2L276.7 256l-42.1 21.1-14.3 7.2-7.2 14.3L192 340.7zM416 320l-32 64-64 32 64 32 32 64 32-64 64-32-64-32-32-64z" />
    </Icon>
);

export default Sparkles;
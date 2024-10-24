
import { Icon } from "../../index";

/**
 * A component that renders the `square-quote` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quote?s=sharp-thin square-quote}
 * @preview ![square-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-quote.svg)
 */
const SquareQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM112 256l80 0 0-40 0-40-80 0 0 80zm0 16l-16 0 0-16 0-80 0-16 16 0 80 0 16 0 0 16 0 40 0 40 0 16 0 16c0 30.9-25.1 56-56 56l-8 0-8 0 0-16 8 0 8 0c22.1 0 40-17.9 40-40l0-16-80 0zm224-16l0-40 0-40-80 0 0 80 80 0zm16-80l0 40 0 40 0 16 0 16c0 30.9-25.1 56-56 56l-8 0-8 0 0-16 8 0 8 0c22.1 0 40-17.9 40-40l0-16-80 0-16 0 0-16 0-80 0-16 16 0 80 0 16 0 0 16z" />
    </Icon>
);

export default SquareQuote;
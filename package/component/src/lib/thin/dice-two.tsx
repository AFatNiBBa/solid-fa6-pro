
import { Icon } from "../../index";

/**
 * A component that renders the `dice-two` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-two?s=thin dice-two}
 * @preview ![dice-two](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/dice-two.svg)
 */
const DiceTwo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM320 336a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM112 160a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default DiceTwo;
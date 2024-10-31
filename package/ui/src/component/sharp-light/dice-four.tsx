
import { Icon } from "../../index";

/**
 * A component that renders the `dice-four` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-four?s=sharp-light dice-four}
 * @preview ![dice-four](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dice-four.svg)
 */
const DiceFour: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 384L32 448 32 64l384 0zM32 32L0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32zM152 160a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm168 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 168a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM128 376a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default DiceFour;
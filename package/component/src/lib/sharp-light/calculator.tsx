
import { Icon } from "../../index";

/**
 * A component that renders the `calculator` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calculator?s=sharp-light calculator}
 * @preview ![calculator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/calculator.svg)
 */
const Calculator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 160l0 320L32 480l0-320 320 0zm0-32L32 128l0-96 320 0 0 96zm32 0l0-96 0-32L352 0 32 0 0 0 0 32l0 96 0 16 0 16L0 480l0 32 32 0 320 0 32 0 0-32 0-320 0-16 0-16zM72 224a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm72-72a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm72-72a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM264 416a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm-56-16L80 400l-16 0 0 32 16 0 128 0 16 0 0-32-16 0z" />
    </Icon>
);

export default Calculator;

import { Icon } from "../../index";

/**
 * A component that renders the `calculator` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calculator?s=light calculator}
 * @preview ![calculator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/calculator.svg)
 */
const Calculator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 160l0 288c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-288 320 0zm0-32L32 128l0-64c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 64zm32 0l0-64c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64l0 64 0 16 0 16L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288 0-16 0-16zM72 224a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm72-72a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm72-72a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM264 416a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zM80 400c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 400z" />
    </Icon>
);

export default Calculator;
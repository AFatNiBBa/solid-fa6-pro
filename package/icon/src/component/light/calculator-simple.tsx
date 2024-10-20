
import { Icon } from "../../index";

/**
 * A component that renders the `calculator-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calculator-simple?s=light calculator-simple}
 * @preview ![calculator-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/calculator-simple.svg)
 */
const CalculatorSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c8.8 0 16 7.2 16 16l0 224 224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0 0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224L16 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l224 0 0-224c0-8.8 7.2-16 16-16zm88 96l40 0 0-40 0-8c0-8.8 7.2-16 16-16s16 7.2 16 16l0 8 0 40 40 0 8 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-8 0-40 0 0 40 0 8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-8 0-40-40 0-8 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l8 0zM53.1 341.1c6.2-6.2 16.4-6.2 22.6 0L112 377.4l36.3-36.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L134.6 400l36.3 36.3c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L112 422.6 75.7 458.9c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L89.4 400 53.1 363.7c-6.2-6.2-6.2-16.4 0-22.6zM48 96l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L48 128c-8.8 0-16-7.2-16-16s7.2-16 16-16zM336 352l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default CalculatorSimple;
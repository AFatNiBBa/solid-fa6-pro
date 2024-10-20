
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calculator-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calculator-simple?s=sharp-duotone-solid calculator-simple}
 * @preview ![calculator-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calculator-simple.svg)
 */
const CalculatorSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 224l224 0L224 0 0 0zM0 288L0 512l224 0 0-224L0 288zM48 96l16 0 96 0 16 0 0 16 0 16-16 0-96 0-16 0 0-16 0-16zm1.4 264c3.7-3.7 7.5-7.5 11.4-11.4c3.8-3.8 7.5-7.5 11.2-11.2l11.3 11.3L112 377.4l28.7-28.7L152 337.4c3.7 3.7 7.5 7.5 11.4 11.4c3.8 3.8 7.5 7.5 11.2 11.2l-11.3 11.3L134.6 400l28.7 28.7L174.6 440c-3.7 3.7-7.5 7.5-11.4 11.4c-3.8 3.8-7.5 7.5-11.2 11.2l-11.3-11.3L112 422.6 83.3 451.3 72 462.6c-3.7-3.7-7.5-7.5-11.4-11.4c-3.8-3.8-7.5-7.5-11.3-11.3l11.3-11.3L89.4 400 60.7 371.3 49.4 360zM288 0l0 224 224 0L512 0 288 0zm48 96l16 0 32 0 0-32 0-16 32 0 0 16 0 32 32 0 16 0 0 16 0 16-16 0-32 0 0 32 0 16-16 0-16 0 0-16 0-32-32 0-16 0 0-16 0-16z" />
        <path d="M416 64l0 32 32 0 16 0 0 32-16 0-32 0 0 32 0 16-32 0 0-16 0-32-32 0-16 0 0-32 16 0 32 0 0-32 0-16 32 0 0 16zM64 96l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0zM83.3 348.7L112 377.4l28.7-28.7L152 337.4 174.6 360l-11.3 11.3L134.6 400l28.7 28.7L174.6 440 152 462.6l-11.3-11.3L112 422.6 83.3 451.3 72 462.6 49.4 440l11.3-11.3L89.4 400 60.7 371.3 49.4 360 72 337.4l11.3 11.3zM288 288l224 0 0 224-224 0 0-224zm48 64l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0zm0 64l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0z" />
    </Icon>
);

export default CalculatorSimple;
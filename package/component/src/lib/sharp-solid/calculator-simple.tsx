
import { Icon } from "../../index";

/**
 * A component that renders the `calculator-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calculator-simple?s=sharp-solid calculator-simple}
 * @preview ![calculator-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/calculator-simple.svg)
 */
const CalculatorSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L224 0l0 224L0 224 0 0zM288 0L512 0l0 224-224 0L288 0zM512 288l0 224-224 0 0-224 224 0zM0 288l224 0 0 224L0 512 0 288zM416 64l0-16-32 0 0 16 0 32-32 0-16 0 0 32 16 0 32 0 0 32 0 16 32 0 0-16 0-32 32 0 16 0 0-32-16 0-32 0 0-32zM64 96L48 96l0 32 16 0 96 0 16 0 0-32-16 0L64 96zM83.3 348.7L72 337.4 49.4 360l11.3 11.3L89.4 400 60.7 428.7 49.4 440 72 462.6l11.3-11.3L112 422.6l28.7 28.7L152 462.6 174.6 440l-11.3-11.3L134.6 400l28.7-28.7L174.6 360 152 337.4l-11.3 11.3L112 377.4 83.3 348.7zM352 352l-16 0 0 32 16 0 96 0 16 0 0-32-16 0-96 0zm0 64l-16 0 0 32 16 0 96 0 16 0 0-32-16 0-96 0z" />
    </Icon>
);

export default CalculatorSimple;

import { Icon } from "../../index";

/**
 * A component that renders the `calculator-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calculator-simple?s=thin calculator-simple}
 * @preview ![calculator-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/calculator-simple.svg)
 */
const CalculatorSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c4.4 0 8 3.6 8 8l0 240 240 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-240 0 0 240c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-240L8 264c-4.4 0-8-3.6-8-8s3.6-8 8-8l240 0L248 8c0-4.4 3.6-8 8-8zm88 104l48 0 0-48 0-16c0-4.4 3.6-8 8-8s8 3.6 8 8l0 16 0 48 48 0 16 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-16 0-48 0 0 48 0 16c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-16 0-48-48 0-16 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l16 0zM50.7 338.7c3.1-3.1 8.2-3.1 11.3 0L112 388.7l49.9-49.9c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L123.3 400l49.9 49.9c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L112 411.3 62.1 461.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L100.7 400 50.7 350.1c-3.1-3.1-3.1-8.2 0-11.3zM40 104l144 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L40 120c-4.4 0-8-3.6-8-8s3.6-8 8-8zM328 360l144 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-144 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm0 64l144 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-144 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default CalculatorSimple;
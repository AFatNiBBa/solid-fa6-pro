
import { Icon } from "../../index";

/**
 * A component that renders the `taxi` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taxi?s=sharp-light taxi}
 * @preview ![taxi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/taxi.svg)
 */
const Taxi: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 0L160 0l0 16 0 48-48 0-11.9 0L96.7 75.4 52.1 224 32 224 0 224l0 32L0 416l0 16 0 16 0 64 32 0 0-64 448 0 0 64 32 0 0-64 0-16 0-16 0-160 0-32-32 0-20.1 0L415.3 75.4 411.9 64 400 64l-48 0 0-48 0-16L336 0 176 0zM320 64L192 64l0-32 128 0 0 32zm68.1 32l38.4 128-341 0L123.9 96l264.2 0zM32 256l448 0 0 160L32 416l0-160zm96 72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm280 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Taxi;
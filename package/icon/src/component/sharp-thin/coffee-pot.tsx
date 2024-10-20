
import { Icon } from "../../index";

/**
 * A component that renders the `coffee-pot` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-pot?s=sharp-thin coffee-pot}
 * @preview ![coffee-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/coffee-pot.svg)
 */
const CoffeePot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l8 0 101.2 0L120 32l8 0 334.8 0L480 32l-6.4 16-53 132.4C475.5 214.3 512 274.9 512 344c0 80-72 136-72 136l-304 0s-72-56-72-136c0-69 36.4-129.5 91-163.3L97.1 50.6c-.4-.8-.6-1.7-.8-2.6L16 48l0 168 0 8L0 224l0-8L0 40l0-8zM170.4 176l234.8 0L456.4 48 128 48l-8 0-6.5 0 56.9 128zM416 192l-256 0s0 0 0 0l7.2 0c-41.1 24.1-71.6 64.3-82.7 112l406.9 0c-11.1-47.7-41.6-87.9-82.7-112l7.2 0s0 0 0 0zm78.4 128L81.6 320c-1.1 7.8-1.6 15.9-1.6 24c0 35.2 15.9 65.9 32.8 88.4c8.4 11.2 16.8 20 23 26.1c2.3 2.3 4.4 4.1 6 5.5l292.3 0c1.6-1.4 3.6-3.3 6-5.5c6.3-6 14.7-14.9 23-26.1C480.1 409.9 496 379.2 496 344c0-8.1-.6-16.2-1.6-24z" />
    </Icon>
);

export default CoffeePot;

import { Icon } from "../../index";

/**
 * A component that renders the `coffee-pot` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-pot?s=light coffee-pot}
 * @preview ![coffee-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/coffee-pot.svg)
 */
const CoffeePot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 64c-26.5 0-48 21.5-48 48l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96C0 67.8 35.8 32 80 32l42.4 0 5.6 0 325.6 0C468.2 32 480 43.8 480 58.4c0 3.7-.8 7.3-2.3 10.7l-48.4 109c50 34.7 82.7 92.5 82.7 157.9l0 8c0 55.5-34.6 99.4-55.9 121.2C446.2 475.3 432.3 480 418 480L158 480c-14.2 0-28.1-4.7-38.1-14.8C98.6 443.4 64 399.5 64 344l0-8c0-65.4 32.7-123.2 82.7-157.9L98.3 69.1c-.7-1.6-1.3-3.4-1.7-5.1L80 64zm365 0L131 64l49.8 112 214.4 0L445 64zM416 208l-256 0s0 0 0 0c-26.4 19.9-46.5 47.7-56.7 80l369.4 0c-10.1-32.3-30.2-60.1-56.7-80c0 0 0 0 0 0zm63.2 112L96.8 320c-.5 5.3-.8 10.6-.8 16l0 8c0 42.6 27.2 78.8 46.8 98.8c2.7 2.8 7.7 5.2 15.2 5.2L418 448c7.5 0 12.5-2.4 15.2-5.2c19.6-20 46.8-56.2 46.8-98.8l0-8c0-5.4-.3-10.7-.8-16z" />
    </Icon>
);

export default CoffeePot;
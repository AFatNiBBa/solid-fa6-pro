
import { Icon } from "../../index";

/**
 * A component that renders the `burger-lettuce` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-lettuce?s=sharp-thin burger-lettuce}
 * @preview ![burger-lettuce](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/burger-lettuce.svg)
 */
const BurgerLettuce: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 224l16 0 416 0 16 0 0-16 0-16s-16-160-224-160S32 192 32 192l0 16 0 16zm432-31l0 15L48 208l0-15 .1-.5c.1-.9 .4-2.4 .7-4.3c.7-3.8 2-9.5 4.2-16.3c4.3-13.7 12.1-32 25.8-50.2C105.6 85.8 156.8 48 256 48s150.4 37.8 177.2 73.6c13.7 18.2 21.5 36.5 25.8 50.2c2.2 6.8 3.5 12.5 4.2 16.3c.4 1.9 .6 3.4 .7 4.3l.1 .5zm.1 .7s0 0 0 0s0 0 0 0zM48 464l0-64 416 0 0 64L48 464zM32 384l0 16 0 64 0 16 16 0 416 0 16 0 0-16 0-64 0-16-16 0L48 384l-16 0zM168 279.5l-2.7 1L80 311.5l-61.2-23-5.6 15 64 24 2.8 1 2.8-1 85.3-31 85.3 31 2.7 1 2.7-1 85.3-31 85.3 31 2.8 1 2.8-1 64-24-5.6-15-61.2 23-85.2-31-2.7-1-2.7 1-85.3 31-85.3-31-2.7-1zM144 144a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm240-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM256 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default BurgerLettuce;
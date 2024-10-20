
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-plus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-plus?s=duotone cart-plus}
 * @preview ![cart-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cart-plus.svg)
 */
const CartPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M120.1 32c2 4.2 3.5 8.8 4.4 13.5c15.4 80.8 30.8 161.7 46.2 242.5l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32l-411 0zM252 160c0-11 9-20 20-20l44 0c0-14.7 0-29.3 0-44c0-11 9-20 20-20s20 9 20 20l0 44 44 0c11 0 20 9 20 20s-9 20-20 20l-44 0 0 44c0 11-9 20-20 20s-20-9-20-20c0-14.7 0-29.3 0-44l-44 0c-11 0-20-9-20-20z" />
        <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c26.9 0 50 19.1 55 45.5l51.6 271c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0-11 9-20 20-20l44 0 0-44c0-11 9-20 20-20s20 9 20 20l0 44 44 0c11 0 20 9 20 20s-9 20-20 20l-44 0 0 44c0 11-9 20-20 20s-20-9-20-20l0-44-44 0c-11 0-20-9-20-20z" />
    </Icon>
);

export default CartPlus;

import { Icon } from "../../index";

/**
 * A component that renders the `cart-circle-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-circle-xmark?s=sharp-thin cart-circle-xmark}
 * @preview ![cart-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cart-circle-xmark.svg)
 */
const CartCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M8 0L0 0 0 16l8 0 49.8 0 94.4 362 1.6 6 6.2 0 160.7 0c-.5-5.3-.7-10.6-.7-16l-153.8 0-20.9-80 193.9 0c2.8-5.5 5.9-10.8 9.3-16l-207.3 0L82.7 48l471.5 0L509.1 192.5c5.5 .4 10.8 1.1 16.2 1.9L571 48l5-16-16.8 0L78.5 32 71.7 6 70.2 0 64 0 8 0zM176 432a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM368 368a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm272 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-82.3-50.3l5.7-5.7L552 300.7l-5.7 5.7L496 356.7l-50.3-50.3-5.7-5.7L428.7 312l5.7 5.7L484.7 368l-50.3 50.3-5.7 5.7L440 435.3l5.7-5.7L496 379.3l50.3 50.3 5.7 5.7L563.3 424l-5.7-5.7L507.3 368l50.3-50.3z" />
    </Icon>
);

export default CartCircleXmark;
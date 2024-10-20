
import { Icon } from "../../index";

/**
 * A component that renders the `cart-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-xmark?s=sharp-thin cart-xmark}
 * @preview ![cart-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cart-xmark.svg)
 */
const CartXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M8 0L0 0 0 16l8 0 49.8 0 94.4 362 1.6 6 6.2 0 336 0 8 0 0-16-8 0-329.8 0-20.9-80L488 288l5.9 0 1.8-5.6L574.3 32l-16.8 0L482.1 272l-341 0L71.7 6 70.2 0 64 0 8 0zM176 432a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm256-48a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM263.4 76.1L252.1 87.4l5.7 5.7L308.7 144l-50.9 50.9-5.7 5.7 11.3 11.3 5.7-5.7L320 155.3l50.9 50.9 5.7 5.7 11.3-11.3-5.7-5.7L331.3 144l50.9-50.9 5.7-5.7L376.6 76.1l-5.7 5.7L320 132.7 269.1 81.8l-5.7-5.7z" />
    </Icon>
);

export default CartXmark;
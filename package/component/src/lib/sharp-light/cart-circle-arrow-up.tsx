
import { Icon } from "../../index";

/**
 * A component that renders the `cart-circle-arrow-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-circle-arrow-up?s=sharp-light cart-circle-arrow-up}
 * @preview ![cart-circle-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cart-circle-arrow-up.svg)
 */
const CartCircleArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 0L0 0 0 32l16 0 51.2 0 77.2 339.5 2.8 12.5 12.8 0 160.7 0c-.5-5.3-.7-10.6-.7-16s.2-10.7 .7-16l-147.9 0-14.5-64 181 0c5.9-11.4 12.9-22.2 21-32L151 256 107.3 64l425.2 0-40 128c1.2 0 2.4 0 3.5 0c10 0 19.7 .8 29.2 2.4L566 64l10-32-33.5 0L100 32 95.6 12.5 92.8 0 80 0 16 0zM184 432a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM384 368a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm256 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-222.6-8L440 382.6l11.3-11.3L480 342.6l0 89.4 0 16 32 0 0-16 0-89.4 28.7 28.7L552 382.6 574.6 360l-11.3-11.3-56-56L496 281.4l-11.3 11.3-56 56L417.4 360z" />
    </Icon>
);

export default CartCircleArrowUp;
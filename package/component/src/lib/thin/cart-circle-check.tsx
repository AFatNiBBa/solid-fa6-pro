
import { Icon } from "../../index";

/**
 * A component that renders the `cart-circle-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-circle-check?s=thin cart-circle-check}
 * @preview ![cart-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/cart-circle-check.svg)
 */
const CartCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8l37.7 0C57.1 16 67 24.1 69.2 35.4l59.4 303.4c5.1 26.3 28.2 45.2 55 45.2l137.2 0c-.5-5.3-.7-10.6-.7-16l-136.5 0c-19.1 0-35.6-13.5-39.3-32.3L134.9 288l204.3 0c2.8-5.5 5.9-10.8 9.3-16l-216.7 0L88 48l439.7 0c15.5 0 26.9 14.4 23.4 29.5L523.8 194.2c5.3 .8 10.5 1.9 15.7 3.2L566.6 81.1C572.5 56 553.4 32 527.7 32L84.8 32C81 13.4 64.7 0 45.7 0L8 0zM144 464a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM496 240a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm69.7-189.7c-3.1-3.1-8.2-3.1-11.3 0L480 396.7l-42.3-42.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l48 48c3.1 3.1 8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3z" />
    </Icon>
);

export default CartCircleCheck;
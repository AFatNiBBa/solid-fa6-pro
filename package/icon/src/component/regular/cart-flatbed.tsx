
import { Icon } from "../../index";

/**
 * A component that renders the `cart-flatbed` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed?s=regular cart-flatbed}
 * @preview ![cart-flatbed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cart-flatbed.svg)
 */
const CartFlatbed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l48 0c4.4 0 8 3.6 8 8l0 352c0 30.9 25.1 56 56 56l24 0c0 26.5 21.5 48 48 48s48-21.5 48-48l192 0c0 26.5 21.5 48 48 48s48-21.5 48-48l72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-120 0-288 0-72 0c-4.4 0-8-3.6-8-8l0-352c0-30.9-25.1-56-56-56L24 0zM240 80l96 0 0 96c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8L400 163.2l39.1 26.1c4.9 3.3 11.2 3.6 16.4 .8s8.5-8.2 8.5-14.1l0-96 96 0 0 224-320 0 0-224zm-48 0l0 224c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L240 32c-26.5 0-48 21.5-48 48z" />
    </Icon>
);

export default CartFlatbed;
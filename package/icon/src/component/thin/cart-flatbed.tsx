
import { Icon } from "../../index";

/**
 * A component that renders the `cart-flatbed` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed?s=thin cart-flatbed}
 * @preview ![cart-flatbed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/cart-flatbed.svg)
 */
const CartFlatbed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 8C0 3.6 3.6 0 8 0L88 0c22.1 0 40 17.9 40 40l0 352c0 13.3 10.7 24 24 24l72 0 288 0 120 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-84.2 0c7.6 8.5 12.2 19.7 12.2 32c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-12.3 4.6-23.5 12.2-32l-216.4 0c7.6 8.5 12.2 19.7 12.2 32c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-12.3 4.6-23.5 12.2-32L152 432c-22.1 0-40-17.9-40-40l0-352c0-13.3-10.7-24-24-24L8 16c-4.4 0-8-3.6-8-8zM512 432a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM192 464a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM336 80l-96 0c-17.7 0-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-96 0 0 136c0 3.1-1.8 6-4.7 7.3s-6.2 .8-8.6-1.2L400 178.5l-50.8 43.5c-2.4 2-5.7 2.5-8.6 1.2s-4.7-4.1-4.7-7.3l0-136zm16 0l0 118.6 42.8-36.7c3-2.6 7.4-2.6 10.4 0L448 198.6 448 80l-96 0zM240 64l320 0c26.5 0 48 21.5 48 48l0 192c0 26.5-21.5 48-48 48l-320 0c-26.5 0-48-21.5-48-48l0-192c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default CartFlatbed;
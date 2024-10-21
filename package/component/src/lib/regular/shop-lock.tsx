
import { Icon } from "../../index";

/**
 * A component that renders the `shop-lock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop-lock?s=regular shop-lock}
 * @preview ![shop-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shop-lock.svg)
 */
const ShopLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 185.8c0-6.4 1.6-12.7 4.7-18.3L82.4 25C90.8 9.6 106.9 0 124.5 0l391 0c17.6 0 33.7 9.6 42.1 25l77.7 142.4c3.1 5.6 4.7 11.9 4.7 18.3c0 12.4-5.9 23.3-14.9 30.3c-9.6-16.7-23.4-30.6-39.9-40.4L515.5 48l-391 0L54.7 176l415.6 0c-18.8 11.3-34 28-43.5 48L384 224l0 248c0 22.1-17.9 40-40 40l-240 0c-22.1 0-40-17.9-40-40l0-248-25.8 0C17.1 224 0 206.9 0 185.8zM112 224l0 96 224 0 0-96-224 0zm0 240l224 0 0-96-224 0 0 96zM528 240c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l0-48z" />
    </Icon>
);

export default ShopLock;
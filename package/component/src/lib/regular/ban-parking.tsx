
import { Icon } from "../../index";

/**
 * A component that renders the `ban-parking` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-parking?s=regular ban-parking}
 * @preview ![ban-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ban-parking.svg)
 */
const BanParking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464C141.1 464 48 370.9 48 256c0-48.8 16.8-93.7 44.9-129.1L385.1 419.1C349.7 447.2 304.8 464 256 464zm80-162c24.2-17.4 40-45.9 40-78c0-53-43-96-96-96l-80 0c-10.4 0-19.6 4.9-25.5 12.6L126.9 92.9C162.3 64.8 207.2 48 256 48c114.9 0 208 93.1 208 208c0 48.8-16.8 93.7-44.9 129.1L336 302zm-120-120l0-6.1 64 0c26.5 0 48 21.5 48 48c0 18.9-11 35.3-26.9 43.1L216 182.1zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM168 265.9l0 30.1 0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 6.1 0L168 265.9z" />
    </Icon>
);

export default BanParking;
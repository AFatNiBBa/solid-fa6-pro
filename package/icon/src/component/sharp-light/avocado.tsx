
import { Icon } from "../../index";

/**
 * A component that renders the `avocado` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/avocado?s=sharp-light avocado}
 * @preview ![avocado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/avocado.svg)
 */
const Avocado: typeof Icon = x => (
    <Icon {...x}>
        <path d="M393.3 277.1l53.9-53.9c43.7-43.7 43.7-114.7 0-158.4s-114.7-43.7-158.4 0l-53.9 53.9-9.6 9.6-13.6-.3c-46.3-1-92.8 16.2-128.1 51.5c-68.7 68.7-68.7 180.2 0 248.9s180.2 68.7 248.9 0c35.3-35.3 52.5-81.8 51.5-128.1l-.3-13.6 9.6-9.6zm76.5-31.2L416 299.7c1.1 54.7-19.2 109.7-60.9 151.4c-81.2 81.2-212.9 81.2-294.2 0s-81.2-212.9 0-294.2c41.7-41.7 96.7-62 151.4-60.9l53.9-53.9c56.2-56.2 147.4-56.2 203.6 0s56.2 147.4 0 203.6zm-293.7-5.7c-38.2 38.2-40.4 88.1-16.4 112.1s73.9 21.8 112.1-16.4s40.4-88.1 16.4-112.1s-73.9-21.8-112.1 16.4zm134.8-39c41.4 41.4 28.8 112.1-16.4 157.4s-116 57.8-157.4 16.4s-28.8-112.1 16.4-157.4s116-57.8 157.4-16.4z" />
    </Icon>
);

export default Avocado;
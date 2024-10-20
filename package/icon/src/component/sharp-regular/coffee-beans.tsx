
import { Icon } from "../../index";

/**
 * A component that renders the `coffee-beans` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-beans?s=sharp-regular coffee-beans}
 * @preview ![coffee-beans](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/coffee-beans.svg)
 */
const CoffeeBeans: typeof Icon = x => (
    <Icon {...x}>
        <path d="M476.8 258c50-50 39.9-141.2-22.6-203.6S300.5-18.2 250.5 31.8s-39.9 141.2 22.6 203.6S426.8 308 476.8 258zm-77.9-76.1l32.3 50.8c-28.8 16-79.8 13.1-124.1-31.3c-33.5-33.5-43.4-70.8-39.3-99.5l29.3 46 101.8 33.9zm21.3-93.6c33.5 33.5 43.4 70.8 39.3 99.5l-29.3-46L328.4 107.8 296.1 57C324.9 41 375.8 44 420.2 88.3zM126.7 403.1l-13.1 58.8C82 452.8 48 414.7 48 352c0-47.4 19.4-80.7 42.6-98.1l-10 44.9-1.8 8.3 3.8 7.6 44.2 88.4zM208 352c0 47.4-19.4 80.8-42.6 98.1l10-44.9 1.8-8.3-3.8-7.6-44.2-88.4 13.1-58.8C174 251.2 208 289.3 208 352zM128 512c70.7 0 128-71.6 128-160s-57.3-160-128-160S0 263.6 0 352s57.3 160 128 160z" />
    </Icon>
);

export default CoffeeBeans;

import { Icon } from "../../index";

/**
 * A component that renders the `coffee-beans` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-beans?s=regular coffee-beans}
 * @preview ![coffee-beans](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/coffee-beans.svg)
 */
const CoffeeBeans: typeof Icon = x => (
    <Icon {...x}>
        <path d="M476.8 258c50-50 39.9-141.2-22.6-203.6S300.5-18.2 250.5 31.8s-39.9 141.2 22.6 203.6S426.8 308 476.8 258zm-46.6-46.7c3.5 4.1 7 9.2 10.4 14.9c-25.8 22.7-83.8 25-133.5-24.7c-28-28-39.5-58.7-40.1-84.8c27.8 29.1 60 40.6 87.3 50.3l1.4 .5c30.2 10.8 54.3 19.8 74.6 43.8zm-10-123c28 28 39.5 58.7 40.1 84.8c-27.8-29.1-60-40.6-87.3-50.3l-1.4-.5c-30.2-10.8-54.3-19.8-74.6-43.8c-3.5-4.1-7-9.2-10.4-14.9c25.8-22.7 83.8-25 133.5 24.7zM128.1 446c-.4 5.4-1.6 11.5-3.1 17.9C90.7 461.7 48 422.3 48 352c0-39.7 13.6-69.5 31.6-88.3c-.9 40.2 13.7 71.1 26.1 97.3l.6 1.3c13.7 29 24.4 52.4 21.8 83.7zM208 352c0 39.7-13.6 69.5-31.6 88.3c.9-40.2-13.7-71.1-26.1-97.3l-.6-1.3c-13.7-29-24.4-52.4-21.8-83.7c.4-5.4 1.6-11.5 3.1-17.9C165.3 242.3 208 281.7 208 352zM128 512c70.7 0 128-71.6 128-160s-57.3-160-128-160S0 263.6 0 352s57.3 160 128 160z" />
    </Icon>
);

export default CoffeeBeans;
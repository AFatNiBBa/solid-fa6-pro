
import { Icon } from "../../index";

/**
 * A component that renders the `coffee-beans` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-beans?s=sharp-solid coffee-beans}
 * @preview ![coffee-beans](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/coffee-beans.svg)
 */
const CoffeeBeans: typeof Icon = x => (
    <Icon {...x}>
        <path d="M295.8 82.2L464.5 183.3l28.8 57.5C527.7 189.4 514 110.1 458 54c-58-58-140.8-70.6-192-31.6l29.8 59.7zm-24.3 22.5L242.8 47.1C208.3 98.6 222 177.9 278 234c58 58 140.8 70.6 192 31.6l-29.8-59.7L271.5 104.7zM88.8 250.4l19-57.4C46.7 205.2 0 271.8 0 352c0 83 50 151.3 114.1 160l21.2-64.1L88.5 259.3l-1.1-4.5 1.5-4.4zm31.8 5.7l46.9 188.6 1.1 4.5-1.5 4.4-19 57.4C209.3 498.8 256 432.2 256 352c0-83-50-151.3-114.1-160l-21.2 64.1z" />
    </Icon>
);

export default CoffeeBeans;
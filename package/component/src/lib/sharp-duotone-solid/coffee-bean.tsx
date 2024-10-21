
import { Icon, generic } from "../../index";

/**
 * A component that renders the `coffee-bean` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-bean?s=sharp-duotone-solid coffee-bean}
 * @preview ![coffee-bean](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/coffee-bean.svg)
 */
const CoffeeBean: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 318.9c0-65.4 30.9-138.6 89.6-197.3C174.3 36.9 289.4 10 367.3 50.6c-21.2 42.4-42.4 84.9-63.6 127.3c-62.2 41.5-124.5 83-186.7 124.5c-1.6 1.1-3.3 2.2-4.9 3.3c-.9 1.7-1.9 3.4-2.8 5.1c-22.3 40.6-44.7 81.2-67 121.8C13.8 402.6 0 362.5 0 318.9zM81 461.6L148.5 339 335.6 214.3c1.8-1.2 3.5-2.4 5.3-3.5c.9-1.9 1.9-3.8 2.9-5.7c20.8-41.7 41.7-83.4 62.5-125c70.6 75 49.7 212.8-47.9 310.4C299.7 449.1 226.5 480 161.1 480c-28.9 0-56.2-6-80.1-18.4z" />
        <path d="M367.3 50.6c13.1 6.8 25.2 15.6 35.9 26.3c1 1 2.1 2.1 3.1 3.2L343.8 205l-2.9 5.7-5.3 3.5L148.5 339 81 461.6c-13.3-6.9-25.4-15.6-36.2-26.4c-.9-.9-1.7-1.7-2.6-2.6l67-121.8 2.8-5.1 4.9-3.3L303.7 177.9 367.3 50.6z" />
    </Icon>
);

export default CoffeeBean;
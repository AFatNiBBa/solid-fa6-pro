
import { Icon } from "../../index";

/**
 * A component that renders the `bowl-food` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-food?s=sharp-solid bowl-food}
 * @preview ![bowl-food](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bowl-food.svg)
 */
const BowlFood: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32L8.6 224C3.1 214.6 0 203.7 0 192zm0 88l0-24 512 0 0 24c0 67-39.2 124.9-96 151.8l0 48.2L96 480l0-48.2C39.2 404.9 0 347 0 280z" />
    </Icon>
);

export default BowlFood;
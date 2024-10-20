
import { Icon } from "../../index";

/**
 * A component that renders the `bowl-food` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-food?s=sharp-regular bowl-food}
 * @preview ![bowl-food](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bowl-food.svg)
 */
const BowlFood: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32L8.6 224C3.1 214.6 0 203.7 0 192zM144 431.8l0 .2 224 0 0-.2 0-30.3 27.4-13c33.7-16 58.6-47.1 66.2-84.5L50.4 304c7.6 37.4 32.5 68.5 66.2 84.5l27.4 13 0 30.3zm-48 0C46.1 408.1 9.8 360.6 1.7 304C.6 296.2 0 288.1 0 280l0-24 48 0 416 0 48 0 0 24c0 8.1-.6 16.2-1.7 24c-8.1 56.6-44.4 104.1-94.3 127.8l0 .2 0 48-48 0-224 0-48 0 0-48 0-.2z" />
    </Icon>
);

export default BowlFood;

import { Icon } from "../../index";

/**
 * A component that renders the `rocket` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rocket?s=sharp-regular rocket}
 * @preview ![rocket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rocket.svg)
 */
const Rocket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 391.8c-25.3 11-42.6 17.9-42.6 17.9l-80.8-80.8s6.9-16.5 17.9-41L0 287.6 80 128l119.9 0c2.5-4 4.9-7.7 7.3-11.3C296.6-15.1 433.7-7.9 502.7 9.3c17.2 68.9 24.5 206-107.4 295.4c-3.6 2.4-7.3 4.9-11.3 7.3L384 432 224 512l0-120.2zm-31.4-38.8c13.8-5.9 31.3-13.5 50.4-22.2c45-20.5 95.1-45.3 125.3-65.8C460 202.9 470.2 113 461.7 50.3C399 41.8 309.1 52 247 143.7C226.4 174 201.1 224 180.2 268.6c-8.8 18.7-16.5 35.9-22.5 49.5l35 35zM368 104a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
    </Icon>
);

export default Rocket;
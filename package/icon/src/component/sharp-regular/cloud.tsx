
import { Icon } from "../../index";

/**
 * A component that renders the `cloud` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud?s=sharp-regular cloud}
 * @preview ![cloud](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cloud.svg)
 */
const Cloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 200.2C40.1 220 0 273.3 0 336l0 96 0 48 48 0 96 0 368 0 80 0 48 0 0-48 0-80c0-59.6-40.8-109.8-96-124l0-20c0-70.7-57.3-128-128-128c-13.9 0-27.3 2.2-39.9 6.3C346.8 53 303.9 32 256 32C167.6 32 96 103.6 96 192l0 8.2zM592 432l-80 0-368 0-96 0 0-96c0-41.7 26.6-77.3 64-90.5l32-11.3 0-33.9 0-8.2c0-61.9 50.1-112 112-112c33.5 0 63.5 14.6 84.1 38L361 141.8l30.1-9.8c7.8-2.5 16.1-3.9 24.9-3.9c44.2 0 80 35.8 80 80l0 20 0 37.2 36 9.3c34.5 8.9 60 40.3 60 77.5l0 80z" />
    </Icon>
);

export default Cloud;
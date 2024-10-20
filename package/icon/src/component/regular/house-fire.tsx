
import { Icon } from "../../index";

/**
 * A component that renders the `house-fire` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-fire?s=regular house-fire}
 * @preview ![house-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/house-fire.svg)
 */
const HouseFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M272.5 5.7c9-7.6 22.1-7.6 31.1 0L447.9 128.2c-12.5-1.1-25.5 2.8-35.4 11.7c-4.1 3.6-8 7.3-12 11L288 55.5 112 204.8 112 432c0 17.7 14.3 32 32 32l48 0 0-152c0-22.1 17.9-40 40-40l77 0c-7.7 15.7-13.8 32-17.4 48L240 320l0 144 84.8 0c13.5 18.8 30.3 35.1 49.6 48L144 512c-44.2 0-80-35.8-80-80l0-186.5L39.5 266.3c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8l264-224zM480 512c-88.4 0-160-71.6-160-160c0-76.7 62.5-144.7 107.2-179.4c5-3.9 10.9-5.8 16.8-5.8c7.9-.1 16 3.1 22 9.2l46 46 11.3-11.3c11.7-11.7 30.6-12.7 42.3-1C624.5 268 640 320.2 640 352c0 88.4-71.6 160-160 160zm64-111.8c0-36.5-37-73-54.8-88.4c-5.4-4.7-13.1-4.7-18.5 0C453 327.1 416 363.6 416 400.2c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default HouseFire;
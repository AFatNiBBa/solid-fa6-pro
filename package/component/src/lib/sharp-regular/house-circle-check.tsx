
import { Icon } from "../../index";

/**
 * A component that renders the `house-circle-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-circle-check?s=sharp-regular house-circle-check}
 * @preview ![house-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/house-circle-check.svg)
 */
const HouseCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 .5l15.5 13.2L514.8 193c-6.2-.7-12.5-1-18.8-1c-16.8 0-33.1 2.4-48.5 6.8L288 63.5 112 212.8 112 464l80 0 0-168 0-24 24 0 132.5 0c-9.5 14.6-17 30.8-21.8 48L240 320l0 144 96 0 12.5 0c12.3 18.8 28 35.1 46.3 48L88 512l-24 0 0-24 0-234.5L39.5 274.3 8.5 237.7l264-224L288 .5zM352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm222.6-32L552 313.4l-11.3 11.3L480 385.4l-28.7-28.7L440 345.4 417.4 368l11.3 11.3 40 40L480 430.6l11.3-11.3 72-72L574.6 336z" />
    </Icon>
);

export default HouseCircleCheck;
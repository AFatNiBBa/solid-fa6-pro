
import { Icon } from "../../index";

/**
 * A component that renders the `house-circle-xmark` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-circle-xmark?s=light house-circle-xmark}
 * @preview ![house-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/house-circle-xmark.svg)
 */
const HouseCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M277.4 4c6-5.3 15.1-5.3 21.2 0L512.5 192.8c-5.4-.5-10.9-.8-16.5-.8c-10.2 0-20.2 .9-29.9 2.5L288 37.3 96 206.7 96 432c0 26.5 21.5 48 48 48l64 0 0-160c0-17.7 14.3-32 32-32l96 0c1 0 2.1 .1 3.1 .1c-5.1 10.1-9.3 20.7-12.5 31.9L240 320l0 160 16 0 80 0 24.2 0c10 12.1 21.7 22.9 34.6 32L144 512c-44.2 0-80-35.8-80-80l0-197L26.6 268C20 273.8 9.8 273.2 4 266.6S-1.2 249.8 5.4 244L277.4 4zM608 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm166.6 0l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L496 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L473.4 368l-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L496 345.4l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L518.6 368z" />
    </Icon>
);

export default HouseCircleXmark;
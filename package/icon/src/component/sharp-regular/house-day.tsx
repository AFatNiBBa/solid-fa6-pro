
import { Icon } from "../../index";

/**
 * A component that renders the `house-day` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-day?s=sharp-regular house-day}
 * @preview ![house-day](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/house-day.svg)
 */
const HouseDay: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 0L119.6 62.4 46.9 46.9l15.6 72.7L0 160l62.4 40.4L46.9 273.1l72.7-15.6 7.9 12.2 21.1-17.2L163 240.9c-1 0-2 .1-2.9 .1c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80c0 6.6-.8 12.9-2.3 19.1l50.1-40.8-30.3-19.6 15.6-72.7L200.4 62.4 160 0zm48 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm207-50.7l-15-12-15 12-200 160-18.7 15 30 37.5 18.7-15 9-7.2L224 488l0 24 24 0 304 0 24 0 0-24 0-188.5 9 7.2 18.7 15 30-37.5-18.7-15-200-160zM528 261.1L528 464l-256 0 0-202.9L400 158.7 528 261.1zM352 288l0 96 96 0 0-96-96 0z" />
    </Icon>
);

export default HouseDay;
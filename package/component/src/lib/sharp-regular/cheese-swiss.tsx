
import { Icon } from "../../index";

/**
 * A component that renders the `cheese-swiss` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese-swiss?s=sharp-regular cheese-swiss}
 * @preview ![cheese-swiss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cheese-swiss.svg)
 */
const CheeseSwiss: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 432l0-128 284.2 0c8.8 9.8 21.6 16 35.8 16s27-6.2 35.8-16l60.2 0 0 128L48 432zM368 224c-20.9 0-38.7 13.4-45.3 32L78.2 256l118.2-91.9C204 180.6 220.7 192 240 192c26.5 0 48-21.5 48-48c0-15.1-7-28.5-17.8-37.3l33.4-26C393.5 88.6 464 164.1 464 256l-50.7 0c-6.6-18.6-24.4-32-45.3-32zM288 32L0 256 0 432l0 48 48 0 416 0 48 0 0-48 0-176C512 132.3 411.7 32 288 32zM176 416a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default CheeseSwiss;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice?s=duotone dice}
 * @preview ![dice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dice.svg)
 */
const Dice: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M13.3 224c0 18.4 7 36.9 21.1 50.9L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3C260.9 20.3 242.4 13.3 224 13.3s-36.9 7-50.9 21.1L34.3 173.1C20.3 187.1 13.3 205.6 13.3 224zM120 224a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM248 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 128a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 128a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM376 224a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm128 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 176a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM320 448l0-34.2L436.3 297.5c28.6-28.6 37-69.6 25.4-105.5L576 192c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64zm160-72a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Dice;
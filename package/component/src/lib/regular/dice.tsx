
import { Icon } from "../../index";

/**
 * A component that renders the `dice` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice?s=regular dice}
 * @preview ![dice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/dice.svg)
 */
const Dice: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M241 68.3c-9.4-9.4-24.6-9.4-33.9 0L68.3 207c-9.4 9.4-9.4 24.6 0 33.9L207 379.7c9.4 9.4 24.6 9.4 33.9 0L379.7 241c9.4-9.4 9.4-24.6 0-33.9L241 68.3zM173.1 34.3c28.1-28.1 73.7-28.1 101.8 0L413.7 173.1c28.1 28.1 28.1 73.7 0 101.8L274.9 413.7c-28.1 28.1-73.7 28.1-101.8 0L34.3 274.9c-28.1-28.1-28.1-73.7 0-101.8L173.1 34.3zM320 413.8L436.3 297.5c28.6-28.6 37-69.6 25.4-105.5L576 192c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-34.2zM504 352a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM120 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm104-56a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm0 208a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM328 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-104 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Dice;

import { Icon } from "../../index";

/**
 * A component that renders the `receipt` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/receipt?s=sharp-regular receipt}
 * @preview ![receipt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/receipt.svg)
 */
const Receipt: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M93.5 437.1L73.2 426.9l-20.7 9.2-4.5 2L48 73.9l4.5 2 20.7 9.2L93.5 74.9l41-20.5 33.7 19.3L192 87.3l23.8-13.6 33.7-19.3 41 20.5 20.3 10.1 20.7-9.2 4.5-2 0 364.3-4.5-2-20.7-9.2-20.3 10.1-41 20.5-33.7-19.3L192 424.7l-23.8 13.6-33.7 19.3-41-20.5zM0 512l48-21.3L72 480l64 32 56-32 56 32 64-32 24 10.7L384 512l0-52.5 0-406.9L384 0 336 21.3 312 32 248 0 192 32 136 0 72 32 48 21.3 0 0 0 52.5 0 459.5 0 512zM120 144l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0zM96 320l0 48 24 0 144 0 24 0 0-48-24 0-144 0-24 0zm24-88l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default Receipt;
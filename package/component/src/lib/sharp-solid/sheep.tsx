
import { Icon } from "../../index";

/**
 * A component that renders the `sheep` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sheep?s=sharp-solid sheep}
 * @preview ![sheep](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sheep.svg)
 */
const Sheep: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 135.8l14.5 6.2 22.1 9.5 18.9-44.1-22.1-9.5L554.3 74.3 512 32l-64 0L405.7 74.3 350.5 97.9l-22.1 9.5 18.9 44.1 22.1-9.5 14.5-6.2L384 288l192 0 0-152.2zM464 128a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM286.5 90.6l15.8-6.8C290.6 71.6 274.2 64 256 64c-19.2 0-36.5 8.5-48.2 21.9C196.9 77.2 183 72 168 72c-30.1 0-55.3 20.8-62.2 48.8c-3.2-.5-6.5-.8-9.8-.8c-35.3 0-64 28.7-64 64c0 5.3 .7 10.5 1.9 15.5C13.7 210.3 0 231.5 0 256s13.7 45.7 33.9 56.5c-1.2 5-1.9 10.2-1.9 15.5c0 35.3 28.7 64 64 64c.5 0 1 0 1.5 0L120 512l88 0 0-85.7c11.7 13.3 28.9 21.7 48 21.7s36.3-8.4 48-21.7l0 85.7 88 0 22.5-120c.5 0 1 0 1.5 0c35.3 0 64-28.7 64-64c0-2.7-.2-5.4-.5-8L352 320l0-135.6-21.4 9.2L286.5 90.6z" />
    </Icon>
);

export default Sheep;
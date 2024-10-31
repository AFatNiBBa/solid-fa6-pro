
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wheat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wheat?s=sharp-duotone-solid wheat}
 * @preview ![wheat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wheat.svg)
 */
const Wheat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2.7 464L48 509.3l22.6-22.6 52.9-52.9c-3.5-3.5-6.9-6.9-10.4-10.4c-11.6-11.6-23.2-23.2-34.8-34.8L25.4 441.4 2.7 464zm142.9-95.9c1-.3 1.9-.5 2.9-.8c1-.3 2-.5 2.9-.7c2-.5 3.9-.9 5.9-1.2c4-.7 8-1.3 12-1.7c8-.7 16.1-.7 24.1 .1l31.9-31.9c-3.5-3.5-6.9-6.9-10.4-10.4c-11.6-11.6-23.1-23.1-34.8-34.8l-30.5 30.5c2.1 17 .8 34.4-4 51zM247.5 266.3c1.1-.3 2-.5 2.8-.8c1.1-.3 2-.5 3-.7c2-.5 4-.9 5.9-1.3c4-.7 8-1.3 12-1.7c8-.7 16.1-.7 24.1 .1l31.9-31.9c-3.5-3.5-6.9-6.9-10.4-10.4c-10.7-10.7-21.4-21.4-32.1-32.1l-2.7-2.7-30.5 30.5c2.1 17 .8 34.4-4 51z" />
        <path d="M472 0c-48.6 0-88 39.4-88 88l0 40 40 0c48.6 0 88-39.4 88-88l0-40L472 0zM316.8 38.6L294.2 16 271.5 38.6c-37.5 37.5-37.5 98.3 0 135.8l45.3 45.3s0 0 0 0l22.6 22.6c37.5 37.5 98.3 37.5 135.8 0l22.6-22.6L475.2 197c-34.1-34.1-82.6-44.9-125.9-32.5c12.4-43.3 1.5-91.8-32.5-125.9zM192.3 117.8l-22.6 22.6c-37.5 37.5-37.5 98.3 0 135.8L215 321.5s0 0 0 0l22.6 22.6c37.5 37.5 98.3 37.5 135.8 0L396 321.5l-22.6-22.6c-34.1-34.1-82.6-44.9-125.9-32.5C259.9 223 249 174.5 215 140.5l-22.6-22.6zM113.1 242.3L90.5 219.6 67.9 242.3c-37.5 37.5-37.5 98.3 0 135.8l45.3 45.3s0 0 0 0l22.6 22.6c37.5 37.5 98.3 37.5 135.8 0l22.6-22.6-22.6-22.6c-34.1-34.1-82.6-44.9-125.9-32.5c12.4-43.3 1.5-91.8-32.5-125.9z" />
    </Icon>
);

export default Wheat;

import { Icon } from "../../index";

/**
 * A component that renders the `melon` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/melon?s=sharp-regular melon}
 * @preview ![melon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/melon.svg)
 */
const Melon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256c0-35.6-8.9-69.1-24.7-98.4c-5.8 53.3-27.3 124.6-92.2 189.5s-136.2 86.4-189.5 92.2C186.9 455.1 220.4 464 256 464c114.9 0 208-93.1 208-208zM79.1 365.5c7.4-59.4 28.3-143.2 85.7-200.6c62.2-62.2 139-83 195-89.1C329.3 58.1 293.8 48 256 48C141.1 48 48 141.1 48 256c0 40.2 11.4 77.7 31.1 109.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 90c-3.2 17.4-5 33.4-6.1 47.1c9.9 0 21.4-.6 33.9-2.3c44.2-5.8 101.6-24.5 154.7-77.7S385 202.6 390.8 158.4c1.8-13.8 2.3-26.3 2.2-36.9c-12.3 .3-26.9 1.4-42.9 3.9c-47.6 7.4-104.8 26.7-151.4 73.4C160 237.6 140.1 294.3 130.7 346z" />
    </Icon>
);

export default Melon;
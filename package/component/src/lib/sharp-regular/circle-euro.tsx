
import { Icon } from "../../index";

/**
 * A component that renders the `circle-euro` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-euro?s=sharp-regular circle-euro}
 * @preview ![circle-euro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-euro.svg)
 */
const CircleEuro: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144 16c-.6-5-.9-10.1-.9-15.2c0-5.7 .4-11.3 1.1-16.8L112 240l0-32 40.7 0c19.2-46.9 65.4-80 119.2-80l41.1 0 24 0 0 48-24 0-41.1 0c-26.3 0-49.6 12.6-64.4 32l96.5 0 0 32-111.1 0c-1.1 5.4-1.7 11-1.7 16.8c0 5.2 .5 10.3 1.4 15.2L304 272l0 32-97.6 0c14.7 20.3 38.5 33.5 65.5 33.5l41.1 0 24 0 0 48-24 0-41.1 0c-54.4 0-101-33.8-119.8-81.5L112 304l0-32 32 0z" />
    </Icon>
);

export default CircleEuro;

import { Icon } from "../../index";

/**
 * A component that renders the `circle-euro` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-euro?s=light circle-euro}
 * @preview ![circle-euro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-euro.svg)
 */
const CircleEuro: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm128 16l24.2 0c-.7-5-1-10.1-1-15.2c0-5.7 .4-11.3 1.2-16.8L128 240c-8.8 0-16-7.2-16-16s7.2-16 16-16l34.2 0c18.2-37.9 56.9-64 101.7-64l41.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-41.1 0c-26.3 0-49.6 12.6-64.4 32l88.5 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-103.1 0c-1.1 5.4-1.7 11-1.7 16.8c0 5.2 .5 10.3 1.4 15.2L288 272c8.8 0 16 7.2 16 16s-7.2 16-16 16l-89.6 0c14.7 20.3 38.5 33.5 65.5 33.5l41.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-41.1 0c-45.4 0-84.5-26.8-102.4-65.5L128 304c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default CircleEuro;
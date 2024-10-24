
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-euro` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-euro?s=sharp-duotone-solid circle-euro}
 * @preview ![circle-euro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-euro.svg)
 */
const CircleEuro: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm112-48l40.7 0c19.2-46.9 65.4-80 119.2-80l41.1 0 24 0 0 48-24 0-41.1 0c-26.3 0-49.6 12.6-64.4 32l96.5 0 0 32-111.1 0c-1.1 5.4-1.7 11-1.7 16.8c0 5.2 .5 10.3 1.4 15.2L304 272l0 32-97.6 0c14.7 20.3 38.5 33.5 65.5 33.5l41.1 0 24 0 0 48-24 0-41.1 0c-54.4 0-101-33.8-119.8-81.5L112 304l0-32 32 0c-.6-5-.9-10.1-.9-15.2c0-5.7 .4-11.3 1.1-16.8L112 240l0-32z" />
        <path d="M144.2 240c-.7 5.5-1.1 11.1-1.1 16.8c0 5.2 .3 10.2 .9 15.2l-32 0 0 32 40.1 0c18.8 47.7 65.4 81.5 119.8 81.5l41.1 0 24 0 0-48-24 0-41.1 0c-27 0-50.8-13.2-65.5-33.5l97.6 0 0-32-111.4 0c-.9-4.9-1.4-10-1.4-15.2c0-5.7 .6-11.4 1.7-16.8L304 240l0-32-96.5 0c14.7-19.4 38.1-32 64.4-32l41.1 0 24 0 0-48-24 0-41.1 0c-53.9 0-100 33.1-119.2 80L112 208l0 32 32.2 0z" />
    </Icon>
);

export default CircleEuro;
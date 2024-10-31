
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-euro` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-euro?s=duotone circle-euro}
 * @preview ![circle-euro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-euro.svg)
 */
const CircleEuro: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm112-32c0-8.8 7.2-16 16-16l24.7 0c19.2-46.9 65.4-80 119.2-80l41.1 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-41.1 0c-26.3 0-49.6 12.6-64.4 32l80.5 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-95.1 0c-1.1 5.4-1.7 11-1.7 16.8c0 5.2 .5 10.3 1.4 15.2l95.4 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-81.6 0c14.7 20.3 38.5 33.5 65.5 33.5l41.1 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-41.1 0c-54.4 0-101-33.8-119.8-81.5L128 304c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0c-.6-5-.9-10.1-.9-15.2c0-5.7 .4-11.3 1.1-16.8L128 240c-8.8 0-16-7.2-16-16z" />
        <path d="M144.2 240c-.7 5.5-1.1 11.1-1.1 16.8c0 5.2 .3 10.2 .9 15.2l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24.1 0c18.8 47.7 65.4 81.5 119.8 81.5l41.1 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-41.1 0c-27 0-50.8-13.2-65.5-33.5l81.6 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-95.4 0c-.9-4.9-1.4-10-1.4-15.2c0-5.7 .6-11.4 1.7-16.8l95.1 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80.5 0c14.7-19.4 38.1-32 64.4-32l41.1 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-41.1 0c-53.9 0-100 33.1-119.2 80L128 208c-8.8 0-16 7.2-16 16s7.2 16 16 16l16.2 0z" />
    </Icon>
);

export default CircleEuro;
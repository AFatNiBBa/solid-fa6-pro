
import { Icon, generic } from "../../index";

/**
 * A component that renders the `baby-carriage` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baby-carriage?s=sharp-duotone-solid baby-carriage}
 * @preview ![baby-carriage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/baby-carriage.svg)
 */
const BabyCarriage: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.1 192L256 192 123 0C52.3 35.8 3.1 108 .1 192zM32 464a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm288 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M416 96l-32 0 0 32 0 96-160 0L0 224c0 25.2 5.8 50.2 17.1 73.5s27.8 44.5 48.6 62.3s45.5 32 72.7 41.6S194.6 416 224 416s58.5-5 85.7-14.6s51.9-23.8 72.7-41.6s37.3-39 48.6-62.3s17-48.3 17-73.5l0-64 32 0 32 0 0-64-32 0-64 0z" />
    </Icon>
);

export default BabyCarriage;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `cheese-swiss` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese-swiss?s=sharp-duotone-solid cheese-swiss}
 * @preview ![cheese-swiss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cheese-swiss.svg)
 */
const CheeseSwiss: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256l332.2 0c-7.6 8.5-12.2 19.7-12.2 32c0 26.5 21.5 48 48 48s48-21.5 48-48c0-12.3-4.6-23.5-12.2-32L512 256C512 132.3 411.7 32 288 32L217.1 87.2c4.4 7.2 6.9 15.7 6.9 24.8c0 26.5-21.5 48-48 48c-13.4 0-25.5-5.5-34.2-14.3L0 256zM128 384a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M368 336c26.5 0 48-21.5 48-48c0-12.3-4.6-23.5-12.2-32L512 256l0 224L0 480 0 256l332.2 0c-7.6 8.5-12.2 19.7-12.2 32c0 26.5 21.5 48 48 48zM224 384a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default CheeseSwiss;
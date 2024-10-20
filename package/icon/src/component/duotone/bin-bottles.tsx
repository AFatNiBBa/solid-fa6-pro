
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bin-bottles` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bin-bottles?s=duotone bin-bottles}
 * @preview ![bin-bottles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bin-bottles.svg)
 */
const BinBottles: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 192l320 0c0-26.5-10.7-50.5-28.1-67.9c-1.1-1.1-2.1-2.1-3.2-3.1c-17.1-15.5-39.7-25-64.6-25L128 96c-53 0-96 43-96 96zM112 48c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l0-8c0-13.3-10.7-24-24-24L152 0c-13.3 0-24 10.7-24 24l0 8c-8.8 0-16 7.2-16 16zM335.4 91.6C365 115.1 384 151.3 384 192l191.1 0c-1.2-9.7-4.6-18.7-9.6-26.5c6.4-9.5 10.1-21 10.1-33.3c0-23.2-13.4-44.3-34.4-54.2L528 71.8c-5.3-2.5-10.8-4.4-16.4-5.7l0-42.1c0-13.3-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24l0 42.1c-5.6 1.3-11.1 3.2-16.4 5.7L354.1 78c-7.2 3.4-13.5 8-18.6 13.6z" />
        <path d="M32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32L56.2 457c4.5 31.5 31.5 55 63.4 55l401 0c31.8 0 58.9-23.4 63.4-55L608 288c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 224z" />
    </Icon>
);

export default BinBottles;
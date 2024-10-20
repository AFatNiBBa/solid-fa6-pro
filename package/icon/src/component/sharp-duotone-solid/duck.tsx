
import { Icon, generic } from "../../index";

/**
 * A component that renders the `duck` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/duck?s=sharp-duotone-solid duck}
 * @preview ![duck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/duck.svg)
 */
const Duck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M400 211c19.7-18.9 32-45.6 32-75c0-3.4-.2-6.7-.5-10.1L448 128l64 0c0 53-43 96-96 96l-16 0 0-13z" />
        <path d="M432 136c0 29.5-12.3 56.1-32 75l0 48c24.6 23.3 40 56.3 40 93c0 70.7-57.3 128-128 128l-120 0C86 480 0 394 0 288l0-32 32 0 32 32 208-59.4 0-4.9c-28.9-18.5-48-50.8-48-87.7c0-57.4 46.6-104 104-104s104 46.6 104 104zm-64 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM308.6 295.1c-2.4 41.2-32.6 79-77.3 90.1c-40.3 10.1-80.5-4.6-103.7-33.5l-25 20c31.1 38.7 84 57.6 136.4 44.5c58-14.5 98.3-63.8 101.5-119.3l-31.9-1.9z" />
    </Icon>
);

export default Duck;
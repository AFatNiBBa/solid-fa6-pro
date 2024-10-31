
import { Icon, generic } from "../../index";

/**
 * A component that renders the `starship` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starship?s=sharp-duotone-solid starship}
 * @preview ![starship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/starship.svg)
 */
const Starship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96l32 0 176 0 32 0 0 64-32 0-71 0-72.9 0L32 160 0 160 0 96zM0 352l32 0 32.1 0 72.9 0 71 0 32 0 0 64-32 0L32 416 0 416l0-64zm256-96c0-24.6 4.6-48 13-69.6C296.9 114.8 366.5 64 448 64c106 0 192 86 192 192s-86 192-192 192c-81.5 0-151.1-50.8-179-122.4c-8.4-21.6-13-45.1-13-69.6zm128 0a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M129.1 216.8L64.1 160l72.9 0 50.4 44.1L269 186.4c-8.4 21.6-13 45.1-13 69.6s4.6 48 13 69.6l-81.6-17.7L137 352l-72.9 0 64.9-56.8L96 288l0-64 33.1-7.2zM384 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Starship;
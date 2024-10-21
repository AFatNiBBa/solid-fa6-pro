
import { Icon, generic } from "../../index";

/**
 * A component that renders the `starship` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starship?s=duotone starship}
 * @preview ![starship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/starship.svg)
 */
const Starship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128c0-17.7 14.3-32 32-32l176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-71 0-72.9 0L32 160c-17.7 0-32-14.3-32-32zM0 384c0-17.7 14.3-32 32-32l32.1 0 72.9 0 71 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 416c-17.7 0-32-14.3-32-32zM256 256c0-24.6 4.6-48 13-69.6C296.9 114.8 366.5 64 448 64c106 0 192 86 192 192s-86 192-192 192c-81.5 0-151.1-50.8-179-122.4c-8.4-21.6-13-45.1-13-69.6zm128 0a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M129.1 216.8L64.1 160l72.9 0 50.4 44.1L269 186.4c-8.4 21.6-13 45.1-13 69.6s4.6 48 13 69.6l-81.6-17.7L137 352l-72.9 0 64.9-56.8-1.8-.4C109 290.8 96 274.7 96 256s13-34.8 31.3-38.8l1.8-.4zM384 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Starship;
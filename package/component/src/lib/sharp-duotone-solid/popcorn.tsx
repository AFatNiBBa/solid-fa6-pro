
import { Icon, generic } from "../../index";

/**
 * A component that renders the `popcorn` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popcorn?s=sharp-duotone-solid popcorn}
 * @preview ![popcorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/popcorn.svg)
 */
const Popcorn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 156c0-20.9 14.5-38.3 34-42.9c-1.3-4.2-2-8.6-2-13.1c0-24.3 19.7-44 44-44c1.9 0 3.7 .1 5.6 .3C118.7 37.7 135.7 24 156 24c8.5 0 16.5 2.4 23.2 6.6C186.2 12.7 203.6 0 224 0s37.8 12.7 44.8 30.6c6.7-4.2 14.7-6.6 23.2-6.6c20.3 0 37.3 13.7 42.4 32.3c1.8-.2 3.7-.3 5.6-.3c24.3 0 44 19.7 44 44c0 4.6-.7 9-2 13.1c19.5 4.5 34 22 34 42.9c0 1.3-.1 2.7-.2 4c0 .4-.1 .8-.1 1.2c-3.3-.8-6.7-1.2-10.2-1.2l-77.3 0-208.4 0-77.3 0-10.3 0c-.1-1.3-.2-2.7-.2-4z" />
        <path d="M0 160L80 512l288 0 80-352L0 160zM130.1 464L93.6 208l32.3 0 36.6 256-32.3 0zm155.4 0l36.6-256 32.3 0L317.9 464l-32.3 0zM240 464l-32 0 0-16 0-224 0-16 32 0 0 16 0 224 0 16z" />
    </Icon>
);

export default Popcorn;
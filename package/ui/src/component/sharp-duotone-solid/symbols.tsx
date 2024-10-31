
import { Icon, generic } from "../../index";

/**
 * A component that renders the `symbols` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/symbols?s=sharp-duotone-solid symbols}
 * @preview ![symbols](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/symbols.svg)
 */
const Symbols: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 64l32 0 160 0 32 0 0-64L192 0 32 0 0 0zM0 96l0 64 32 0 48 0 0 32 0 32 64 0 0-32 0-32 48 0 32 0 0-64-32 0-48 0L80 96 32 96 0 96zM288 328a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm.2 138.6l45.3 45.3 22.6-22.6 128-128 22.6-22.6-45.3-45.3-22.6 22.6-128 128-22.6 22.6zM432 472a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
        <path d="M512 40l0-39L473.7 8.6l-160 32L288 45.8 288 72l0 88c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48l0-109.8L448 79l0 49c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48l0-136zM16 320c0 17.9 6.5 34.3 17.4 46.9L20.3 381.3C7.2 395.7 0 414.4 0 433.8l0 .9L0 480l0 32 32 0 80 0 14.2 0 9.5-10.6 15.5-17.2 4 4.2 21.9 23.3 46.6-43.9-21.9-23.3-7.5-8 16-17.7 21.4-23.7-47.5-42.9L162.8 376l-12.5 13.9-14.8-15.7C150.5 361 160 341.6 160 320l0-72-72 0-72 0 0 72zM67.7 424.3L81 409.7l26.2 27.9L97.8 448 64 448l0-13.3 0-.9c0-3.5 1.3-6.9 3.7-9.5zM88 336c-8.8 0-16-7.2-16-16l0-16 32 0 0 16c0 8.8-7.2 16-16 16z" />
    </Icon>
);

export default Symbols;
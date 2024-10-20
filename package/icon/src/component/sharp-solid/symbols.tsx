
import { Icon } from "../../index";

/**
 * A component that renders the `symbols` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/symbols?s=sharp-solid symbols}
 * @preview ![symbols](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/symbols.svg)
 */
const Symbols: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0L192 0l32 0 0 64-32 0L32 64 0 64 0 0 32 0zM484.1 361.2l-128 128-22.6 22.6-45.3-45.3 22.6-22.6 128-128 22.6-22.6 45.3 45.3-22.6 22.6zM0 96l32 0 48 0 64 0 48 0 32 0 0 64-32 0-48 0 0 32 0 32-64 0 0-32 0-32-48 0L0 160 0 96zM288 328a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM472 432a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM512 1l0 39 0 136c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48l0-49L352 98.2 352 208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48l0-88 0-26.2 25.7-5.1 160-32L512 1zM16 320l0-72 72 0 72 0 0 72c0 21.6-9.5 41-24.5 54.2l14.8 15.7L162.8 376l21.4-23.8 47.5 42.9-21.4 23.7-16 17.7 7.5 8 21.9 23.3-46.6 43.9-21.9-23.3-4-4.2-15.5 17.2L126.2 512 112 512l-80 0L0 512l0-32 0-45.3 0-.9c0-19.4 7.2-38.2 20.3-52.6l13.1-14.4C22.5 354.3 16 337.9 16 320zM67.7 424.3c-2.4 2.6-3.7 6-3.7 9.5l0 .9L64 448l33.8 0 9.5-10.5L81 409.7 67.7 424.3zM88 336c8.8 0 16-7.2 16-16l0-16-32 0 0 16c0 8.8 7.2 16 16 16z" />
    </Icon>
);

export default Symbols;
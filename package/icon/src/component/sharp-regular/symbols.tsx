
import { Icon } from "../../index";

/**
 * A component that renders the `symbols` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/symbols?s=sharp-regular symbols}
 * @preview ![symbols](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/symbols.svg)
 */
const Symbols: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 0L200 0l24 0 0 48-24 0L24 48 0 48 0 0 24 0zm0 80l176 0 24 0 0 48-24 0-64 0 0 72 0 24-48 0 0-24 0-72-64 0L0 128 0 80l24 0zM512 2.7L512 32l0 144c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48c5.5 0 10.9 .5 16 1.5l0-68.2L352 83.7 352 208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48c5.5 0 10.9 .5 16 1.5L304 64l0-19.7 19.3-3.9 160-32L512 2.7zM288 320a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm222.7 3.2l-17 17L340.2 493.8l-17 17-33.9-33.9 17-17L459.8 306.2l17-17 33.9 33.9zM480 448a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM40 256l88 0 24 0 0 24 0 32.5c0 27-12.4 52.6-33.7 69.2l31.9 28.5 24-26.4 16.1-17.8 35.5 32.3-16.1 17.8-23.7 26.1 18.7 16.7 17.9 16-32 35.8-17.9-16-19-17-24 26.4-7.1 7.9L112 512l-88 0L0 512l0-24 0-16.7c0-35.7 15.9-69.5 43.3-92.3C25.9 362.4 16 339.4 16 315.3L16 280l0-24 24 0zm48.4 88.2c9.8-7.6 15.6-19.3 15.6-31.7l0-8.5-40 0 0 11.3c0 11.4 4.9 22.3 13.4 29.8l4.5 4 6.5-5zm-12.3 70C60.3 426.3 50.4 444.4 48.4 464l53 0L118 445.8 79.6 411.5l-3.5 2.7z" />
    </Icon>
);

export default Symbols;
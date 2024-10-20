
import { Icon } from "../../index";

/**
 * A component that renders the `blinds` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds?s=sharp-thin blinds}
 * @preview ![blinds](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/blinds.svg)
 */
const Blinds: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 16l0 64L152 80l-16 0L16 80l0-64 480 0zM152 96l344 0 16 0 0-16 0-64 0-16L496 0 16 0 0 0 0 16 0 80 0 96l16 0 120 0 0 160.7c-22.7 3.8-40 23.6-40 47.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-23.8-17.3-43.5-40-47.3L152 96zm32 128l310.9 0 17.1 0-6-16-30-80-17.1 0 30 80L184 208l0 16zm-80-16l-80.9 0 30-80L36 128 6 208 0 224l17.1 0 86.9 0 0-16zM64 304l-40.9 0 18-48L24 256 6 304 0 320l17.1 0 48.5 0c-1-5.2-1.6-10.5-1.6-16zm158.4 16l272.5 0 17.1 0-6-16-18-48-17.1 0 18 48L224 304c0 5.5-.6 10.8-1.6 16zM24 352L6 400 0 416l17.1 0 477.8 0 17.1 0-6-16-18-48-17.1 0 18 48L23.1 400l18-48L24 352zm0 96L6 496 0 512l17.1 0 477.8 0 17.1 0-6-16-18-48-17.1 0 18 48L23.1 496l18-48L24 448zM176 304a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
    </Icon>
);

export default Blinds;

import { Icon } from "../../index";

/**
 * A component that renders the `palette` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/palette?s=sharp-thin palette}
 * @preview ![palette](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/palette.svg)
 */
const Palette: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 304l0-48C496 123.5 388.5 16 256 16S16 123.5 16 256c0 130.4 103.9 236.4 233.5 239.9L297.4 448l-.8-.8c-15.7-15.7-24.6-37.1-24.6-59.3c0-46.3 37.6-83.9 83.9-83.9L496 304zM308.7 436.7L320 448l-11.3 11.3L256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 48 0 16-16 0-140.1 0c-37.5 0-67.9 30.4-67.9 67.9c0 18 7.2 35.3 19.9 48l.8 .8zM104 320a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-64a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm56-88a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-64 0a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm168-40a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-64a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM416 168a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-64 0a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z" />
    </Icon>
);

export default Palette;
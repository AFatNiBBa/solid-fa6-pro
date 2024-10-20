
import { Icon } from "../../index";

/**
 * A component that renders the `binoculars` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binoculars?s=sharp-light binoculars}
 * @preview ![binoculars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/binoculars.svg)
 */
const Binoculars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 32L96 32l0 32 16 0 64 0 16 0 0-32-16 0-64 0zm224 0l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0zM75.4 240.5l3.5-5.8 .8-6.7L92.2 128l99.8 0 0 16 0 128 0 176L32 448l0-135.1 43.4-72.4zM224 256l0-96 64 0 0 96-64 0zM288 96l0 32-64 0 0-32-32 0L64 96 48 224 0 304 0 448l0 32 32 0 160 0 32 0 0-32 0-160 64 0 0 160 0 32 32 0 160 0 32 0 0-32 0-144-48-80L448 96 320 96l-32 0zm32 352l0-176 0-128 0-16 99.8 0 12.5 100 .8 6.7 3.5 5.8L480 312.9 480 448l-160 0z" />
    </Icon>
);

export default Binoculars;
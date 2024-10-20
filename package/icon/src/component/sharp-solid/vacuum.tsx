
import { Icon } from "../../index";

/**
 * A component that renders the `vacuum` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum?s=sharp-solid vacuum}
 * @preview ![vacuum](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/vacuum.svg)
 */
const Vacuum: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M249.9 64L512 64c35.3 0 64 28.7 64 64c0 21.9-11 41.2-27.8 52.8C513.8 148.1 467.2 128 416 128l-64 0 0 164c10.2-2.6 21-4 32-4c70.7 0 128 57.3 128 128c0 38.2-16.8 72.5-43.3 96L608 512l0-192c0-31.7-7.7-61.7-21.3-88C619 208.7 640 170.8 640 128C640 57.3 582.7 0 512 0L224 0 198.1 0l-5.4 25.3L150.1 224l65.5 0L249.9 64zM208.7 256l-65.5 0L109 416l-61 0L0 464l0 48 127.4 0c.4 0 .9 0 1.3 0l95.3 0 0-96-49.6 0 34.3-160zM480 416a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm-128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Vacuum;

import { Icon } from "../../index";

/**
 * A component that renders the `mango` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mango?s=sharp-solid mango}
 * @preview ![mango](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mango.svg)
 */
const Mango: typeof Icon = x => (
    <Icon {...x}>
        <path d="M184.2 152.2C221.7 114.7 270.9 96 320 96l0-72 0-24 32 0 16 0 8 0 64 0c39.8 0 72 32.2 72 72l0 24-24 0-40 0c-33.4 0-62.8-17-80-42.9l0 49c32.2 8.3 62.6 25 87.8 50.2C493.3 189.7 512 238.9 512 288c0 76.6-57.5 224-224 224c-144 0-244.1-43.3-244.1-43.3L0 448l0-64 24.7-18.5c34.3-25.7 52.1-59.4 71.1-95.4c20.6-38.9 42.6-80.6 88.4-117.9zM400 288c0 61.9-50.1 112-112 112l0 32c79.5 0 144-64.5 144-144l-32 0z" />
    </Icon>
);

export default Mango;
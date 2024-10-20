
import { Icon } from "../../index";

/**
 * A component that renders the `registered` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/registered?s=sharp-solid registered}
 * @preview ![registered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/registered.svg)
 */
const Registered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 128l24 0 104 0c44.2 0 80 35.8 80 80c0 37.8-26.3 69.5-61.6 77.9L369.1 384l-57 0-61.3-96L208 288l0 72 0 24-48 0 0-24 0-96 0-112 0-24zm48 112l56 0 24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0 0 64z" />
    </Icon>
);

export default Registered;
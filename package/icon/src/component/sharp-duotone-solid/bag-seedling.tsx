
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bag-seedling` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-seedling?s=sharp-duotone-solid bag-seedling}
 * @preview ![bag-seedling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bag-seedling.svg)
 */
const BagSeedling: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 247.2l0 17.7c0 36.6 4.5 73.1 13.4 108.7L64 448l384 0 18.6-74.5c8.9-35.5 13.4-72 13.4-108.7l0-17.7c0-36.6-4.5-73.1-13.4-108.7L448 64 64 64 45.4 138.5C36.5 174 32 210.5 32 247.2zM128 160l32 0c40.7 0 76.4 21.8 96 54.3c19.6-32.5 55.3-54.3 96-54.3l32 0 0 16c0 59.2-45.9 107.6-104 111.7l0 40.3 0 24-48 0 0-24 0-40.3c-58.1-4.1-104-52.6-104-111.7l0-16z" />
        <path d="M480 0L32 0 64 64l384 0L480 0zm0 512l-32-64L64 448 32 512l448 0zM160 160l-32 0 0 16c0 59.2 45.9 107.6 104 111.7l0 40.3 0 24 48 0 0-24 0-40.3c58.1-4.1 104-52.6 104-111.7l0-16-32 0c-40.7 0-76.4 21.8-96 54.3c-19.6-32.5-55.3-54.3-96-54.3z" />
    </Icon>
);

export default BagSeedling;
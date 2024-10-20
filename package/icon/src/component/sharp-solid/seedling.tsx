
import { Icon } from "../../index";

/**
 * A component that renders the `seedling` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seedling?s=sharp-solid seedling}
 * @preview ![seedling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/seedling.svg)
 */
const Seedling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 0l0 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l64 0zM0 64l64 0c123.7 0 224 100.3 224 224l0 32 0 160 0 32-64 0 0-32 0-160C100.3 320 0 219.7 0 96L0 64z" />
    </Icon>
);

export default Seedling;
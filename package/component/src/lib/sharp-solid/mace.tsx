
import { Icon } from "../../index";

/**
 * A component that renders the `mace` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mace?s=sharp-solid mace}
 * @preview ![mace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mace.svg)
 */
const Mace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M328.3 94.1c42.7 13.2 76.4 46.9 89.6 89.6L512 224l-94.1 40.3c-13.2 42.7-46.9 76.4-89.6 89.6L288 448l-40.3-94.1c-10.8-3.4-21.1-8-30.5-13.8L70.6 486.6 48 509.3 2.7 464l22.6-22.6L171.9 294.9c-5.8-9.5-10.5-19.7-13.8-30.5L64 224l94.1-40.3c13.2-42.7 46.9-76.4 89.6-89.6L288 0l40.3 94.1zM288 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Mace;
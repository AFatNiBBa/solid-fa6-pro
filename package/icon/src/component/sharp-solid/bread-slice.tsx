
import { Icon } from "../../index";

/**
 * A component that renders the `bread-slice` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice?s=sharp-solid bread-slice}
 * @preview ![bread-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bread-slice.svg)
 */
const BreadSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32C192 32 0 64 0 192c0 35.3 28.7 64 64 64V480H448V256c35.3 0 64-28.7 64-64C512 64 320 32 256 32z" />
    </Icon>
);

export default BreadSlice;
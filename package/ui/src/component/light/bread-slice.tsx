
import { Icon } from "../../index";

/**
 * A component that renders the `bread-slice` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice?s=light bread-slice}
 * @preview ![bread-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bread-slice.svg)
 */
const BreadSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 224c-17.7 0-32-14.3-32-32c0-44.3 32.4-76.2 84.6-98.6C167.9 71.4 227.5 64 256 64s88.1 7.4 139.4 29.4C447.6 115.8 480 147.7 480 192c0 17.7-14.3 32-32 32s-32 14.3-32 32l0 176c0 8.8-7.2 16-16 16l-288 0c-8.8 0-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32zm384 64l0-32c35.3 0 64-28.7 64-64C512 64 320 32 256 32S0 64 0 192c0 35.3 28.7 64 64 64l0 32 0 144c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-144z" />
    </Icon>
);

export default BreadSlice;
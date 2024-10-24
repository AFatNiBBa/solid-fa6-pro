
import { Icon } from "../../index";

/**
 * A component that renders the `citrus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/citrus?s=sharp-light citrus}
 * @preview ![citrus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/citrus.svg)
 */
const Citrus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 128l16 0 64 0c53 0 96-43 96-96l0-16 0-16L464 0 448 0 384 0c-31 0-58.7 14.7-76.2 37.6c-16.7-3.7-34-5.6-51.8-5.6C123.5 32 16 139.5 16 272s107.5 240 240 240s240-107.5 240-240c0-49.5-15-95.5-40.7-133.7c-8.9 6-18.6 10.9-28.9 14.5C450.1 186.5 464 227.7 464 272c0 114.9-93.1 208-208 208S48 386.9 48 272S141.1 64 256 64c12.4 0 24.6 1.1 36.4 3.2C289.5 76.3 288 86 288 96l0 16 0 16 16 0zm80-96l64 0c0 35.3-28.7 64-64 64l-64 0c0-35.3 28.7-64 64-64z" />
    </Icon>
);

export default Citrus;
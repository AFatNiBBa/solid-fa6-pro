
import { Icon } from "../../index";

/**
 * A component that renders the `bread-loaf` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-loaf?s=sharp-light bread-loaf}
 * @preview ![bread-loaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bread-loaf.svg)
 */
const BreadLoaf: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 224l-32 0c-17.7 0-32-14.3-32-32c0-45.8 30.4-77.3 77.4-98.9C156.4 71.4 211.6 64 240 64s83.6 7.4 130.6 29.1c47 21.7 77.4 53.1 77.4 98.9c0 17.7-14.3 32-32 32l-32 0 0 32 0 192-64 0L96 448l0-192 0-32zm320 32l128 0 0 192-128 0 0-160 0-32zm152-32l-24 0-72.6 0c5.4-9.4 8.6-20.3 8.6-32c0-64-44-104-96-128l16 0c28.4 0 83.6 7.4 130.6 29.1c47 21.7 77.4 53.1 77.4 98.9c0 17.7-14.3 32-32 32l-8 0zM96 480l224 0 64 0 32 0 128 0 32 0 0-32 0-160 0-32c35.3 0 64-28.7 64-64C640 64 464 32 400 32L240 32C176 32 0 64 0 192c0 35.3 28.7 64 64 64l0 32 0 160 0 32 32 0z" />
    </Icon>
);

export default BreadLoaf;
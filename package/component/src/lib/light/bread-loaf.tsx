
import { Icon } from "../../index";

/**
 * A component that renders the `bread-loaf` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-loaf?s=light bread-loaf}
 * @preview ![bread-loaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bread-loaf.svg)
 */
const BreadLoaf: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 224c-17.7 0-32-14.3-32-32c0-45.8 30.4-77.3 77.4-98.9C156.4 71.4 211.6 64 240 64s83.6 7.4 130.6 29.1c47 21.7 77.4 53.1 77.4 98.9c0 17.7-14.3 32-32 32s-32 14.3-32 32l0 176c0 8.8-7.2 16-16 16l-48 0-208 0c-8.8 0-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32zm352 32l128 0 0 176c0 8.8-7.2 16-16 16l-114.7 0c1.8-5 2.7-10.4 2.7-16l0-144 0-32zm155.3-31.7c-1.1-.2-2.2-.3-3.3-.3l-96.6 0c5.4-9.4 8.6-20.3 8.6-32c0-64-44-104-96-128l16 0c28.4 0 83.6 7.4 130.6 29.1c47 21.7 77.4 53.1 77.4 98.9c0 17.7-14.3 32-32 32c-1.6 0-3.2 .1-4.7 .3zM112 480l208 0 48 0 160 0c26.5 0 48-21.5 48-48l0-144 0-32c35.3 0 64-28.7 64-64C640 64 464 32 400 32L272 32l-32 0C176 32 0 64 0 192c0 35.3 28.7 64 64 64l0 32 0 144c0 26.5 21.5 48 48 48z" />
    </Icon>
);

export default BreadLoaf;
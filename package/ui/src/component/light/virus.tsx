
import { Icon } from "../../index";

/**
 * A component that renders the `virus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/virus?s=light virus}
 * @preview ![virus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/virus.svg)
 */
const Virus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M75 75c-12.5 12.5-12.5 32.8 0 45.3l8.2 8.2C118.4 163.7 93.4 224 43.5 224L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l11.5 0c49.9 0 74.9 60.3 39.6 95.6L75 391.8c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6l0 11.5c0 17.7 14.3 32 32 32s32-14.3 32-32l0-11.5c0-49.9 60.3-74.9 95.6-39.6l8.2 8.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-8.2-8.2c-35.3-35.3-10.3-95.6 39.6-95.6l11.5 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-11.5 0c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-8.2 8.2C348.3 118.4 288 93.4 288 43.5L288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 11.5c0 49.9-60.3 74.9-95.6 39.6L120.2 75C107.7 62.5 87.5 62.5 75 75zm331.2 30.8C350.8 161.2 390.1 256 468.5 256c-78.4 0-117.7 94.8-62.2 150.2c0 0 0 0 0 0C350.8 350.8 256 390 256 468.4c0-78.4-94.8-117.6-150.2-62.2C161.2 350.8 121.9 256 43.5 256c78.4 0 117.7-94.8 62.2-150.2c0 0 0 0 0 0C161.2 161.2 256 121.9 256 43.5c0 78.4 94.8 117.7 150.2 62.2zM224 208a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm80 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Virus;

import { Icon } from "../../index";

/**
 * A component that renders the `virus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/virus?s=regular virus}
 * @preview ![virus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/virus.svg)
 */
const Virus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M75 75c12.5-12.5 32.8-12.5 45.3 0l8.2 8.2C163.7 118.4 224 93.4 224 43.5L224 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 11.5c0 49.9 60.3 74.9 95.6 39.6l8.2-8.2c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-8.2 8.2c-35.3 35.3-10.3 95.6 39.6 95.6l11.5 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-11.5 0c-49.9 0-74.9 60.3-39.6 95.6l8.2 8.2c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-8.2-8.2c-35.3-35.3-95.6-10.3-95.6 39.6l0 11.5c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-11.5c0-49.9-60.3-74.9-95.6-39.6l-8.2 8.2c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l8.2-8.2C118.4 348.3 93.4 288 43.5 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l11.5 0c49.9 0 74.9-60.3 39.6-95.6L75 120.2C62.5 107.7 62.5 87.5 75 75zM256 99.6c-23.3 36.4-68.4 55.1-110.6 45.8c9.3 42.2-9.4 87.3-45.8 110.6c36.4 23.3 55.1 68.4 45.8 110.6c42.2-9.3 87.3 9.4 110.6 45.8c23.3-36.4 68.4-55.1 110.6-45.8c-9.3-42.2 9.4-87.3 45.8-110.6c-36.4-23.3-55.1-68.4-45.8-110.6c-21.2 4.7-43.1 2.3-62.6-5.8c-19.4-8.1-36.4-21.8-48-40zM192 224a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm112 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Virus;
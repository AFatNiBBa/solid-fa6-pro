
import { Icon } from "../../index";

/**
 * A component that renders the `virus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/virus?s=sharp-regular virus}
 * @preview ![virus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/virus.svg)
 */
const Virus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 468.5c0-49.9-60.3-74.9-95.6-39.6L97.6 459.6 52.4 414.4l30.8-30.8C118.4 348.3 93.4 288 43.5 288L0 288l0-64 43.5 0c49.9 0 74.8-60.3 39.6-95.6L52.4 97.6 97.6 52.4l30.8 30.8C163.7 118.4 224 93.4 224 43.5L224 0l64 0 0 43.5c0 49.9 60.3 74.8 95.6 39.6l30.8-30.8 45.3 45.3-30.8 30.8c-35.3 35.3-10.3 95.6 39.6 95.6l43.5 0 0 64-43.5 0c-49.9 0-74.9 60.3-39.6 95.6l30.8 30.8-45.3 45.3-30.8-30.8c-35.3-35.3-95.6-10.3-95.6 39.6l0 43.5-64 0 0-43.5zm32-56c23.3-36.4 68.4-55.1 110.6-45.8c-9.3-42.2 9.4-87.3 45.8-110.6c-36.4-23.3-55.1-68.4-45.8-110.6c-21.2 4.7-43.1 2.3-62.6-5.8c-19.4-8.1-36.4-21.8-48-40c-23.3 36.4-68.4 55.1-110.6 45.8c9.3 42.2-9.4 87.3-45.8 110.6c36.4 23.3 55.1 68.4 45.8 110.6c42.2-9.3 87.3 9.4 110.6 45.8zM192 224a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm88 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Virus;
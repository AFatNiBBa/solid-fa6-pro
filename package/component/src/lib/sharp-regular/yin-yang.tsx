
import { Icon } from "../../index";

/**
 * A component that renders the `yin-yang` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yin-yang?s=sharp-regular yin-yang}
 * @preview ![yin-yang](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/yin-yang.svg)
 */
const YinYang: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256c0-64.3-29.2-121.8-75-160c4.6 13.8 7 28.6 7 44c0 77.3-62.7 140-140 140c-50.9 0-92.2 41.2-92.2 92s41.3 92 92.2 92c114.9 0 208-93.1 208-208zM256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM122.8 415.8c-4.5-13.8-7-28.5-7-43.8c0-77.4 62.9-140 140.2-140c50.8 0 92-41.2 92-92s-41.2-92-92-92C141.1 48 48 141.1 48 256c0 64.2 29.1 121.6 74.8 159.8zM216 144l40-40 40 40-40 40-40-40zm40 184l40 40-40 40-40-40 40-40z" />
    </Icon>
);

export default YinYang;
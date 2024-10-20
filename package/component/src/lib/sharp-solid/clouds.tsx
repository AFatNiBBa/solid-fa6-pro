
import { Icon } from "../../index";

/**
 * A component that renders the `clouds` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clouds?s=sharp-solid clouds}
 * @preview ![clouds](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clouds.svg)
 */
const Clouds: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 160c-74.1 0-135.2 56-143.1 128L96 288 0 288l0-96c0-53 43-96 96-96l1.1 0C104.9 41.7 151.6 0 208 0c47.9 0 88.8 30.1 104.8 72.4C324.8 67 338 64 352 64c53 0 96 43 96 96c0 12.1-2.2 23.6-6.3 34.2c-11.4 2.3-22.2 6.4-32.1 11.9C383.3 177.7 345.7 160 304 160zM224 512l-96 0 0-96c0-41.8 26.7-77.4 64-90.5l0-21.5c0-61.9 50.1-112 112-112c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80l0 16c53 0 96 43 96 96l0 96-96 0-320 0z" />
    </Icon>
);

export default Clouds;
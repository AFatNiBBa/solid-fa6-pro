
import { Icon } from "../../index";

/**
 * A component that renders the `panorama` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/panorama?s=sharp-regular panorama}
 * @preview ![panorama](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/panorama.svg)
 */
const Panorama: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 32L0 80 0 432l0 48 48 0 5.5 0c84.8-30.3 176.9-40 266.5-40s181.7 9.7 266.5 40l5.5 0 48 0 0-48 0-352 0-48-48 0-5.5 0C501.7 62.3 409.5 72 320 72s-181.7-9.7-266.5-40L48 32 0 32zM48 80.9C136.7 110.7 230.9 120 320 120s183.3-9.3 272-39.1l0 350.2c-21.9-7.4-44.2-13.5-66.7-18.6l-1.7-2.4-136-192L368 190.5l-19.6 27.6L267 333l-31.7-43.2L216 263.4l-19.4 26.4-88 120-3.7 5c-19.2 4.6-38.2 10-57 16.3L48 80.9zM176 208a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Panorama;
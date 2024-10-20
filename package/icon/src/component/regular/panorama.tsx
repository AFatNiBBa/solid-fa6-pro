
import { Icon } from "../../index";

/**
 * A component that renders the `panorama` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/panorama?s=regular panorama}
 * @preview ![panorama](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/panorama.svg)
 */
const Panorama: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 80.9C72.3 88.8 177.5 120 320 120s247.7-31.2 272-39.1l0 350.2c-9.8-3.2-32.9-10.2-66.3-17.4c-.5-1-1-1.9-1.6-2.8l-136-208c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9L264.8 330l-29.5-40.2c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8l-88 120c-1.3 1.8-2.4 3.8-3.1 5.8c-28.7 6.5-48.6 12.6-57.5 15.5L48 80.9zM579.6 34.4C565.4 39.2 462.4 72 320 72S74.6 39.2 60.4 34.4C55.6 32.8 50.7 32 45.6 32C20.4 32 0 52.4 0 77.6L0 434.4C0 459.6 20.4 480 45.6 480c5.1 0 10-.8 14.7-2.4C74.6 472.8 177.6 440 320 440s245.4 32.8 259.6 37.6c4.7 1.6 9.7 2.4 14.7 2.4c25.2 0 45.6-20.4 45.6-45.6l0-356.7C640 52.4 619.6 32 594.4 32c-5 0-10 .8-14.7 2.4zM144 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Panorama;
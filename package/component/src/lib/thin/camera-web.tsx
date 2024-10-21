
import { Icon } from "../../index";

/**
 * A component that renders the `camera-web` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-web?s=thin camera-web}
 * @preview ![camera-web](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/camera-web.svg)
 */
const CameraWeb: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 224A208 208 0 1 0 16 224a208 208 0 1 0 416 0zm16 0c0 73.7-35.6 139-90.5 179.9L411 473.4c5.6 7.2 6.5 17 2.5 25.2s-12.4 13.4-21.5 13.4L56 512c-9.1 0-17.5-5.2-21.5-13.4s-3.1-18 2.5-25.2l53.5-69.5C35.6 363 0 297.7 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224zM224 448c-44.3 0-85.6-12.9-120.4-35.1l-54 70.2c-1.9 2.4-2.2 5.7-.8 8.4s4.1 4.5 7.2 4.5l336 0c3 0 5.8-1.7 7.2-4.5s1-6-.8-8.4l-54-70.2C309.6 435.1 268.3 448 224 448zM352 224A128 128 0 1 0 96 224a128 128 0 1 0 256 0zM80 224a144 144 0 1 1 288 0A144 144 0 1 1 80 224zm88 0c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-39.8 32.2-72 72-72c4.4 0 8 3.6 8 8s-3.6 8-8 8c-30.9 0-56 25.1-56 56z" />
    </Icon>
);

export default CameraWeb;
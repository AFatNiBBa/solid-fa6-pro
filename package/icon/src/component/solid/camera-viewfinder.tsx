
import { Icon } from "../../index";

/**
 * A component that renders the `camera-viewfinder` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-viewfinder?s=solid camera-viewfinder}
 * @preview ![camera-viewfinder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/camera-viewfinder.svg)
 */
const CameraViewfinder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M56 0l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 48c-4.4 0-8 3.6-8 8l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 56C0 25.1 25.1 0 56 0zM376 0l80 0c30.9 0 56 25.1 56 56l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80c0-4.4-3.6-8-8-8l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM48 376l0 80c0 4.4 3.6 8 8 8l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-30.9 0-56-25.1-56-56l0-80c0-13.3 10.7-24 24-24s24 10.7 24 24zm464 0l0 80c0 30.9-25.1 56-56 56l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c4.4 0 8-3.6 8-8l0-80c0-13.3 10.7-24 24-24s24 10.7 24 24zM180 128l6.2-16.4c3.5-9.4 12.5-15.6 22.5-15.6l94.7 0c10 0 19 6.2 22.5 15.6L332 128l36 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-224 0c-26.5 0-48-21.5-48-48l0-160c0-26.5 21.5-48 48-48l36 0zM320 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default CameraViewfinder;
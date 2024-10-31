
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-previous` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-previous?s=solid diagram-previous}
 * @preview ![diagram-previous](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/diagram-previous.svg)
 */
const DiagramPrevious: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 352L64 352l0 64 384 0 0-64zm0-64c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l168 0 0-64-46.1 0c-21.4 0-32.1-25.9-17-41L239 113c9.4-9.4 24.6-9.4 33.9 0L343 183c15.1 15.1 4.4 41-17 41L280 224l0 64 168 0zM365.7 160.4L295.6 90.3c-21.9-21.9-57.3-21.9-79.2 0l-70.1 70.1c-18.4 18.4-20.4 43.7-11 63.6L64 224c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-71.3 0c9.4-19.9 7.4-45.2-11-63.6z" />
    </Icon>
);

export default DiagramPrevious;
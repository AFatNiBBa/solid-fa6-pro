
import { Icon } from "../../index";

/**
 * A component that renders the `mars-stroke` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke?s=thin mars-stroke}
 * @preview ![mars-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mars-stroke.svg)
 */
const MarsStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M376 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l108.7 0L392 108.7 349.7 66.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L380.7 120l-50.3 50.3c-1.4 1.4-2.1 3.1-2.3 4.9C296.6 145.9 254.4 128 208 128c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176c0-46.4-17.9-88.6-47.3-120c1.8-.2 3.6-.9 4.9-2.3L392 131.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L403.3 120 496 27.3 496 136c0 4.4 3.6 8 8 8s8-3.6 8-8L512 8c0-4.4-3.6-8-8-8L376 0zM48 304a160 160 0 1 1 320 0A160 160 0 1 1 48 304z" />
    </Icon>
);

export default MarsStroke;
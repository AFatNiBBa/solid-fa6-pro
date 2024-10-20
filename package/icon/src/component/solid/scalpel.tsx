
import { Icon } from "../../index";

/**
 * A component that renders the `scalpel` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scalpel?s=solid scalpel}
 * @preview ![scalpel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/scalpel.svg)
 */
const Scalpel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M387.4 25.1C400.8 9.2 420.6 0 441.4 0c39 0 70.6 31.6 70.6 70.6l0 4c0 17.6-6.2 34.6-17.6 48.1L369.3 271c-9.1 10.8-22.5 17-36.7 17L200 288c-6.2 0-11.9-3.6-14.5-9.3s-1.7-12.3 2.3-17.1L387.4 25.1zM169.4 320l6.6 0 96 0 16 0 0 16c0 74.9-65.5 118.6-126.1 142.9C100.1 503.6 34.1 512 16 512c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l160-160 4.7-4.7z" />
    </Icon>
);

export default Scalpel;
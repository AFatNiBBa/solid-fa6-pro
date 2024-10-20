
import { Icon } from "../../index";

/**
 * A component that renders the `crow` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crow?s=sharp-solid crow}
 * @preview ![crow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/crow.svg)
 */
const Crow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M456 0c-48.6 0-88 39.4-88 88l0 29.2L.3 400l39 50.7L126.1 384l133.1 0 18.6 45.1 14 34 14 34 6.1 14.9 51.9 0-13.6-33.1-14-34-14-34L311.1 384l40.9 0c1.1 0 2.1 0 3.2 0l46.6 113.2 6.1 14.9 51.9 0-13.6-33.1-42-102C484.9 354.1 544 280 544 192l0-64 0-8 96-24 0-32L592 32l-68.1 0C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Crow;
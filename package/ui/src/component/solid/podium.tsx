
import { Icon } from "../../index";

/**
 * A component that renders the `podium` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium?s=solid podium}
 * @preview ![podium](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/podium.svg)
 */
const Podium: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M182.4 72c8.3 14.3 23.8 24 41.6 24l64 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L224 0c-17.8 0-33.3 9.7-41.6 24L168 24c-48.6 0-88 39.4-88 88l0 32-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-296 0 0-32c0-22.1 17.9-40 40-40l14.4 0zM48 224L73.7 455.1c3.6 32.4 31 56.9 63.6 56.9l173.4 0c32.6 0 60-24.5 63.6-56.9L400 224 48 224z" />
    </Icon>
);

export default Podium;
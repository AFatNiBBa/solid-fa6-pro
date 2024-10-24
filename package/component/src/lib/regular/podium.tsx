
import { Icon } from "../../index";

/**
 * A component that renders the `podium` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium?s=regular podium}
 * @preview ![podium](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/podium.svg)
 */
const Podium: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M168 72c-22.1 0-40 17.9-40 40l0 32 296 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 192c-13.3 0-24-10.7-24-24s10.7-24 24-24l56 0 0-32c0-48.6 39.4-88 88-88l14.4 0C190.7 9.7 206.2 0 224 0l64 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-64 0c-17.8 0-33.3-9.7-41.6-24L168 72zM73.5 455.2L47.3 224l48.3 0 25.7 225.8c.9 8.1 7.8 14.2 15.9 14.2l173.7 0c8.1 0 15-6.1 15.9-14.2L352.4 224l48.3 0L374.5 455.2c-3.7 32.3-31 56.8-63.6 56.8l-173.7 0c-32.6 0-59.9-24.4-63.6-56.8z" />
    </Icon>
);

export default Podium;
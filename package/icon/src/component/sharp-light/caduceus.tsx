
import { Icon } from "../../index";

/**
 * A component that renders the `caduceus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caduceus?s=sharp-light caduceus}
 * @preview ![caduceus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/caduceus.svg)
 */
const Caduceus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm16 61.3c18.6-6.6 32-24.4 32-45.3c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 20.9 13.4 38.7 32 45.3l0 31.4L135.8 66.1l-10.6-5.9-8.6 8.6-112 112L0 185.4 0 192l0 16 0 16 16 0 130.1 0c33 0 65.3-9.3 93.3-26.8l.6-.4 0 148.5-39-21.3c-15.4-8.4-25-24.6-25-42.1l0-10 0-16-32 0 0 16 0 10c0 29.3 16 56.2 41.7 70.2l36.9 20.1-20.9 11.4c-25.7 14-41.7 41-41.7 70.2l0 10 0 16 32 0 0-16 0-10c0-17.6 9.6-33.7 25-42.1l23-12.5 0 48.7 0 64 32 0 0-64 0-48.7 23 12.5c15.4 8.4 25 24.6 25 42.1l0 10 0 16 32 0 0-16 0-10c0-29.3-16-56.2-41.7-70.2l-20.9-11.4 36.9-20.1c25.7-14 41.7-41 41.7-70.2l0-10 0-16-32 0 0 16 0 10c0 17.6-9.6 33.7-25 42.1l-39 21.3 0-148.5 .6 .4c28 17.5 60.3 26.8 93.3 26.8L496 224l16 0 0-16 0-16 0-6.6-4.7-4.7-112-112-8.6-8.6-10.6 5.9L272 124.6l0-31.4zM473.4 192l-107.5 0c-27 0-53.4-7.6-76.3-21.9l-15.7-9.8L381.3 99.9 473.4 192zM130.7 99.9l107.4 60.4-15.7 9.8c-22.9 14.3-49.3 21.9-76.3 21.9L38.6 192l92.1-92.1z" />
    </Icon>
);

export default Caduceus;
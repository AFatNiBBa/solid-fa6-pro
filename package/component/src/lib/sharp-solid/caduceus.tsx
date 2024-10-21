
import { Icon } from "../../index";

/**
 * A component that renders the `caduceus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caduceus?s=sharp-solid caduceus}
 * @preview ![caduceus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/caduceus.svg)
 */
const Caduceus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 89.6c14.3-8.3 24-23.8 24-41.6c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 17.8 9.7 33.3 24 41.6l0 6.4 0 20L128 64 0 224l138.7 0c33.5 0 66.2-10.5 93.3-30l0 136.5-20.6-12.3c-12-7.2-19.4-20.2-19.4-34.3l0-3.8 0-24-48 0 0 24 0 3.8c0 30.9 16.2 59.6 42.7 75.5l22.6 13.6-6.6 4c-26.5 15.9-42.7 44.5-42.7 75.5l0 3.8 0 24 48 0 0-24 0-3.8c0-14.1 7.4-27.1 19.4-34.3l4.6-2.7 0 32.8 0 64 48 0 0-64 0-32.8 4.6 2.7c12 7.2 19.4 20.2 19.4 34.3l0 3.8 0 24 48 0 0-24 0-3.8c0-30.9-16.2-59.6-42.7-75.5l-6.6-4 22.6-13.6c26.5-15.9 42.7-44.5 42.7-75.5l0-3.8 0-24-48 0 0 24 0 3.8c0 14.1-7.4 27.1-19.4 34.3L280 330.4 280 194c27.2 19.5 59.8 30 93.3 30L512 224 384 64 280 116l0-20 0-6.4z" />
    </Icon>
);

export default Caduceus;

import { Icon } from "../../index";

/**
 * A component that renders the `caduceus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caduceus?s=sharp-regular caduceus}
 * @preview ![caduceus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/caduceus.svg)
 */
const Caduceus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 89.6c14.3-8.3 24-23.8 24-41.6c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 17.8 9.7 33.3 24 41.6l0 6.4 0 11.3L137.6 66l-15-6.6L111 71 7 175l-7 7L0 192l0 8 0 24 24 0 122.1 0c30 0 59.5-7.3 85.9-21.3l0 127.7-20.6-12.3c-12-7.2-19.4-20.2-19.4-34.3l0-3.8 0-24-48 0 0 24 0 3.8c0 30.9 16.2 59.6 42.7 75.5l22.6 13.6-6.6 4c-26.5 15.9-42.7 44.5-42.7 75.5l0 3.8 0 24 48 0 0-24 0-3.8c0-14.1 7.4-27.1 19.4-34.3l4.6-2.7 0 32.8 0 64 48 0 0-64 0-32.8 4.6 2.7c12 7.2 19.4 20.2 19.4 34.3l0 3.8 0 24 48 0 0-24 0-3.8c0-30.9-16.2-59.6-42.7-75.5l-6.6-4 22.6-13.6c26.5-15.9 42.7-44.5 42.7-75.5l0-3.8 0-24-48 0 0 24 0 3.8c0 14.1-7.4 27.1-19.4 34.3L280 330.4l0-130.7c36.3 15.9 75.6 24.2 115.5 24.2l92.5 0 24 0 0-24 0-8 0-9.9-7-7L401 71 389.4 59.4l-15 6.6L280 107.3 280 96l0-6.4zM73.9 176l59.4-59.4 86.4 37.8-1.6 1c-21.6 13.5-46.6 20.7-72.1 20.7l-72.2 0zm220.2-22.5l84.4-36.9L438.1 176l-42.6 0c-35.1 0-69.7-7.7-101.3-22.5z" />
    </Icon>
);

export default Caduceus;
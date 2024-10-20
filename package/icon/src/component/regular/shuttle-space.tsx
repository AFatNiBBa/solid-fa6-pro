
import { Icon } from "../../index";

/**
 * A component that renders the `shuttle-space` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuttle-space?s=regular shuttle-space}
 * @preview ![shuttle-space](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shuttle-space.svg)
 */
const ShuttleSpace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 384l-8 0c-13.3 0-24-10.7-24-24l0-32L0 184l0-32c0-13.3 10.7-24 24-24l8 0 0-48c0-26.5 21.5-48 48-48l50 0c40.6 0 80.4 11 115.2 31.9L405.3 160l50.7 0c69.3 0 135 22.7 179.2 81.6c6.4 8.5 6.4 20.3 0 28.8C591 329.3 525.3 352 456 352l-50.7 0L245.2 448.1C210.4 469 170.6 480 130 480l-50 0c-26.5 0-48-21.5-48-48l0-48zm280-32l-144 0c-9.9 13.2-23.9 23.3-40 28.3l0 51.7 2 0c31.9 0 63.2-8.7 90.6-25.1L312 352zm0-192l-91.5-54.9C193.2 88.7 161.9 80 130 80l-2 0 0 51.7c16.1 5.1 30.1 15.1 40 28.3l144 0zM48 184l0 144 0 8 56 0c12.7 0 23.8-7.4 28.9-18.3c4-8.4 12.4-13.7 21.7-13.7L456 304c32.6 0 62.4-5.8 88-18.5l0-59.1c-25.6-12.6-55.4-18.5-88-18.5l-301.4 0c-9.3 0-17.7-5.3-21.7-13.7C127.8 183.4 116.7 176 104 176l-56 0 0 8zm416 40c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default ShuttleSpace;
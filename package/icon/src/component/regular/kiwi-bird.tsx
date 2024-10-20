
import { Icon } from "../../index";

/**
 * A component that renders the `kiwi-bird` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kiwi-bird?s=regular kiwi-bird}
 * @preview ![kiwi-bird](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/kiwi-bird.svg)
 */
const KiwiBird: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M266.4 347.3c31.2-18.9 74.9-43.3 125.9-43.3l55.7 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-55.7 0c-51 0-94.7-24.4-125.9-43.3C244.7 87.6 219.3 80 192 80C112.5 80 48 144.5 48 224s64.5 144 144 144c27.3 0 52.7-7.6 74.4-20.7zM392.3 352c-36.4 0-69.9 17.6-101.1 36.4c-11.1 6.7-22.9 12.3-35.2 16.7l0 50.9c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40.7c-5.3 .4-10.6 .7-16 .7c-16.6 0-32.7-2.1-48-6l0 46c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-65.7C38.6 357.1 0 295.1 0 224C0 118 86 32 192 32c36.3 0 70.3 10.1 99.2 27.6C322.4 78.4 355.9 96 392.3 96L448 96c70.7 0 128 57.3 128 128l0 240c0 7.3-4.9 13.7-12 15.5s-14.5-1.3-18-7.7L477.6 348.6c-9.5 2.2-19.4 3.4-29.6 3.4l-55.7 0zM448 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default KiwiBird;
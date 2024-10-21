
import { Icon } from "../../index";

/**
 * A component that renders the `kiwi-bird` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kiwi-bird?s=sharp-regular kiwi-bird}
 * @preview ![kiwi-bird](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/kiwi-bird.svg)
 */
const KiwiBird: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M313.7 304l-14.3 16c-26.4 29.5-64.7 48-107.3 48c-79.5 0-144-64.5-144-144s64.5-144 144-144c42.6 0 80.9 18.5 107.3 48l14.3 16 21.5 0L448 144c44.2 0 80 35.8 80 80l0 80-192.9 0-21.5 0zM335.1 96C300 56.7 248.9 32 192 32C86 32 0 118 0 224c0 71.1 38.6 133.1 96 166.3L96 456l0 24 48 0 0-24 0-46c15.3 3.9 31.4 6 48 6c5.4 0 10.7-.2 16-.7l0 40.7 0 24 48 0 0-24 0-50.9c30.7-10.9 57.8-29.3 79.1-53.1L464 352 576 480l0-128 0-48 0-80c0-70.7-57.3-128-128-128L335.1 96zM472 224a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default KiwiBird;
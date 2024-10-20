
import { Icon } from "../../index";

/**
 * A component that renders the `turntable` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turntable?s=sharp-regular turntable}
 * @preview ![turntable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/turntable.svg)
 */
const Turntable: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 80l0 352L48 432 48 80l480 0zM48 32L0 32 0 80 0 432l0 48 48 0 480 0 48 0 0-48 0-352 0-48-48 0L48 32zm448 80l-48 0 0 24 0 145.9-45.1 82.6-11.5 21.1 42.1 23 11.5-21.1 48-88 2.9-5.4 0-6.1 0-152 0-24zM368 256A144 144 0 1 0 80 256a144 144 0 1 0 288 0zm-176 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Turntable;
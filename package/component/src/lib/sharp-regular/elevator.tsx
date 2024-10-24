
import { Icon } from "../../index";

/**
 * A component that renders the `elevator` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/elevator?s=sharp-regular elevator}
 * @preview ![elevator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/elevator.svg)
 */
const Elevator: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 80l0 16 160 0 0-16L144 0 64 80zm400 96l0 288L48 464l0-288 416 0zM48 128L0 128l0 48L0 464l0 48 48 0 416 0 48 0 0-48 0-288 0-48-48 0L48 128zM368 96l80-80 0-16L288 0l0 16 80 80zM216 352l-112 0L80 432l160 0-24-80zm216 80l-24-80-112 0-24 80 160 0zM208 272a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm144 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default Elevator;
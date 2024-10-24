
import { Icon } from "../../index";

/**
 * A component that renders the `elevator` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/elevator?s=sharp-light elevator}
 * @preview ![elevator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/elevator.svg)
 */
const Elevator: typeof Icon = x => (
    <Icon {...x}>
        <path d="M155.3 12.7l64 64L196.7 99.3 144 46.6 91.3 99.3 68.7 76.7l64-64L144 1.4l11.3 11.3zM292.7 27.3L315.3 4.7 368 57.4 420.7 4.7l22.6 22.6-64 64L368 102.6 356.7 91.3l-64-64zM32 160l0 320 448 0 0-320L32 160zM0 128l32 0 448 0 32 0 0 32 0 320 0 32-32 0L32 512 0 512l0-32L0 160l0-32zM184 264a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-80 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm248 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM113 448l-33 0 24-96 112 0 24 96-33 0-16-64-62 0-16 64zm208-64l-16 64-33 0 24-96 112 0 24 96-33 0-16-64-62 0z" />
    </Icon>
);

export default Elevator;
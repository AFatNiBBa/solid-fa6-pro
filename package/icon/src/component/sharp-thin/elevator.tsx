
import { Icon } from "../../index";

/**
 * A component that renders the `elevator` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/elevator?s=sharp-thin elevator}
 * @preview ![elevator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/elevator.svg)
 */
const Elevator: typeof Icon = x => (
    <Icon {...x}>
        <path d="M149.9 6.6l72 80 5.4 5.9-11.9 10.7-5.4-5.9L144 23.9 77.9 97.3l-5.4 5.9L60.7 92.6l5.4-5.9 72-80L144 0l5.9 6.6zm152 0L368 80 434.1 6.6l5.4-5.9 11.9 10.7-5.4 5.9-72 80-5.9 6.6-5.9-6.6-72-80-5.4-5.9L296.6 .7l5.4 5.9zM16 144l0 352 480 0 0-352L16 144zM0 128l16 0 480 0 16 0 0 16 0 352 0 16-16 0L16 512 0 512l0-16L0 144l0-16zM200 264a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm-96 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm248 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm0-96a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM96.5 448L80 448l24-96 112 0 24 96-16.5 0-20-80-87 0-20 80zm212-80l-20 80L272 448l24-96 112 0 24 96-16.5 0-20-80-87 0z" />
    </Icon>
);

export default Elevator;
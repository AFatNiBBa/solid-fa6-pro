
import { Icon } from "../../index";

/**
 * A component that renders the `vial-circle-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial-circle-check?s=sharp-light vial-circle-check}
 * @preview ![vial-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/vial-circle-check.svg)
 */
const VialCircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l16 0 16 0 32 0 128 0 32 0 16 0 16 0 0 32-16 0-16 0 0 202.8c-20.2 28.6-32 63.5-32 101.2l0-144L64 224l0 160c0 35.3 28.7 64 64 64s64-28.7 64-64l0-16c0 25.2 5.3 49.1 14.8 70.8C189.5 463.7 160.6 480 128 480c-53 0-96-43-96-96L32 64 16 64 0 64 0 32zM64 64l0 128 128 0 0-128L64 64zM368 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm78.6 112l-11.3 11.3-72 72L352 430.6l-11.3-11.3-40-40L289.4 368 312 345.4l11.3 11.3L352 385.4l60.7-60.7L424 313.4 446.6 336z" />
    </Icon>
);

export default VialCircleCheck;
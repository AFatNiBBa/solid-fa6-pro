
import { Icon } from "../../index";

/**
 * A component that renders the `vial-circle-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial-circle-check?s=sharp-regular vial-circle-check}
 * @preview ![vial-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/vial-circle-check.svg)
 */
const VialCircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l32 0 48 0 96 0 48 0 32 0 0 48-32 0 0 186.8c-20.2 28.6-32 63.5-32 101.2c0 25.2 5.3 49.1 14.8 70.8C189.5 463.7 160.6 480 128 480c-53 0-96-43-96-96L32 80 0 80 0 32zM80 80l0 112 96 0 0-112L80 80zm0 160l0 144c0 26.5 21.5 48 48 48s48-21.5 48-48l0-144-96 0zM224 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm222.6-32L424 313.4l-11.3 11.3L352 385.4l-28.7-28.7L312 345.4 289.4 368l11.3 11.3 40 40L352 430.6l11.3-11.3 72-72L446.6 336z" />
    </Icon>
);

export default VialCircleCheck;
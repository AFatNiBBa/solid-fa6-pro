
import { Icon } from "../../index";

/**
 * A component that renders the `vial-circle-check` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial-circle-check?s=regular vial-circle-check}
 * @preview ![vial-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/vial-circle-check.svg)
 */
const VialCircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 56C0 42.7 10.7 32 24 32l8 0 48 0 96 0 48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 186.8c-20.2 28.6-32 63.5-32 101.2c0 25.2 5.3 49.1 14.8 70.8C189.5 463.7 160.6 480 128 480c-53 0-96-43-96-96L32 80l-8 0C10.7 80 0 69.3 0 56zM80 80l0 112 96 0 0-112L80 80zm0 160l0 144c0 26.5 21.5 48 48 48s48-21.5 48-48l0-144-96 0zM224 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L352 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z" />
    </Icon>
);

export default VialCircleCheck;
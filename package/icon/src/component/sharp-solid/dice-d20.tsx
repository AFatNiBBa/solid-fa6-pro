
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d20` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d20?s=sharp-solid dice-d20}
 * @preview ![dice-d20](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dice-d20.svg)
 */
const DiceD20: typeof Icon = x => (
    <Icon {...x}>
        <path d="M17.9 416.8L240 512l0-66L17.9 416.8zM272 512l222.1-95.2L272 446l0 66zM496 328.4l0-184.9L411.7 194 496 328.4zM484.2 113.2L291.1 1.8 394.7 166.9l89.5-53.7zM220.9 1.8L27.8 113.2l89.5 53.7L220.9 1.8zM16 143.5l0 184.9L100.3 194 16 143.5zM256 6.1L149.4 176l213.2 0L256 6.1zm0 377.6L356.4 208l-200.9 0L256 383.8zM388.2 216.8L276 413.2l217.5-28.6L388.2 216.8zm-264.5 0L18.5 384.6 236 413.2 123.8 216.8z" />
    </Icon>
);

export default DiceD20;
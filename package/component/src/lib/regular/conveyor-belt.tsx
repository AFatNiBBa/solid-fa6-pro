
import { Icon } from "../../index";

/**
 * A component that renders the `conveyor-belt` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt?s=regular conveyor-belt}
 * @preview ![conveyor-belt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/conveyor-belt.svg)
 */
const ConveyorBelt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 48l80 0 0 160-288 0 0-160 80 0 0 80c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8L320 115.2l39.1 26.1c4.9 3.3 11.2 3.6 16.4 .8s8.5-8.2 8.5-14.1l0-80zM128 48l0 160c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48L176 0c-26.5 0-48 21.5-48 48zM592 400c0 35.3-28.7 64-64 64l-416 0c-35.3 0-64-28.7-64-64s28.7-64 64-64l416 0c35.3 0 64 28.7 64 64zM112 288C50.1 288 0 338.1 0 400s50.1 112 112 112l416 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-416 0zm48 112a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm224-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default ConveyorBelt;
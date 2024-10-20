
import { Icon } from "../../index";

/**
 * A component that renders the `taxi` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taxi?s=regular taxi}
 * @preview ![taxi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/taxi.svg)
 */
const Taxi: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 0c-17.7 0-32 14.3-32 32l0 32 0 .2c-35.2 2.2-65.9 25.2-77.7 58.8L48.1 220.8C19.3 237.4 0 268.4 0 304l0 80 0 48 0 56c0 13.3 10.7 24 24 24s24-10.7 24-24l0-56 416 0 0 56c0 13.3 10.7 24 24 24s24-10.7 24-24l0-56 0-48 0-80c0-35.6-19.4-66.6-48.1-83.2l-34.3-97.9C417.9 89.3 387.2 66.3 352 64.2l0-.2 0-32c0-17.7-14.3-32-32-32L192 0zM165.4 112l181.2 0c17 0 32.1 10.7 37.8 26.8L408.6 208l-305.1 0 24.2-69.2c5.6-16 20.8-26.8 37.8-26.8zM96 256l320 0c26.5 0 48 21.5 48 48l0 80L48 384l0-80c0-26.5 21.5-48 48-48zm48 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm256 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Taxi;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `sausage` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sausage?s=duotone sausage}
 * @preview ![sausage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sausage.svg)
 */
const Sausage: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 388.4l0 55.2C0 454.9 9.1 464 20.4 464c2.4 0 4.7-.4 7-1.2l41.9-15.2C82.3 485.1 118 512 160 512c194.4 0 352-157.6 352-352c0-42-26.9-77.7-64.5-90.7l15.2-41.9c.8-2.2 1.2-4.6 1.2-7C464 9.1 454.9 0 443.6 0L388.4 0C377.1 0 368 9.1 368 20.4c0 2.4 .4 4.7 1.2 7l15.2 41.9C346.9 82.3 320 118 320 160c0 88.4-71.6 160-160 160c-42 0-77.7 26.9-90.7 64.5L27.4 369.2c-2.2-.8-4.6-1.2-7-1.2C9.1 368 0 377.1 0 388.4zM144 384c0-8.8 7.2-16 16-16c114.9 0 208-93.1 208-208c0-8.8 7.2-16 16-16s16 7.2 16 16c0 132.5-107.5 240-240 240c-8.8 0-16-7.2-16-16z" />
        <path d="M384 144c8.8 0 16 7.2 16 16c0 132.5-107.5 240-240 240c-8.8 0-16-7.2-16-16s7.2-16 16-16c114.9 0 208-93.1 208-208c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default Sausage;
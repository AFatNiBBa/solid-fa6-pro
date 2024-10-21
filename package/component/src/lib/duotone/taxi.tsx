
import { Icon, generic } from "../../index";

/**
 * A component that renders the `taxi` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taxi?s=duotone taxi}
 * @preview ![taxi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/taxi.svg)
 */
const Taxi: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 432l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48L0 432zM109.1 224l293.8 0-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4l-181.2 0c-13.6 0-25.7 8.6-30.2 21.4c-8.7 24.9-17.4 49.7-26.1 74.6zM160 32l0 32 5.4 0 181.2 0c1.8 0 3.6 .1 5.4 0l0-32c0-17.7-14.3-32-32-32L192 0c-17.7 0-32 14.3-32 32zM416 432l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48-96 0z" />
        <path d="M135.2 149.4L109.1 224l293.8 0-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4l-181.2 0c-13.6 0-25.7 8.6-30.2 21.4zM39.6 228.8L74.8 128.3C88.3 89.8 124.6 64 165.4 64l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144L0 432 0 288c0-26.7 16.4-49.6 39.6-59.2zM128 320a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Taxi;
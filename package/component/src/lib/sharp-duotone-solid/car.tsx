
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car?s=sharp-duotone-solid car}
 * @preview ![car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car.svg)
 */
const Car: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 400l0 80 96 0 0-80L0 400zM109.1 192l293.8 0L369.3 96 142.7 96c-11.2 32-22.4 64-33.6 96zM416 400l0 80 96 0 0-80-96 0z" />
        <path d="M120 32L97.3 32 89.8 53.4 41.3 192 0 192 0 400l512 0 0-208-41.3 0L422.2 53.4 414.7 32 392 32 120 32zM402.9 192l-293.8 0 33.6-96 226.6 0 33.6 96zM64 288a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Car;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `cars` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cars?s=sharp-duotone-solid cars}
 * @preview ![cars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cars.svg)
 */
const Cars: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 288c0 21.3 0 42.7 0 64l80 0 0-64 112 0 0-32 32 0 7.2 0 28.1-84.2 7.3-21.9 7.3-21.9L97.7 128l21.3-64 177.9 0 21.3 64 1.7 0 65.7 0L350.4 21.9 343.1 0 320 0 96 0 72.9 0 65.6 21.9 30.3 128 0 128zm104 80a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M320 160l-23.1 0-7.3 21.9L254.3 288 224 288l0 160s0 0 0 0l0 64 80 0 0-64 256 0 0 64 80 0 0-64s0 0 0 0l0-160-30.3 0L574.4 181.9 567.1 160 544 160l-224 0zM542.3 288l-220.5 0 21.3-64 177.9 0 21.3 64zM280 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm280-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Cars;
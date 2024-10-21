
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-side` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-side?s=duotone car-side}
 * @preview ![car-side](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/car-side.svg)
 */
const CarSide: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 432a80 80 0 1 0 160 0A80 80 0 1 0 64 432zm47.3-208L224 224c0-32 0-64 0-96l-52.7 0c-13.1 0-24.9 8-29.7 20.1c-10.1 25.3-20.2 50.6-30.4 75.9zM272 128c0 32 0 64 0 96l173.4 0-67.2-84c-6.1-7.6-15.3-12-25-12L272 128zM416 432a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M171.3 128l52.7 0 0 96-112.7 0 30.4-75.9c4.9-12.1 16.6-20.1 29.7-20.1zM272 224l0-96 81.2 0c9.7 0 18.9 4.4 25 12l67.2 84L272 224zm256.2 1l-100-125c-18.2-22.8-45.8-36-75-36L171.3 64c-39.3 0-74.6 23.9-89.1 60.3L40.6 228.4C16.8 237.8 0 260.9 0 288L0 400c0 17.7 14.3 32 32 32c0-61.9 50.1-112 112-112s112 50.1 112 112l128 0c0-61.9 50.1-112 112-112s112 50.1 112 112c17.7 0 32-14.3 32-32l0-48c0-65.2-48.8-119-111.8-127z" />
    </Icon>
);

export default CarSide;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-burst` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-burst?s=sharp-duotone-solid car-burst}
 * @preview ![car-burst](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car-burst.svg)
 */
const CarBurst: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M4.4 215.2L100 236.6l-.4 98 58.4-47 4.2-15.5 24.8-92.7 8.3-30.9 30.9 8.3 14.4 3.9 60-76.3 10.8-13.7 2.1-4.4L218.2 88.5 176 0 133.8 88.5 38.4 66.3l42.9 88.1L4.4 215.2z" />
        <path d="M359.3 93l-20.4-5.5-13 16.6L252.8 197 218 187.6l-24.8 92.7-16.6 61.8L160 404l77.3 20.7 16.6-61.8 247.3 66.3L484.6 491l77.3 20.7 16.6-61.8L595 388l24.8-92.7L585 286 568.1 169l-3-20.9-20.4-5.5L359.3 93zM517.7 268L320 215l43.1-54.7L507.8 199l9.9 68.9zM251.4 279.4a24 24 0 1 1 46.4 12.4 24 24 0 1 1 -46.4-12.4zM528 328.7a24 24 0 1 1 -12.4 46.4A24 24 0 1 1 528 328.7z" />
    </Icon>
);

export default CarBurst;
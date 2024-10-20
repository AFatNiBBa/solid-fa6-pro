
import { Icon, generic } from "../../index";

/**
 * A component that renders the `igloo` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/igloo?s=sharp-duotone-solid igloo}
 * @preview ![igloo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/igloo.svg)
 */
const Igloo: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 320l96 0 0-128-66.1 0C10.8 230.6 0 274 0 320zm0 32L0 480l192 0 0-128L0 352zM48.5 160L320 160l0-126.2c-10.5-1.2-21.2-1.8-32-1.8C188.1 32 100.2 82.8 48.5 160zM128 192l0 128 69.5 0c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64l69.5 0 0-128-320 0zM352 39.1L352 160l175.5 0C487.2 99.8 424.9 55.7 352 39.1zM384 352l0 128 192 0 0-128-192 0zm96-160l0 128 96 0c0-46-10.8-89.4-29.9-128L480 192z" />
        <path d="M320 33.8c10.9 1.2 21.5 3 32 5.4L352 160l175.5 0c6.8 10.2 13 20.9 18.6 32L480 192l0 128 96 0 0 32-192 0 0 128-32 0 0-128c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 128-32 0 0-128L0 352l0-32 96 0 0-128-66.1 0c5.5-11.1 11.7-21.8 18.6-32L320 160l0-126.2zM197.5 320c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64l69.5 0 0-128-320 0 0 128 69.5 0z" />
    </Icon>
);

export default Igloo;
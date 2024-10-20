
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sun-dust` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-dust?s=duotone sun-dust}
 * @preview ![sun-dust](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sun-dust.svg)
 */
const SunDust: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1.2 150.5c-2.1 5-1.5 10.7 1.6 15.2L65.1 256 2.8 346.3c-3.1 4.5-3.7 10.2-1.6 15.2s6.6 8.6 11.9 9.6L121 391l44.5-44.5C142.3 323.3 128 291.3 128 256c0-70.7 57.3-128 128-128c35.3 0 67.3 14.3 90.5 37.5L391 121 371.1 13.1c-1-5.3-4.6-9.8-9.6-11.9c-2-.8-4-1.2-6.1-1.2c-3.2 0-6.4 1-9.1 2.8L256 65.1 165.7 2.8c-4.5-3.1-10.2-3.7-15.2-1.6s-8.6 6.6-9.6 11.9L121 121 13.1 140.9c-5.3 1-9.8 4.6-11.9 9.6zM160 256c0 26.5 10.7 50.5 28.1 67.9L323.9 188.1C306.5 170.7 282.5 160 256 160c-53 0-96 43-96 96z" />
        <path d="M480 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-80 80a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm112 48a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM272 400a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-80 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM400 432a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM352 320a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default SunDust;
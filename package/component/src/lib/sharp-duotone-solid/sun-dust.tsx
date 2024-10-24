
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sun-dust` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-dust?s=sharp-duotone-solid sun-dust}
 * @preview ![sun-dust](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sun-dust.svg)
 */
const SunDust: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 150L73.1 256 0 362l126.7 23.3c12.9-12.9 25.9-25.9 38.8-38.8C142.3 323.3 128 291.3 128 256c0-70.7 57.3-128 128-128c35.3 0 67.4 14.3 90.5 37.5l38.8-38.8C377.6 84.5 369.8 42.2 362 0L256 73.1 150 0 126.7 126.7 0 150zM160 256c0 26.5 10.7 50.5 28.1 67.9L323.9 188.1C306.5 170.7 282.5 160 256 160c-53 0-96 43-96 96z" />
        <path d="M480 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-80 80a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm112 48a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM272 400a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-80 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM400 432a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM352 320a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default SunDust;
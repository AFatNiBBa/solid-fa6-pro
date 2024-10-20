
import { Icon } from "../../index";

/**
 * A component that renders the `sun-dust` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-dust?s=solid sun-dust}
 * @preview ![sun-dust](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sun-dust.svg)
 */
const SunDust: typeof Icon = x => (
    <Icon {...x}>
        <path d="M371.1 13.1L391 121l-44.5 44.5C323.3 142.3 291.3 128 256 128c-70.7 0-128 57.3-128 128c0 35.3 14.3 67.3 37.5 90.5L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6s8.6 6.6 9.6 11.9zM256 160c26.5 0 50.5 10.7 67.9 28.1L188.1 323.9C170.7 306.5 160 282.5 160 256c0-53 43-96 96-96zm192 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-80 80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm112 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM240 368a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-80 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM368 400a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 288a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default SunDust;
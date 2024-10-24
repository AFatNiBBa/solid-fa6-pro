
import { Icon } from "../../index";

/**
 * A component that renders the `poo` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/poo?s=sharp-solid poo}
 * @preview ![poo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/poo.svg)
 */
const Poo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48c0 44.2-35.8 80-80 80l-10.5 0-5.5 0c-35.3 0-64 28.7-64 64c0 19.1 8.4 36.3 21.7 48L104 240c-39.8 0-72 32.2-72 72c0 25.6 13.4 48.2 33.6 60.9C27.5 385.6 0 421.6 0 464l0 48 512 0 0-48c0-42.4-27.5-78.4-65.6-91.1C466.6 360.2 480 337.6 480 312c0-39.8-32.2-72-72-72l-13.7 0c13.3-11.7 21.7-28.9 21.7-48c0-35.3-28.7-64-64-64l-5.5 0c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96c-5.1 0-10.2 .4-15.1 1.2C250.4 14.3 256 30.5 256 48zM192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM256 448c-64 0-96-64-96-64l192 0s-32 64-96 64z" />
    </Icon>
);

export default Poo;
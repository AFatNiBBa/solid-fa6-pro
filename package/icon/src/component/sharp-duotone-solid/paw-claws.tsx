
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paw-claws` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paw-claws?s=sharp-duotone-solid paw-claws}
 * @preview ![paw-claws](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/paw-claws.svg)
 */
const PawClaws: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 236.8L0 240l0 .4c0 13.2 3.8 27.6 11.6 41.1c18.9 32.4 54 47.3 78.5 33.3s29.1-51.7 10.2-84.1C91.1 214.7 77.9 203 64 196.8L64 128 12.2 199.2C4.3 210.1 0 223.3 0 236.8zM112 128c-.2 11.3 1.5 23.2 5.5 35.1c14.3 42.9 52.1 69.1 84.4 58.5s46.9-53.9 32.6-96.8C226.3 100.2 210.3 81 192 71.2L192 0 138.9 58.4C121.6 77.4 112 102.3 112 128zm165.5-3.1c-14.3 42.9 .3 86.2 32.6 96.8s70.1-15.6 84.4-58.5c4-11.9 5.7-23.9 5.5-35.1c0-25.7-9.6-50.6-26.9-69.6L320 0l0 71.2c-18.3 9.8-34.3 28.9-42.5 53.6zM411.6 230.6c-18.9 32.4-14.3 70.1 10.2 84.1s59.7-.9 78.5-33.3c7.8-13.5 11.6-27.8 11.6-41.1l0-.4 0-3.2c0-13.5-4.3-26.7-12.2-37.6L448 128l0 68.8c-13.9 6.1-27.1 17.8-36.4 33.7z" />
        <path d="M64 512c0-176 128-256 192-256s192 80 192 256L256 464 64 512z" />
    </Icon>
);

export default PawClaws;
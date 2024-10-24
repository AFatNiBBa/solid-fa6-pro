
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paw` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paw?s=sharp-duotone-solid paw}
 * @preview ![paw](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/paw.svg)
 */
const Paw: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208.4c0 13.2 3.8 27.6 11.6 41.1c18.9 32.4 54 47.3 78.5 33.3s29.1-51.7 10.2-84.1s-54-47.3-78.5-33.3C7.5 173.5 0 189.8 0 208.4zm117.5-77.2c14.3 42.9 52.1 69.1 84.4 58.5s46.9-53.9 32.6-96.8S182.4 23.8 150.1 34.3s-46.9 53.9-32.6 96.8zm160-38.3c-14.3 42.9 .3 86.2 32.6 96.8s70.1-15.6 84.4-58.5s-.3-86.2-32.6-96.8S291.8 50 277.5 92.9zM411.6 198.6c-18.9 32.4-14.3 70.1 10.2 84.1s59.7-.9 78.5-33.3c7.8-13.5 11.6-27.8 11.6-41.1c0-18.6-7.5-34.9-21.8-43.1c-24.5-14-59.7 .9-78.5 33.3z" />
        <path d="M64 480c0-176 128-256 192-256s192 80 192 256L256 432 64 480z" />
    </Icon>
);

export default Paw;
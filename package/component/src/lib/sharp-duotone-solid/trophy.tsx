
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trophy` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trophy?s=sharp-duotone-solid trophy}
 * @preview ![trophy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trophy.svg)
 */
const Trophy: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 88C0 222.5 70.4 295.7 140.5 334.1c34.5 18.9 68.8 29.3 94.3 35c5.8 1.3 11.3 2.4 16.2 3.3c-19.5-10.6-43.9-30.9-65.7-69.7c-7.2-3.2-14.4-6.7-21.7-10.7C109.8 262.6 56.4 209.9 48.9 112l84.4 0c-1.5-15.1-2.8-31.1-3.6-48L24 64 0 64zM325.1 372.3c4.9-.9 10.3-1.9 16.2-3.3c25.5-5.7 59.8-16.1 94.3-35C505.6 295.7 576 222.5 576 88l0-24-24 0L446.4 64c-.9 16.9-2.1 32.9-3.6 48l84.4 0c-7.5 97.9-60.9 150.6-114.6 179.9c-7.2 4-14.5 7.5-21.7 10.7c-21.9 38.8-46.2 59.1-65.7 69.7z" />
        <path d="M256 374.9C209.3 352.3 128 273.7 128 0L448 0c0 273.7-81.3 352.3-128 374.9l0 73.1 72 0 24 0 0 24 0 16 0 24-24 0-208 0-24 0 0-24 0-16 0-24 24 0 72 0 0-73.1z" />
    </Icon>
);

export default Trophy;
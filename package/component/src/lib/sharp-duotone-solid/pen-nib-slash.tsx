
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-nib-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-nib-slash?s=sharp-duotone-solid pen-nib-slash}
 * @preview ![pen-nib-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pen-nib-slash.svg)
 */
const PenNibSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 448l20.7 20.7 144-144c-3-6.3-4.7-13.3-4.7-20.7c0-9.4 2.7-18.2 7.4-25.7l-87.8-69.2L64 448zm43.3 43.3L128 512l281.1-93.7L306.4 337.4c-8.7 9-20.9 14.6-34.4 14.6c-7.4 0-14.4-1.7-20.7-4.7l-144 144zM212.8 142.4L446.7 324 480 224l.7-.7-128-128L352 96 212.8 142.4zM375.3 72.7l128 128L576 128 448 0 375.3 72.7z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default PenNibSlash;
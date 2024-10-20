
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eye-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-slash?s=duotone eye-slash}
 * @preview ![eye-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/eye-slash.svg)
 */
const EyeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 4.2 .8 8.4 2.5 12.3C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480c56.1 0 104.4-17.8 144.5-43.2l-71.7-56.5C339.4 392.8 314.6 400 288 400c-79.5 0-144-64.5-144-144c0-14.5 2.1-28.5 6.1-41.7L63.5 146c-29.4 34.7-49.9 70.8-61.1 97.6C.8 247.6 0 251.8 0 256zM135.2 80.7L207 136.9c23.1-15.7 51-24.9 81-24.9c79.5 0 144 64.5 144 144c0 17.7-3.2 34.6-9 50.2c28 22 56.1 44 84.1 65.9c32.3-36.6 54.6-75.4 66.4-103.9c1.6-3.9 2.5-8.1 2.5-12.3s-.8-8.4-2.5-12.3c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32c-60 0-111.1 20.3-152.8 48.7zm56.8 179.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9c1.9-.5 3.9-1.1 5.7-1.7l-120-94.6c-3.7 .8-6.7 3.7-6.5 7.7zm92.7-88.4c2.1 6.4 3.3 13.2 3.3 20.3c0 2.7-.2 5.4-.5 8c31.6 24.8 63.2 49.5 94.8 74.3c2.7-13.9 2.4-28.6-1.5-43.2c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default EyeSlash;
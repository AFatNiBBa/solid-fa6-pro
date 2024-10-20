
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eye-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-slash?s=sharp-duotone-solid eye-slash}
 * @preview ![eye-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/eye-slash.svg)
 */
const EyeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256c30 74.7 129.6 224 288 224c54.9 0 102.7-17.9 143-44.4l-70.2-55.3C339.4 392.8 314.6 400 288 400c-79.5 0-144-64.5-144-144c0-14.5 2.1-28.5 6.1-41.7L66.1 148C33.9 186.5 11.7 226.9 0 256zM135.9 82.7l70.5 54.7c23.2-16 51.4-25.4 81.7-25.4c79.5 0 144 64.5 144 144c0 17.5-3.1 34.3-8.8 49.8c27.4 21.2 54.7 42.5 82.1 63.7c34.7-40.1 58.5-83 70.8-113.5C546 181.3 446.4 32 288 32c-59.1 0-110 20.8-152.1 50.7zM192 256c0 53 43 96 96 96c10.7 0 21-1.8 30.6-5L192.4 247.6c-.2 2.8-.4 5.6-.4 8.4zm77.2-94.2l5.8 28.8L382.3 274c1.1-5.8 1.7-11.9 1.7-18c0-53-43-96-96-96c-6.4 0-12.7 .6-18.8 1.8z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default EyeSlash;
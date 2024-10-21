
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-dolly` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dolly?s=duotone person-dolly}
 * @preview ![person-dolly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-dolly.svg)
 */
const PersonDolly: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M200 192c0 1.9 .2 3.9 .7 5.8c2.2 8.7 4.4 17.5 6.5 26.2c5.3 21.3 10.7 42.7 16 64c9 36.1 18 72.2 27.1 108.3c-16 11.6-26.3 30.5-26.3 51.7c0 35.3 28.7 64 64 64c32.3 0 59.1-24 63.4-55.1l134.4-33.6c12.9-3.2 20.7-16.2 17.5-29.1s-16.2-20.7-29.1-17.5L339.7 410.3c-10-13.7-25.3-23.3-42.8-25.7L247.3 186.2C244.6 175.3 234.8 168 224 168c-1.9 0-3.9 .2-5.8 .7C207.3 171.4 200 181.2 200 192zM304 448a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm-8.2-186.6L318.6 353c4.3 17.1 21.7 27.6 38.8 23.3L449 353.4c17.1-4.3 27.6-21.7 23.3-38.8L449.4 223c-4.3-17.1-21.7-27.6-38.8-23.3L319 222.6c-17.1 4.3-27.6 21.7-23.3 38.8z" />
        <path d="M80 96A48 48 0 1 0 80 0a48 48 0 1 0 0 96zM96 306.7l0-65.1 16.6 24.9c8.9 13.4 23.9 21.4 39.9 21.4l70.7 0-16-64-46.1 0-42.6-64c-13.3-20-35.8-32-59.9-32C26.2 128 0 154.2 0 186.6l0 88.1c0 17 6.7 33.3 18.7 45.3l79.4 79.4 14.3 85.9c2.9 17.4 19.4 29.2 36.8 26.3s29.2-19.4 26.3-36.8l-15.2-90.9c-1.6-9.9-6.3-19-13.4-26.1l-51-51zM0 346.5L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32c0 0 0 0 0 0l0-69.5-64-64z" />
    </Icon>
);

export default PersonDolly;
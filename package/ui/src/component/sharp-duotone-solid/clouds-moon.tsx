
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clouds-moon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clouds-moon?s=sharp-duotone-solid clouds-moon}
 * @preview ![clouds-moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clouds-moon.svg)
 */
const CloudsMoon: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M352 160c0 11.5 1.2 22.7 3.5 33.5c53.7 8.2 96.5 49.8 106.4 103c14.2 5.4 27.1 13.3 38.4 23.1c3.9 .3 7.8 .4 11.8 .4c51.2 0 96.7-24 126-61.4c-17.5 8.6-37.2 13.4-58 13.4c-72.9 0-132-59.1-132-132C448 72.3 499 16.5 564.7 8.9C548.2 3.1 530.5 0 512 0C423.6 0 352 71.6 352 160z" />
        <path d="M208.1 224c12.9 0 25.3 2.2 36.8 6.2c19.6-19.9 45.8-33.5 75-37.2l0-.9c0-35.3-28.6-64-64-64c-7.4 0-14.6 1.3-21.2 3.6c-11.5-30.1-40.6-51.6-74.8-51.6c-38.9 0-71.3 27.8-78.5 64.6c-3.1-.4-6.3-.6-9.5-.6c-39.8 0-72 32.2-72 72l0 72 72 0 34.8 0c18-37.9 56.5-64.1 101.3-64.1zM64 511.9l80 0 271.9 0 96 0 0-96c0-47.6-34.6-87-80-94.6l0-1.3c0-53-43-96-96-96c-34.9 0-65.4 18.6-82.2 46.4C240.8 261.3 225 256 208 256c-44.2 0-80 35.8-80 80c0 5.9 .6 11.7 1.9 17.2C92.4 359.9 64 392.6 64 431.9l0 80z" />
    </Icon>
);

export default CloudsMoon;
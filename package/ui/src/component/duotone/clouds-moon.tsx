
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clouds-moon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clouds-moon?s=duotone clouds-moon}
 * @preview ![clouds-moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clouds-moon.svg)
 */
const CloudsMoon: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M352 160C352 71.7 423.4 0 511.5 0c4.6 0 9.1 .2 13.5 .6c7 .6 12.8 5.7 14.3 12.5s-1.6 13.9-7.7 17.3c-35.4 20.1-59.3 58.2-59.3 101.9c0 64.6 52.2 116.9 116.5 116.9c6.8 0 13.5-.6 20-1.7c6.9-1.2 13.8 2.2 17 8.5c1.2 2.3 1.8 4.8 1.8 7.3c0 4.2-1.7 8.4-4.8 11.5C594 302.8 554.8 320 511.5 320c-3.8 0-7.5-.1-11.2-.4c-11.3-9.9-24.2-17.8-38.5-23.2c-9.9-53.2-52.6-94.8-106.4-103c-2.3-10.8-3.5-22-3.5-33.4z" />
        <path d="M208.1 224c12.9 0 25.3 2.2 36.8 6.2c19.6-19.9 45.8-33.5 75-37.2l0-.9c0-35.3-28.6-64-64-64c-7.4 0-14.6 1.3-21.2 3.6c-11.5-30.1-40.6-51.6-74.8-51.6c-38.9 0-71.3 27.8-78.5 64.6c-3.1-.4-6.3-.6-9.5-.6c-39.8 0-72 32.2-72 72s32.2 72 72 72c16.1 0 30.9-5.3 42.9-14.1c20.1-30.1 54.3-49.9 93.2-49.9zM64 431.9c0 44.2 35.8 80 80 80l271.9 0c53 0 96-43 96-96c0-47.6-34.6-87-80-94.6l0-1.3c0-53-43-96-96-96c-34.9 0-65.4 18.6-82.2 46.4C240.8 261.3 225 256 208 256c-44.2 0-80 35.8-80 80c0 5.9 .6 11.7 1.9 17.2C92.4 359.9 64 392.6 64 431.9z" />
    </Icon>
);

export default CloudsMoon;
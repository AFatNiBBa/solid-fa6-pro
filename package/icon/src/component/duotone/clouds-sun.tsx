
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clouds-sun` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clouds-sun?s=duotone clouds-sun}
 * @preview ![clouds-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clouds-sun.svg)
 */
const CloudsSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M1.2 121.8c-2.1 5.1-1.5 10.9 1.6 15.4L52.5 208 2.9 278.8c-3.2 4.5-3.8 10.3-1.6 15.4s6.7 8.7 12.1 9.6l84.7 14.1 14.1 84.7c.9 5.4 4.5 10 9.6 12.1s10.9 1.5 15.4-1.6l24.4-17c6.5-41.8 33.2-76.8 69.8-94.9c-7.5 1.9-15.3 2.9-23.4 2.9c-53 0-96-43-96-96s43-96 96-96c36.8 0 68.8 20.7 84.9 51.1c8.7-27.3 29.3-49.3 55.7-59.9l-30.7-5.1L303.8 13.4c-.9-5.4-4.5-10-9.6-12.1s-10.9-1.5-15.4 1.6L208 52.5 137.2 2.9c-4.5-3.2-10.3-3.8-15.4-1.6s-8.7 6.7-9.6 12.1L98.1 98.1 13.4 112.2c-5.4 .9-10 4.5-12.1 9.6zM144 208a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M495.9 224c-12.9 0-25.3 2.2-36.8 6.2C435.9 206.6 403.7 192 368 192c-16.7 0-32.6 3.2-47.3 9c-.4-2.9-.6-5.9-.6-8.9c0-35.3 28.6-64 64-64c7.4 0 14.6 1.3 21.2 3.6c11.5-30.1 40.6-51.6 74.8-51.6c38.9 0 71.3 27.8 78.5 64.6c3.1-.4 6.3-.6 9.5-.6c39.8 0 72 32.2 72 72c0 30.4-18.8 56.3-45.4 66.9c-18.9-35.1-56-59-98.7-59zm144 207.9c0 44.2-35.8 80-80 80l-271.9 0c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z" />
    </Icon>
);

export default CloudsSun;
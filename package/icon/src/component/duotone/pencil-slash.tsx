
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pencil-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pencil-slash?s=duotone pencil-slash}
 * @preview ![pencil-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pencil-slash.svg)
 */
const PencilSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 487.4c0 6.3 2.5 12.4 7 17c6.2 6.2 15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2l88.3-88.3-77.9-61.4-27.6 27.6c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l24.9-24.9L195.5 250l-72.9 72.9c-10.4 10.4-18 23.3-22.2 37.4L65 480.7c-.7 2.2-1 4.5-1 6.8zM123.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9l-78.1 23zM263.9 181.6c14.1 11 28.1 22.1 42.2 33.1l50.5-50.5c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-47.8 47.8c26 20.4 52.1 40.8 78.1 61.2l42.1-42.1L474.3 231l11.3-11.3-33.9-33.9-62.1-62.1L355.7 89.8l-11.3 11.3-22.6 22.6-57.8 57.8zM378.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L517.3 18.7C504.8 6.2 488.4 0 472 0s-32.8 6.2-45.3 18.7L412.3 33.2 389.7 55.8 378.3 67.1z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default PencilSlash;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `bird` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bird?s=duotone bird}
 * @preview ![bird](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bird.svg)
 */
const Bird: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M162.1 407.4c18.7 5.4 38.5 8.4 58.9 8.6l32.2 60.8c6.2 11.7 1.7 26.2-10 32.4s-26.2 1.7-32.4-10l-48.6-91.9zm99 5.6c16.4-2.7 32.2-7.3 47.2-13.4l40.9 77.2c6.2 11.7 1.7 26.2-10 32.4s-26.2 1.7-32.4-10l-45.7-86.3zM446.6 79.7l57.6 34.6c4.8 2.9 7.8 8.1 7.8 13.7s-2.9 10.8-7.8 13.7L448 175.5 448 96c0-5.6-.5-11-1.4-16.3z" />
        <path d="M0 188.4L0 192C0 315.7 100.3 416 224 416s224-100.3 224-224l0-96c0-53-43-96-96-96s-96 43-96 96l0 32c0 17.7-14.3 32-32 32L28.4 160C12.7 160 0 172.7 0 188.4zM352 96a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Bird;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-sleepy` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-sleepy?s=sharp-duotone-solid face-sleepy}
 * @preview ![face-sleepy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-sleepy.svg)
 */
const FaceSleepy: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c47.1 0 91.2-12.7 129.1-34.9c-.7-4.3-1.1-8.7-1.1-13.1c0-22.9-.7-52.8-14.9-74.8l-13.9-21.7 18.2-18.2 20-20 15.4-15.4 19.9 8.6c20.7 8.9 42.4 21.3 61.4 37.3C504.2 328.1 512 293 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256zm91.2 5.6c8.6-6.4 17.1-12.8 25.6-19.2c21.6 28.8 64.8 28.8 86.4 0c8.5 6.4 17.1 12.8 25.6 19.2c-34.4 45.9-103.2 45.9-137.6 0zM165 419c4.1-39.8 43.1-71 90.6-71s86.5 31.2 90.6 71c-25.4-14.5-56.8-23-90.6-23s-65.2 8.5-90.6 23zM283.2 261.6c8.6-6.4 17.1-12.8 25.6-19.2c21.6 28.8 64.8 28.8 86.4 0l25.6 19.2c-34.4 45.9-103.2 45.9-137.6 0z" />
        <path d="M203.2 242.4c-21.6 28.8-64.8 28.8-86.4 0L91.2 261.6c34.4 45.9 103.2 45.9 137.6 0l-25.6-19.2zm192 0c-21.6 28.8-64.8 28.8-86.4 0l-25.6 19.2c34.4 45.9 103.2 45.9 137.6 0l-25.6-19.2zM512 464c0-52.9-49-91.8-96-112.1l-20 20c20 31.1 20 70.4 20 92.1c0 26.5 21.5 48 48 48s48-21.5 48-48z" />
    </Icon>
);

export default FaceSleepy;
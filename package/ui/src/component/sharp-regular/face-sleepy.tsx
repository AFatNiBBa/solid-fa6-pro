
import { Icon } from "../../index";

/**
 * A component that renders the `face-sleepy` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-sleepy?s=sharp-regular face-sleepy}
 * @preview ![face-sleepy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-sleepy.svg)
 */
const FaceSleepy: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464c47 0 90.4-15.6 125.2-41.9c2.7 14.8 2.8 29.6 2.8 41.9c0 4.5 .4 8.9 1.1 13.1C347.2 499.3 303.1 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256c0 37-7.8 72.1-22 103.9c-7.4-6.2-15.1-11.8-22.7-16.7c-5.8-3.8-11.8-7.3-17.9-10.6C458.8 308.9 464 283 464 256c0-114.9-93.1-208-208-208S48 141.1 48 256s93.1 208 208 208zm-91-45c4.1-39.8 43.1-71 90.6-71s86.5 31.2 90.6 71c-25.4-14.5-56.8-23-90.6-23s-65.2 8.5-90.6 23zM311.7 245.7c20 27.1 59.8 27.1 79.8 0l32.2 23.8c-36 48.7-108.2 48.7-144.2 0l32.2-23.8zm-112.2 0l32.2 23.8c-36 48.7-108.2 48.7-144.2 0l32.2-23.8c20 27.1 59.8 27.1 79.8 0zM512 464c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-21.7 0-61.1-20-92.1l20-20c47 20.3 96 59.2 96 112.1z" />
    </Icon>
);

export default FaceSleepy;
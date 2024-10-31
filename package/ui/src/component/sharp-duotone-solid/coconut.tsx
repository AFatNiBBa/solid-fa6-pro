
import { Icon, generic } from "../../index";

/**
 * A component that renders the `coconut` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coconut?s=sharp-duotone-solid coconut}
 * @preview ![coconut](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/coconut.svg)
 */
const Coconut: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M88.8 299c0 10.4 2.8 18.9 8.7 24.9s14.5 8.7 24.8 8.7c33.4 0 85.9-29 133.5-76.6s76.6-100.2 76.6-133.5c0-10.4-2.8-18.9-8.7-24.9c-25-25-95.9 5.4-158.4 67.9C117.8 213.1 88.8 265.7 88.8 299z" />
        <path d="M274.5 55.3c42.7-13.2 71.9-7.4 86.7 7.5s20.6 44 7.5 86.7c-12.8 41.5-42.1 89.6-85.8 133.3s-91.8 73-133.3 85.8c-42.7 13.2-71.9 7.4-86.7-7.5s-20.6-44-7.5-86.7c12.8-41.5 42.1-89.6 85.8-133.3s91.8-73 133.3-85.8zM395.1 28.8C361.5-4.8 309.5-5.8 260.3 9.4c-50.4 15.6-105 49.7-153.1 97.8S25 209.9 9.4 260.3C-5.8 309.5-4.8 361.5 28.8 395.1l41 41C118.3 484.7 184.2 512 252.9 512c143.1 0 259-116 259-259c0-68.7-27.3-134.6-75.9-183.2l-41-40.9zm24.1 175.8l32 32L462.6 248l-22.6 22.6-11.3-11.3-32-32L385.3 216l22.6-22.6 11.3 11.3zm-56 136l32 32L406.6 384l-22.6 22.6-11.3-11.3-32-32L329.3 352l22.6-22.6 11.3 11.3zm-136 56l32 32L270.6 440l-22.6 22.6-11.3-11.3-32-32L193.3 408l22.6-22.6 11.3 11.3z" />
    </Icon>
);

export default Coconut;
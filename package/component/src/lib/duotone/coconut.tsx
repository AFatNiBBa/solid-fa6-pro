
import { Icon, generic } from "../../index";

/**
 * A component that renders the `coconut` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coconut?s=duotone coconut}
 * @preview ![coconut](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/coconut.svg)
 */
const Coconut: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M97.6 323.9c5.9 5.9 14.5 8.7 24.8 8.7c33.4 0 85.9-29 133.5-76.6c62.5-62.5 92.9-133.4 67.9-158.4s-95.9 5.4-158.4 67.9S72.6 298.9 97.6 323.9z" />
        <path d="M274.5 55.3c42.7-13.2 71.9-7.4 86.7 7.5s20.6 44 7.5 86.7c-12.8 41.5-42.1 89.6-85.8 133.3s-91.8 73-133.3 85.8c-42.7 13.2-71.9 7.4-86.7-7.5s-20.6-44-7.5-86.7c12.8-41.5 42.1-89.6 85.8-133.3s91.8-73 133.3-85.8zM395.2 28.8C361.5-4.8 309.6-5.7 260.4 9.5C210 25 155.3 59.1 107.2 107.2S25 209.9 9.5 260.3C-5.7 309.6-4.8 361.5 28.9 395.2l41 41C118.4 484.7 184.3 512 253 512c143.1 0 259-116 259-259c0-68.7-27.3-134.6-75.9-183.2L395.2 28.8zm24.1 175.8l32 32c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-32-32c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0zm-56 136l32 32c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-32-32c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0zm-136 56l32 32c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-32-32c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0z" />
    </Icon>
);

export default Coconut;
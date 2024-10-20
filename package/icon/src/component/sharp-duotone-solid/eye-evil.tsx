
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eye-evil` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-evil?s=sharp-duotone-solid eye-evil}
 * @preview ![eye-evil](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/eye-evil.svg)
 */
const EyeEvil: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 256c0 40.4 32 64 32 64s32-23.6 32-64c0-13.1-3.4-24.5-7.9-33.8c-7.8 1.2-15.9 1.8-24.1 1.8s-16.2-.6-24.1-1.8c-4.6 9.3-7.9 20.7-7.9 33.8z" />
        <path d="M320 0L258.1 111.4c-11 2.7-21.7 6.2-31.8 10.3L90 82.7l59 94.5c-7.1 8.9-13 18.4-17.7 28.3L0 256l131.3 50.5c4.6 10 10.6 19.4 17.7 28.3L90 429.3l136.3-39c10.1 4.1 20.7 7.5 31.8 10.2L320 512l61.9-111.4c11-2.7 21.7-6.2 31.8-10.3l136.3 39-59-94.5c7.1-8.9 13-18.4 17.7-28.3L640 256 508.7 205.5c-4.6-10-10.6-19.4-17.7-28.3l59-94.5-136.3 39c-10.1-4.1-20.7-7.5-31.8-10.3L320 0zm96 256c0 53-43 96-96 96s-96-43-96-96c0-19.7 6-38.1 16.2-53.3C263.7 216.2 290.9 224 320 224s56.3-7.8 79.8-21.3C410 217.9 416 236.3 416 256z" />
    </Icon>
);

export default EyeEvil;
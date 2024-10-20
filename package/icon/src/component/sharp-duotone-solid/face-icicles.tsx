
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-icicles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-icicles?s=sharp-duotone-solid face-icicles}
 * @preview ![face-icicles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-icicles.svg)
 */
const FaceIcicles: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 19.7 2.2 38.9 6.5 57.4l18 107.9L28.9 448l54.2 0 .5-2.8C129.1 486.7 189.6 512 256 512c33.3 0 65.1-6.3 94.2-17.9l7.8 17.9 27.9 0 15.4-35.2 6.4-14.6c8.3-6.1 16.2-12.7 23.7-19.8l.7 8.3 5.3 61.2 53.1 0 5.3-61.2 14.2-163.2c1.3-10.4 1.9-20.9 1.9-31.6C512 114.6 397.4 0 256 0S0 114.6 0 256zm32 16l48 0c-8 47.9-16 95.9-24 143.8L32 272zm80 32l56 0 0 40-56 0 0-40zm0 56l56 0 0 40-56 0 0-40zm96.4-152a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM184 304l64 0 0 40-64 0 0-40zm0 56l64 0 0 40-64 0 0-40zm80-56l64 0 0 40-64 0 0-40zm0 56l64 0 0 40-32 48-32-48 0-40zM368.4 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM344 304l56 0 0 40-56 0 0-40zm0 56l56 0 0 40-28 64-28-64 0-40zm96-136l48 0L464 448 440 224z" />
        <path d="M176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default FaceIcicles;
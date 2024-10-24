
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ban-smoking` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-smoking?s=duotone ban-smoking}
 * @preview ![ban-smoking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ban-smoking.svg)
 */
const BanSmoking: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 240l0 64c0 8.8 7.2 16 16 16l162.7 0c-32-32-64-64-96-96L112 224c-8.8 0-16 7.2-16 16zM256 112c0 26.5 21.5 48 48 48l32 0c8.8 0 16 7.2 16 16s7.2 16 16 16s16-7.2 16-16c0-26.5-21.5-48-48-48l-32 0c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16zm13.3 112l32 32 82.7 0 0 32-50.7 0 32 32 34.7 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-130.7 0z" />
        <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default BanSmoking;
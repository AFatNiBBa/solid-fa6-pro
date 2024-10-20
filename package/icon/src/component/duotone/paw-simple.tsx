
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paw-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paw-simple?s=duotone paw-simple}
 * @preview ![paw-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/paw-simple.svg)
 */
const PawSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192a48 48 0 1 0 96 0A48 48 0 1 0 0 192zM96 80a48 48 0 1 0 96 0A48 48 0 1 0 96 80zm160 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm96 112a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M97.7 286c6.2-2.3 11.8-6.3 15-12.2l40-71.9c14.4-25.9 41.7-42 71.3-42s56.9 16.1 71.3 42l40 71.9c3.2 5.8 8.8 9.9 15 12.2c38.3 14 65.7 50.8 65.7 94c0 55.2-44.8 100-100 100c-21.2 0-40.8-6.6-56.9-17.8c-17.4-12-52.8-12-70.1 0C172.8 473.4 153.2 480 132 480C76.8 480 32 435.2 32 380c0-43.2 27.4-80 65.7-94z" />
    </Icon>
);

export default PawSimple;
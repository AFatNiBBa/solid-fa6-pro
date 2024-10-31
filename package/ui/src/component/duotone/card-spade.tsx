
import { Icon, generic } from "../../index";

/**
 * A component that renders the `card-spade` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-spade?s=duotone card-spade}
 * @preview ![card-spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/card-spade.svg)
 */
const CardSpade: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zM72 264c0-14.3 5.5-28.7 16.4-39.6l64-64L175 137.8c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7l22.6 22.6 64 64C306.5 235.3 312 249.7 312 264s-5.5 28.7-16.4 39.6c-21.9 21.9-57.3 21.9-79.2 0l-7.4-7.4c-.3-.3-.6-.6-1-.9l0 40.8 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 0-40.8c-.3 .3-.7 .6-1 .9l-7.4 7.4c-21.9 21.9-57.3 21.9-79.2 0C77.5 292.7 72 278.3 72 264z" />
        <path d="M209 137.8c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6-64 64c-21.9 21.9-21.9 57.3 0 79.2s57.3 21.9 79.2 0l7.4-7.4c.3-.3 .6-.6 1-.9l0 40.8-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-40.8c.3 .3 .7 .6 1 .9l7.4 7.4c21.9 21.9 57.3 21.9 79.2 0s21.9-57.3 0-79.2l-64-64L209 137.8z" />
    </Icon>
);

export default CardSpade;
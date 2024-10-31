
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-simple-from-bracket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-simple-from-bracket?s=duotone money-simple-from-bracket}
 * @preview ![money-simple-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/money-simple-from-bracket.svg)
 */
const MoneySimpleFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 96l0 352c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-352L128 96zm96 176c0-44.2 43-80 96-80s96 35.8 96 80s-43 80-96 80s-96-35.8-96-80z" />
        <path d="M96 64C78.3 64 64 78.3 64 96l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 43 43 0 96 0L544 0c53 0 96 43 96 96l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7-14.3-32-32-32L96 64z" />
    </Icon>
);

export default MoneySimpleFromBracket;
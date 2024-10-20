
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-b` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-b?s=duotone square-b}
 * @preview ![square-b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-b.svg)
 */
const SquareB: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm128 56c0-13.3 10.7-24 24-24l92 0c42 0 76 34 76 76c0 16.2-5.1 31.3-13.8 43.7C324.3 261.6 336 283.4 336 308c0 42-34 76-76 76l-108 0c-13.3 0-24-10.7-24-24l0-104 0-104zm48 24l0 56 68 0c15.5 0 28-12.5 28-28s-12.5-28-28-28l-68 0zm0 104l0 56 84 0c15.5 0 28-12.5 28-28s-12.5-28-28-28l-16 0-68 0z" />
        <path d="M152 128c-13.3 0-24 10.7-24 24l0 104 0 104c0 13.3 10.7 24 24 24l108 0c42 0 76-34 76-76c0-24.6-11.7-46.4-29.8-60.3c8.7-12.4 13.8-27.4 13.8-43.7c0-42-34-76-76-76l-92 0zm92 104l-68 0 0-56 68 0c15.5 0 28 12.5 28 28s-12.5 28-28 28zm-68 48l68 0 16 0c15.5 0 28 12.5 28 28s-12.5 28-28 28l-84 0 0-56z" />
    </Icon>
);

export default SquareB;
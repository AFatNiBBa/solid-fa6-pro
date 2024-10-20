
import { Icon } from "../../index";

/**
 * A component that renders the `icons` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/icons?s=sharp-solid icons}
 * @preview ![icons](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/icons.svg)
 */
const Icons: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 224L236.1 115.9c12.7-12.7 19.9-30 19.9-48C256 30.4 225.6 0 188.1 0c-18 0-35.3 7.2-48 19.9L128 32 115.9 19.9C103.2 7.2 85.9 0 67.9 0C30.4 0 0 30.4 0 67.9c0 18 7.2 35.3 19.9 48L128 224zm329.1 32L320 400l72.2 10.5L374.9 512 512 368l-72.2-10.5L457.1 256zM96 272L74.7 304 0 304 0 512l288 0 0-208-74.7 0L192 272l-96 0zm48 88a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM512 40l0-39L473.7 8.6l-160 32L288 45.8 288 72l0 88c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48l0-109.8L448 79l0 49c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48l0-136z" />
    </Icon>
);

export default Icons;
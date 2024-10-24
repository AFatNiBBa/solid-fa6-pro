
import { Icon, generic } from "../../index";

/**
 * A component that renders the `books` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/books?s=sharp-duotone-solid books}
 * @preview ![books](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/books.svg)
 */
const Books: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L128 0l0 96L0 96 0 0zM0 128l128 0 0 256L0 384 0 128zM0 416l128 0 0 96L0 512l0-96zM160 0L288 0l0 24.7c0 23.8 0 47.5 0 71.3L160 96l0-96zm0 128l128 0c0-3.3 0-6.5 0-9.8c39.1-10.5 78.2-21 117.3-31.4c2.8 10.3 5.6 20.6 8.4 30.9c-41.8 11.2-83.7 22.4-125.5 33.6l-.2-.6L288 384l-128 0 0-256zm0 288l128 0 0 96-128 0 0-96zm195.4-17.7l125.5-33.6 8.4 30.9L363.8 429.2l-8.4-30.9z" />
        <path d="M405.3 86.8L381.7 0 288 24.7 288 96 160 96l0 32 128 0 0-9.8L405.3 86.8zm8.4 30.9L288.2 151.3l67.2 247 125.5-33.6-67.2-247zM386.3 512L512 478.9l-22.7-83.3L363.8 429.2 386.3 512zM0 96l0 32 128 0 0-32L0 96zM128 384L0 384l0 32 128 0 0-32zm160 0l-128 0 0 32 128 0 0-32z" />
    </Icon>
);

export default Books;

import { Icon } from "../../index";

/**
 * A component that renders the `box` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box?s=thin box}
 * @preview ![box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/box.svg)
 */
const Box: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M342.4 48L232 48l0 128 198 0c-.6-2-1.3-4-2.2-5.9L386.3 76.5C378.6 59.2 361.4 48 342.4 48zM432 192L16 192l0 224c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-224zM18 176l198 0 0-128L105.6 48c-19 0-36.2 11.2-43.9 28.5L20.1 170.1c-.9 1.9-1.6 3.9-2.2 5.9zM342.4 32c25.3 0 48.2 14.9 58.5 38l41.6 93.6c3.6 8.2 5.5 17 5.5 26L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 189.6c0-9 1.9-17.8 5.5-26L47.1 70c10.3-23.1 33.2-38 58.5-38l236.8 0z" />
    </Icon>
);

export default Box;
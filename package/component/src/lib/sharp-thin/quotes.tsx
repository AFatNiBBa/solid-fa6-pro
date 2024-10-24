
import { Icon } from "../../index";

/**
 * A component that renders the `quotes` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quotes?s=sharp-thin quotes}
 * @preview ![quotes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/quotes.svg)
 */
const Quotes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 80C0 35.8 35.8 0 80 0l8 0 8 0 0 16-8 0-8 0C44.7 16 16 44.7 16 80l0 16 96 0 16 0 0 16 0 96 0 16-16 0-96 0L0 224l0-16 0-48 0-48L0 96 0 80zm16 32l0 48 0 48 96 0 0-96-96 0zM160 80c0-44.2 35.8-80 80-80l8 0 8 0 0 16-8 0-8 0c-35.3 0-64 28.7-64 64l0 16 96 0 16 0 0 16 0 96 0 16-16 0-96 0-16 0 0-16 0-48 0-48 0-16 0-16zm16 80l0 48 96 0 0-96-96 0 0 48zM576 432c0 44.2-35.8 80-80 80l-8 0-8 0 0-16 8 0 8 0c35.3 0 64-28.7 64-64l0-16-96 0-16 0 0-16 0-96 0-16 16 0 96 0 16 0 0 16 0 48 0 48 0 16 0 16zm-16-32l0-48 0-48-96 0 0 96 96 0zM416 432c0 44.2-35.8 80-80 80l-8 0-8 0 0-16 8 0 8 0c35.3 0 64-28.7 64-64l0-16-96 0-16 0 0-16 0-96 0-16 16 0 96 0 16 0 0 16 0 48 0 48 0 16 0 16zm-16-80l0-48-96 0 0 96 96 0 0-48z" />
    </Icon>
);

export default Quotes;
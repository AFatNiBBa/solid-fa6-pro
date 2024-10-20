
import { Icon } from "../../index";

/**
 * A component that renders the `quotes` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quotes?s=sharp-light quotes}
 * @preview ![quotes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/quotes.svg)
 */
const Quotes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 88C0 39.4 39.4 0 88 0l8 0 16 0 0 32L96 32l-8 0C57.1 32 32 57.1 32 88l0 8 64 0 32 0 0 32 0 64 0 32-32 0-64 0L0 224l0-32 0-24 0-40L0 96l0-8zm32 40l0 40 0 24 64 0 0-64-64 0zM160 88c0-48.6 39.4-88 88-88l8 0 16 0 0 32-16 0-8 0c-30.9 0-56 25.1-56 56l0 8 64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-24 0-40 0-32 0-8zm32 80l0 24 64 0 0-64-64 0 0 40zM576 424c0 48.6-39.4 88-88 88l-8 0-16 0 0-32 16 0 8 0c30.9 0 56-25.1 56-56l0-8-64 0-32 0 0-32 0-64 0-32 32 0 64 0 32 0 0 32 0 24 0 40 0 32 0 8zm-32-40l0-40 0-24-64 0 0 64 64 0zM416 424c0 48.6-39.4 88-88 88l-8 0-16 0 0-32 16 0 8 0c30.9 0 56-25.1 56-56l0-8-64 0-32 0 0-32 0-64 0-32 32 0 64 0 32 0 0 32 0 24 0 40 0 32 0 8zm-32-80l0-24-64 0 0 64 64 0 0-40z" />
    </Icon>
);

export default Quotes;
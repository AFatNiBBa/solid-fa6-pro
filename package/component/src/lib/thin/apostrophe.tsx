
import { Icon } from "../../index";

/**
 * A component that renders the `apostrophe` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apostrophe?s=thin apostrophe}
 * @preview ![apostrophe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/apostrophe.svg)
 */
const Apostrophe: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M80 352c61.9 0 112-50.1 112-112l0-88 0-16 0-32c0-39.8-32.2-72-72-72L72 32C32.2 32 0 64.2 0 104l0 48c0 39.8 32.2 72 72 72l48 0c22.6 0 42.8-10.4 56-26.7l0 42.7c0 53-43 96-96 96l-8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l8 0zm96-200c0 30.9-25.1 56-56 56l-48 0c-30.9 0-56-25.1-56-56l0-48c0-30.9 25.1-56 56-56l48 0c30.9 0 56 25.1 56 56l0 32 0 16z" />
    </Icon>
);

export default Apostrophe;
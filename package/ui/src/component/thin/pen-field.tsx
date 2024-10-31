
import { Icon } from "../../index";

/**
 * A component that renders the `pen-field` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-field?s=thin pen-field}
 * @preview ![pen-field](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pen-field.svg)
 */
const PenField: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M596.5 31.8l11.9 11.9c15.6 15.6 15.6 40.9 0 56.6L568 140.7 499.7 72.4l40-40.5c15.6-15.8 41-15.8 56.7-.2zm-264 209.8l156-157.8L556.7 152 399.9 308.9c-5.5 5.5-12.5 9.3-20.1 10.9l-73.5 15.4 15.5-73.7c1.6-7.5 5.3-14.4 10.7-19.9zM528.4 20.7L321.1 230.3c-7.6 7.7-12.8 17.3-15 27.9l-18 85.6c-.6 2.6 .3 5.4 2.2 7.3s4.7 2.7 7.3 2.2l85.5-17.9c10.6-2.2 20.4-7.5 28.1-15.2L619.7 111.6c21.9-21.9 21.9-57.3 0-79.2L607.8 20.5c-22-22-57.6-21.9-79.4 .2zM56 128c-30.9 0-56 25.1-56 56L0 456c0 30.9 25.1 56 56 56l464 0c30.9 0 56-25.1 56-56l0-192c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 192c0 22.1-17.9 40-40 40L56 496c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l256 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L56 128zm72 208a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm112-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default PenField;

import { Icon } from "../../index";

/**
 * A component that renders the `oven` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oven?s=solid oven}
 * @preview ![oven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/oven.svg)
 */
const Oven: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96l0 64 448 0 0-64c0-53-43-96-96-96L96 0C43 0 0 43 0 96zM56 80a24 24 0 1 1 48 0A24 24 0 1 1 56 80zM176 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm16 200l0 192L64 448l0-192 320 0zM64 192L0 192l0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192 0-64-64 0L64 192zm48 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-224 0z" />
    </Icon>
);

export default Oven;
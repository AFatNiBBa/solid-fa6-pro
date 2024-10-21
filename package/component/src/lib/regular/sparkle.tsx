
import { Icon } from "../../index";

/**
 * A component that renders the `sparkle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkle?s=regular sparkle}
 * @preview ![sparkle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sparkle.svg)
 */
const Sparkle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32c9.4 0 17.9 5.4 21.8 13.9l59.5 128.8 128.8 59.5c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8L305.3 337.3 245.8 466.1c-3.9 8.5-12.4 13.9-21.8 13.9s-17.9-5.4-21.8-13.9L142.7 337.3 13.9 277.8C5.4 273.9 0 265.4 0 256s5.4-17.9 13.9-21.8l128.8-59.5L202.2 45.9C206.1 37.4 214.6 32 224 32zm0 81.2l-41.4 89.6c-2.4 5.2-6.5 9.3-11.7 11.7L81.2 256l89.6 41.4c5.2 2.4 9.3 6.5 11.7 11.7L224 398.8l41.4-89.6c2.4-5.2 6.5-9.3 11.7-11.7L366.8 256l-89.6-41.4c-5.2-2.4-9.3-6.5-11.7-11.7L224 113.2z" />
    </Icon>
);

export default Sparkle;
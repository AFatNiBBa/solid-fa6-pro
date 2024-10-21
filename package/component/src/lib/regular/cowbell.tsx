
import { Icon } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=regular cowbell}
 * @preview ![cowbell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cowbell.svg)
 */
const Cowbell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176 48l96 0 0 48-96 0 0-48zm-48-8l0 56-16 0c-21.4 0-40.3 14.2-46.2 34.8l-64 224c-4.1 14.5-1.2 30.1 7.8 42.1S32.9 416 48 416l352 0c15.1 0 29.3-7.1 38.3-19.1s12-27.6 7.8-42.1l-64-224C376.3 110.2 357.4 96 336 96l-16 0 0-56c0-22.1-17.9-40-40-40L168 0c-22.1 0-40 17.9-40 40zM112 144l224 0 64 224L48 368l64-224zM288 448l-128 0c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default Cowbell;

import { Icon } from "../../index";

/**
 * A component that renders the `dreidel` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dreidel?s=thin dreidel}
 * @preview ![dreidel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/dreidel.svg)
 */
const Dreidel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M445.7 45.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L305 163.7l-79-79c-18.7-18.7-49.1-18.7-67.9 0L18.7 224C6.7 236 0 252.3 0 269.3L0 416c0 35.3 28.7 64 64 64l146.7 0c17 0 33.3-6.7 45.3-18.7L395.3 321.9c18.7-18.7 18.7-49.1 0-67.9l-79-79L445.7 45.7zM214.6 96L384 265.4c12.5 12.5 12.5 32.8 0 45.3l-55 55L114.3 151l55-55c12.5-12.5 32.8-12.5 45.3 0zM30.1 235.3l73-73L317.7 377l-73 73c-9 9-21.2 14.1-33.9 14.1L64 464c-26.5 0-48-21.5-48-48l0-146.7c0-12.7 5.1-24.9 14.1-33.9z" />
    </Icon>
);

export default Dreidel;
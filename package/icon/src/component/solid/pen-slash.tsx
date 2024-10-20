
import { Icon } from "../../index";

/**
 * A component that renders the `pen-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-slash?s=solid pen-slash}
 * @preview ![pen-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/pen-slash.svg)
 */
const PenSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L409.9 296l75.7-75.7L355.7 90.3l-91.5 91.5L38.8 5.1zm78 324.1c-6.6 6.6-11.5 14.8-14.1 23.8L65 481.2c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l128.2-37.7c9-2.6 17.2-7.5 23.8-14.1l94.4-94.4L195.8 250.3l-79 79zM426.7 19.3L378.3 67.7 508.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L517.3 19.3c-25-25-65.5-25-90.5 0z" />
    </Icon>
);

export default PenSlash;
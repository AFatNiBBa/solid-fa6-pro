
import { Icon } from "../../index";

/**
 * A component that renders the `people-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-line?s=sharp-light people-line}
 * @preview ![people-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/people-line.svg)
 */
const PeopleLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-96 64l-8.9 0-4.7 7.6-55.9 90.9-1.5-2.5-8.9 0-96 0-8.9 0-4.7 7.6-64 104L10 365.2 37.2 382l8.4-13.6L88 299.5 88 384l0 16 16 0 80 0 16 0 0-16 0-84.5 42.4 68.9 8.4 13.6L278 365.2l-8.4-13.6L221.3 273l.4-.6L264 203.5 264 304l0 16 16 0 80 0 16 0 0-16 0-100.5 42.4 68.9 .4 .6-48.4 78.6L362 365.2 389.2 382l8.4-13.6L440 299.5l0 84.5 0 16 16 0 80 0 16 0 0-16 0-84.5 42.4 68.9 8.4 13.6L630 365.2l-8.4-13.6-64-104-4.7-7.6-8.9 0-96 0-8.9 0-1.5 2.5-55.9-90.9-4.7-7.6-8.9 0-96 0zm24 144l0-112 48 0 0 112-48 0zM16 448L0 448l0 32 16 0 608 0 16 0 0-32-16 0L16 448zM144 160a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-24 48l48 0 0 96-48 0 0-96zm360-96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM520 368l-48 0 0-96 48 0 0 96z" />
    </Icon>
);

export default PeopleLine;

import { Icon } from "../../index";

/**
 * A component that renders the `people-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-simple?s=sharp-regular people-simple}
 * @preview ![people-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/people-simple.svg)
 */
const PeopleSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0a64 64 0 1 1 0 128A64 64 0 1 1 128 0zM74 304l38 0 32 0 38 0-4-96L78 208l-4 96zm158 48l-40 0 0 136 0 24-48 0 0-24 0-136-32 0 0 136 0 24-48 0 0-24 0-136-40 0 2-48 6-144 192 0 6 144 2 48zM384 0a64 64 0 1 1 0 128A64 64 0 1 1 384 0zM319.6 336l128.7 0L411.8 208l-55.6 0L319.6 336zm.4-176l128 0 50.3 176L512 384l-49.9 0L448 384l0 104 0 24-48 0 0-24 0-104-32 0 0 104 0 24-48 0 0-24 0-104-14.1 0L256 384l13.7-48L320 160z" />
    </Icon>
);

export default PeopleSimple;
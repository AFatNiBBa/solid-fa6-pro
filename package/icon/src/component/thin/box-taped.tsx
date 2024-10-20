
import { Icon } from "../../index";

/**
 * A component that renders the `box-taped` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-taped?s=thin box-taped}
 * @preview ![box-taped](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/box-taped.svg)
 */
const BoxTaped: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 48l3 0L270 176 178 176 205 48l3 0 8 0 16 0 8 0zM160 192l0 80c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-80 16 0 128 0 0 224c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-224 128 0 16 0zm112 0l0 80c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-80 96 0zm32-16l-17.7 0L259.4 48l83 0c19 0 36.2 11.2 43.9 28.5l41.6 93.6c.9 1.9 1.6 3.9 2.2 5.9l-126 0zm-160 0L18 176c.6-2 1.3-4 2.2-5.9L61.7 76.5C69.4 59.2 86.6 48 105.6 48l83 0L161.7 176 144 176zM256 32l-64 0-86.4 0C80.3 32 57.4 46.9 47.1 70L5.5 163.6c-3.6 8.2-5.5 17-5.5 26L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-226.4c0-9-1.9-17.8-5.5-26L400.9 70c-10.3-23.1-33.2-38-58.5-38L256 32z" />
    </Icon>
);

export default BoxTaped;
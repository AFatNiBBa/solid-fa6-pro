
import { Icon } from "../../index";

/**
 * A component that renders the `mug-tea` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-tea?s=regular mug-tea}
 * @preview ![mug-tea](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mug-tea.svg)
 */
const MugTea: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 112l72 0 0 10.7c0 8.5-3.4 16.6-9.4 22.6l-21.3 21.3c-6 6-9.4 14.1-9.4 22.6l0 66.7c0 17.7 14.3 32 32 32l48 0c17.7 0 32-14.3 32-32l0-66.7c0-8.5-3.4-16.6-9.4-22.6l-21.3-21.3c-6-6-9.4-14.1-9.4-22.6l0-10.7 184 0 0 240c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-240zM64 64C46.3 64 32 78.3 32 96l0 256c0 53 43 96 96 96l192 0c53 0 96-43 96-96l0-32 32 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-64 0L64 64zM448 272l-32 0 0-160 32 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z" />
    </Icon>
);

export default MugTea;
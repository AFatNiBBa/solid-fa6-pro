
import { Icon } from "../../index";

/**
 * A component that renders the `command` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/command?s=regular command}
 * @preview ![command](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/command.svg)
 */
const Command: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 92C0 41.2 41.2 0 92 0s92 41.2 92 92l0 44 144 0 0-44c0-50.8 41.2-92 92-92s92 41.2 92 92l0 4c0 53-43 96-96 96l-40 0 0 128 40 0c53 0 96 43 96 96l0 4c0 50.8-41.2 92-92 92s-92-41.2-92-92l0-44-144 0 0 44c0 50.8-41.2 92-92 92s-92-41.2-92-92l0-4c0-53 43-96 96-96l40 0 0-128-40 0C43 192 0 149 0 96l0-4zm136 52l0-8 0-44c0-24.3-19.7-44-44-44S48 67.7 48 92l0 4c0 26.5 21.5 48 48 48l40 0zm48 176l0 8 144 0 0-8 0-128 0-8-144 0 0 8 0 128zm-48 48l-40 0c-26.5 0-48 21.5-48 48l0 4c0 24.3 19.7 44 44 44s44-19.7 44-44l0-44 0-8zm240 8l0 44c0 24.3 19.7 44 44 44s44-19.7 44-44l0-4c0-26.5-21.5-48-48-48l-40 0 0 8zm0-232l40 0c26.5 0 48-21.5 48-48l0-4c0-24.3-19.7-44-44-44s-44 19.7-44 44l0 44 0 8z" />
    </Icon>
);

export default Command;
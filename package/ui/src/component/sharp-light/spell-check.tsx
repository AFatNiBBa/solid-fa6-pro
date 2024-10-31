
import { Icon } from "../../index";

/**
 * A component that renders the `spell-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spell-check?s=sharp-light spell-check}
 * @preview ![spell-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/spell-check.svg)
 */
const SpellCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M101.1 0l21.9 0 4 10.2L222.4 256l-34.3 0-24.9-64L60.8 192 35.9 256 1.6 256 97.1 10.2l4-10.2zm49.7 160L112 60.2 73.2 160l77.6 0zM272 0l72 0c39.8 0 72 32.2 72 72c0 16.7-5.7 32.1-15.3 44.4C428.3 126.4 448 152.9 448 184c0 39.8-32.2 72-72 72l-104 0-16 0 0-16 0-112 0-112 0-16 16 0zM384 72c0-22.1-17.9-40-40-40l-56 0 0 80 56 0c22.1 0 40-17.9 40-40zM288 224l88 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-32 0-56 0 0 80zm283.3 67.3l-208 208L352 510.6l-11.3-11.3-112-112 22.6-22.6L352 465.4 548.7 268.7l22.6 22.6z" />
    </Icon>
);

export default SpellCheck;
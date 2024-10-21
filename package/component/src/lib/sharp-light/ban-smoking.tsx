
import { Icon } from "../../index";

/**
 * A component that renders the `ban-smoking` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-smoking?s=sharp-light ban-smoking}
 * @preview ![ban-smoking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ban-smoking.svg)
 */
const BanSmoking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M86.7 109.3L201.4 224l32 32 32 32 32 32L402.7 425.3C363.4 459.4 312.1 480 256 480C132.3 480 32 379.7 32 256c0-56.1 20.6-107.4 54.7-146.7zM278.6 256L384 256l0 32-73.4 0-32-32zm64 64l57.4 0 16 0 0-16 0-64 0-16-16 0-153.4 0L109.3 86.7C148.6 52.6 199.9 32 256 32c123.7 0 224 100.3 224 224c0 56.1-20.6 107.4-54.7 146.7L342.6 320zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM288 96l-32 0 0 16c0 26.5 21.5 48 48 48l32 0c8.8 0 16 7.2 16 16l0 16 32 0 0-16c0-26.5-21.5-48-48-48l-32 0c-8.8 0-16-7.2-16-16l0-16zM220.1 288L128 288l0-32 60.1 0-32-32L112 224l-16 0 0 16 0 64 0 16 16 0 140.1 0-32-32z" />
    </Icon>
);

export default BanSmoking;
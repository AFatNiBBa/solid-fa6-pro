
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eggplant` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eggplant?s=duotone eggplant}
 * @preview ![eggplant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/eggplant.svg)
 */
const Eggplant: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 332.7c0 1.1 0 2.2 0 3.3c1.4 95.3 79.8 175.9 176.4 176c145.7 .1 250.1-174.5 291.3-305.6C447.1 201 432 182.3 432 160c0-5.8-4-10.7-9.4-12.6c-13.3-4.8-25.4-13-35.1-22.8s-18-21.9-22.8-35.1c-2-5.4-6.9-9.4-12.6-9.4c-.7 0-1.3 0-1.9 0c-.6 0-1.3-.1-1.9-.1c-1.3-.1-2.5-.2-3.7-.4c-2.4-.4-4.8-1-7.1-1.7c-4.6-1.5-8.9-3.6-12.8-6.4c-7.8-5.5-13.9-13.2-17.3-22.2c-34.6 40.3-86.2 65.3-137.3 90.1C84.2 180.9 0 221.7 0 332.7z" />
        <path d="M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-9 9L320 16c-8.8 0-16 7.2-16 16c0 26.5 21.5 48 48 48c5.8 0 10.7 4 12.6 9.4c4.8 13.3 13 25.4 22.8 35.1s21.9 18 35.1 22.8c5.4 2 9.4 6.9 9.4 12.6c0 26.5 21.5 48 48 48c8.8 0 16-7.2 16-16l0-142.1 9-9z" />
    </Icon>
);

export default Eggplant;
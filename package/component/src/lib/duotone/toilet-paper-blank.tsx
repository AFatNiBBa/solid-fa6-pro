
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-paper-blank` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper-blank?s=duotone toilet-paper-blank}
 * @preview ![toilet-paper-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/toilet-paper-blank.svg)
 */
const ToiletPaperBlank: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M16 480c0 5.4 1.4 10.9 4.2 15.8C25.8 505.8 36.5 512 48 512l269.9 0c22.3 0 45.4-12.1 55.4-36.1c7.4-17.9 17.7-47.8 26.3-91.9c9.1-47 16.4-110.1 16.4-192c0-.2 0-.4 0-.5c0-3.1 0-6.2 .1-9.3l0-.5c.1-2.9 .2-6 .3-9l0-.8c.2-2.9 .3-5.9 .6-8.9c.3-3.3 .5-6.4 .8-9.5c1.3-12.6 3.2-24.7 5.6-36.1c4.9-23 11.9-43.6 20.6-61C461.5 21.5 485.5 0 512 0L160 0C107 0 64 86 64 192c0 85.3-.4 193.7-43.5 271.6c-3 5-4.5 10.7-4.5 16.4z" />
        <path d="M399.6 384L512 384c53 0 96-86 96-192S565 0 512 0s-96 86-96 192c0 81.9-7.3 145-16.4 192zM544 192c0 35.3-14.3 64-32 64s-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64z" />
    </Icon>
);

export default ToiletPaperBlank;
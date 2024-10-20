
import { Icon } from "../../index";

/**
 * A component that renders the `hand-horns` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-horns?s=regular hand-horns}
 * @preview ![hand-horns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/hand-horns.svg)
 */
const HandHorns: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M80 48c8.8 0 16 7.2 16 16l0 144 0 32-16 0c-5.5 0-10.8 .6-16 1.6L64 64c0-8.8 7.2-16 16-16zM16 64l0 208C6 285.4 0 302 0 320c0 0 0 0 0 0l0 24c0 92.8 75.2 168 168 168l48 0c92.8 0 168-75.2 168-168l0-56 0-32 0-128c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 50c-5.1-1.3-10.5-2-16-2c-7.9 0-15.4 1.4-22.4 4c-10.4-21.3-32.3-36-57.6-36c-5.5 0-10.9 .7-16 2l0-82c0-35.3-28.7-64-64-64S16 28.7 16 64zM336 256l0 32 0 56c0 66.3-53.7 120-120 120l-48 0c-66.3 0-120-53.7-120-120l0-24s0 0 0 0c0-17.7 14.3-32 32-32l40 0 40 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c15.1 0 29-5.3 40-14c11 8.8 24.9 14 40 14c35.3 0 64-28.7 64-64l0-48 0-16 0-112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 128zM160 240l-16 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 0 2c-5.1-1.3-10.5-2-16-2zm96 16l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-40 0-24c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16z" />
    </Icon>
);

export default HandHorns;
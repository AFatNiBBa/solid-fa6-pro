
import { Icon, generic } from "../../index";

/**
 * A component that renders the `goal-net` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/goal-net?s=duotone goal-net}
 * @preview ![goal-net](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/goal-net.svg)
 */
const GoalNet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 208c0 8.8 7.2 16 16 16l48 0 0 64-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 64-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 64 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 64 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 64 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-64 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-64 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-64 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-64 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-64 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16zm96 16l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm96-96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm96-96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64z" />
        <path d="M96 96c-17.7 0-32 14.3-32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 128C0 75 43 32 96 32l448 0c53 0 96 43 96 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7-14.3-32-32-32L96 96z" />
    </Icon>
);

export default GoalNet;
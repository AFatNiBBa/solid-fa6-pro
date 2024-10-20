
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cable-car` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cable-car?s=duotone cable-car}
 * @preview ![cable-car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cable-car.svg)
 */
const CableCar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 176c0 1.6 .2 3.2 .5 4.9c2.7 13 15.4 21.3 28.4 18.6l203.1-42 0 42.5 0 24c16 0 32 0 48 0l0-24 0-52.5 212.9-44C504.2 101.2 512 91.2 512 80c0-1.6-.2-3.2-.5-4.9c-2.7-13-15.4-21.3-28.4-18.6l-232 48-232 48C7.8 154.8 0 164.8 0 176zM80 304c0 21.3 0 42.7 0 64c0 8.8 7.2 16 16 16l64 0c4.4 0 8.4-1.8 11.3-4.7c1.4-1.4 2.6-3.2 3.4-5.1c.4-1 .7-2 .9-3c.1-.5 .2-1 .2-1.6c0-.5 .1-1 .1-1.5c0-21.5 0-42.9 0-64.2c0-.6 0-1.1-.1-1.7c-.1-.5-.1-1.1-.2-1.6c-.2-1-.5-2-.9-3c-.8-1.9-2-3.6-3.4-5.1c-2.9-2.9-6.9-4.7-11.3-4.7c-21.3 0-42.7 0-64 0c-8.8 0-16 7.2-16 16zm128 0c0 21.3 0 42.7 0 64c0 8.8 7.2 16 16 16l64 0c4.4 0 8.4-1.8 11.3-4.7c1.4-1.4 2.6-3.2 3.4-5.1c.4-1 .7-2 .9-3c.1-.5 .2-1 .2-1.6c0-.5 .1-1 .1-1.5c0-21.5 0-42.8 0-64.2c0-.6 0-1.1-.1-1.7s-.1-1.1-.2-1.6c-.2-1-.5-2-.9-3c-.8-1.9-2-3.6-3.4-5.1c-2.9-2.9-6.9-4.7-11.3-4.7l-64 0c-8.8 0-16 7.2-16 16zm128 0l0 64c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16c-21.3 0-42.7 0-64 0c-8.8 0-16 7.2-16 16z" />
        <path d="M320 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM192 88a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM96 224c-35.3 0-64 28.7-64 64l0 160c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-160c0-35.3-28.7-64-64-64L96 224zm0 64l64 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-64zm144-16l64 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default CableCar;
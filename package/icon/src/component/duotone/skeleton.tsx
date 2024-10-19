
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `skeleton` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/skeleton?s=duotone skeleton}
 * @preview ![skeleton](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCAxNjBIMTZDNy4xMjUgMTYwIDAgMTY3LjEyNSAwIDE3NlYyMDhDMCAyMTYuODc1IDcuMTI1IDIyNCAxNiAyMjRIMjI0VjE2MFpNNDMyIDI1NkgyODhWMzIwSDQzMkM0NDAuODc1IDMyMCA0NDggMzEyLjg3NSA0NDggMzA0VjI3MkM0NDggMjYzLjEyNSA0NDAuODc1IDI1NiA0MzIgMjU2Wk04MCAxMjhIMjI0VjY0SDgwQzcxLjEyNSA2NCA2NCA3MS4xMjUgNjQgODBWMTEyQzY0IDEyMC44NzUgNzEuMTI1IDEyOCA4MCAxMjhaTTQ0OCAxMTJWODBDNDQ4IDcxLjEyNSA0NDAuODc1IDY0IDQzMiA2NEgyODhWMTI4SDQzMkM0NDAuODc1IDEyOCA0NDggMTIwLjg3NSA0NDggMTEyWk02NCAyNzJWMzA0QzY0IDMxMi44NzUgNzEuMTI1IDMyMCA4MCAzMjBIMjI0VjI1Nkg4MEM3MS4xMjUgMjU2IDY0IDI2My4xMjUgNjQgMjcyWk0zOTkuOTI2IDM1MkgxMTIuMDc0Qzc0Ljc2NCAzNTIgNTEuNzE5IDM5Mi43MDMgNzAuOTE0IDQyNC42OTVMMTEzLjk3NSA0OTYuNDYzQzExOS43NTggNTA2LjEwMiAxMzAuMTc2IDUxMiAxNDEuNDE2IDUxMkgzNzAuNTg0QzM4MS44MjQgNTEyIDM5Mi4yNDIgNTA2LjEwMiAzOTguMDI1IDQ5Ni40NjNMNDQxLjA4NiA0MjQuNjk1QzQ2MC4yODEgMzkyLjcwMyA0MzcuMjM2IDM1MiAzOTkuOTI2IDM1MlpNMjAwIDQ2NEMxODYuNzQ2IDQ2NCAxNzYgNDUzLjI1NCAxNzYgNDQwUzE4Ni43NDYgNDE2IDIwMCA0MTZTMjI0IDQyNi43NDYgMjI0IDQ0MFMyMTMuMjU0IDQ2NCAyMDAgNDY0Wk0zMTIgNDY0QzI5OC43NDYgNDY0IDI4OCA0NTMuMjU0IDI4OCA0NDBTMjk4Ljc0NiA0MTYgMzEyIDQxNlMzMzYgNDI2Ljc0NiAzMzYgNDQwUzMyNS4yNTQgNDY0IDMxMiA0NjRaTTQ5NiAxNjBIMjg4VjIyNEg0OTZDNTA0Ljg3NSAyMjQgNTEyIDIxNi44NzUgNTEyIDIwOFYxNzZDNTEyIDE2Ny4xMjUgNTA0Ljg3NSAxNjAgNDk2IDE2MFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjg4IDE2VjM1MkgyMjRWMTZDMjI0IDcuMTI1IDIzMS4xMjUgMCAyNDAgMEgyNzJDMjgwLjg3NSAwIDI4OCA3LjEyNSAyODggMTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Skeleton(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M224 160H16C7.125 160 0 167.125 0 176V208C0 216.875 7.125 224 16 224H224V160ZM432 256H288V320H432C440.875 320 448 312.875 448 304V272C448 263.125 440.875 256 432 256ZM80 128H224V64H80C71.125 64 64 71.125 64 80V112C64 120.875 71.125 128 80 128ZM448 112V80C448 71.125 440.875 64 432 64H288V128H432C440.875 128 448 120.875 448 112ZM64 272V304C64 312.875 71.125 320 80 320H224V256H80C71.125 256 64 263.125 64 272ZM399.926 352H112.074C74.764 352 51.719 392.703 70.914 424.695L113.975 496.463C119.758 506.102 130.176 512 141.416 512H370.584C381.824 512 392.242 506.102 398.025 496.463L441.086 424.695C460.281 392.703 437.236 352 399.926 352ZM200 464C186.746 464 176 453.254 176 440S186.746 416 200 416S224 426.746 224 440S213.254 464 200 464ZM312 464C298.746 464 288 453.254 288 440S298.746 416 312 416S336 426.746 336 440S325.254 464 312 464ZM496 160H288V224H496C504.875 224 512 216.875 512 208V176C512 167.125 504.875 160 496 160Z" />
            <path d="M288 16V352H224V16C224 7.125 231.125 0 240 0H272C280.875 0 288 7.125 288 16Z" />
        </Icon>
    </>
}
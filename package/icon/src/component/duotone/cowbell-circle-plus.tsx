
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cowbell-circle-plus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell-circle-plus?s=duotone cowbell-circle-plus}
 * @preview ![cowbell-circle-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAzNjhDMjU2IDI4Mi42NDggMzE2Ljc3IDIxMS41MjkgMzk3LjM4OSAxOTUuNDQ1TDM4NC4yNTggMTIyLjM3NUMzODEuNTA4IDEwNy4xMjUgMzY4LjEzMyA5NiAzNTIuNjMxIDk2SDMzNi42MjlWNDhDMzM2LjYyOSAyMS41IDMxNS4wMDQgMCAyODguNTAyIDBIMTYwLjI0MkMxMzMuNzQgMCAxMTIuMjM4IDIxLjUgMTEyLjIzOCA0OFY5Nkg5NS4zNjNDNzkuODYyIDk2IDY2LjQ4NyAxMDcuMTI1IDYzLjczNSAxMjIuMzc1TDAuNDgxIDQ3NC4zNzVDLTIuODQ5IDQ5My4zMyAxMS40OSA1MTIgMzIuMTA4IDUxMkgzMzEuMDAyQzI4NS42OTIgNDgwLjE1OCAyNTYgNDI3LjU4NiAyNTYgMzY4Wk0xNjAuMDA4IDQ4SDI4OC4wMThWOTZIMTYwLjAwOFY0OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDMyLjAwMiAyMjRDMzUyLjQ2MyAyMjQgMjg4IDI4OC40NjMgMjg4IDM2OFMzNTIuNDYzIDUxMiA0MzIuMDAyIDUxMkM1MTEuNTM3IDUxMiA1NzYgNDQ3LjUzNyA1NzYgMzY4UzUxMS41MzcgMjI0IDQzMi4wMDIgMjI0Wk00OTYgMzg0SDQ0OFY0MzJDNDQ4IDQ0MC44MzYgNDQwLjgzNiA0NDggNDMyIDQ0OFM0MTYgNDQwLjgzNiA0MTYgNDMyVjM4NEgzNjhDMzU5LjE2NCAzODQgMzUyIDM3Ni44MzYgMzUyIDM2OFMzNTkuMTY0IDM1MiAzNjggMzUySDQxNlYzMDRDNDE2IDI5NS4xNjQgNDIzLjE2NCAyODggNDMyIDI4OFM0NDggMjk1LjE2NCA0NDggMzA0VjM1Mkg0OTZDNTA0LjgzNiAzNTIgNTEyIDM1OS4xNjQgNTEyIDM2OFM1MDQuODM2IDM4NCA0OTYgMzg0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CowbellCirclePlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M256 368C256 282.648 316.77 211.529 397.389 195.445L384.258 122.375C381.508 107.125 368.133 96 352.631 96H336.629V48C336.629 21.5 315.004 0 288.502 0H160.242C133.74 0 112.238 21.5 112.238 48V96H95.363C79.862 96 66.487 107.125 63.735 122.375L0.481 474.375C-2.849 493.33 11.49 512 32.108 512H331.002C285.692 480.158 256 427.586 256 368ZM160.008 48H288.018V96H160.008V48Z" />
            <path d="M432.002 224C352.463 224 288 288.463 288 368S352.463 512 432.002 512C511.537 512 576 447.537 576 368S511.537 224 432.002 224ZM496 384H448V432C448 440.836 440.836 448 432 448S416 440.836 416 432V384H368C359.164 384 352 376.836 352 368S359.164 352 368 352H416V304C416 295.164 423.164 288 432 288S448 295.164 448 304V352H496C504.836 352 512 359.164 512 368S504.836 384 496 384Z" />
        </Icon>
    </>
}
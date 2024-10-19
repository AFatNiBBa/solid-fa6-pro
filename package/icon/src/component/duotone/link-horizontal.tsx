
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `link-horizontal` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/link-horizontal?s=duotone link-horizontal}
 * @preview ![link-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0MCAzMDRDNjQwIDM4My41MjkgNTc1LjUyOSA0NDggNDk2IDQ0OEgzMzZDMjU2LjQ3MSA0NDggMTkyIDM4My41MjkgMTkyIDMwNFMyNTYuNDcxIDE2MCAzMzYgMTYwSDM2Ny41OTJDMzc3Ljc0NCAxNzMuNDEyIDM4NCAxODkuOTIgMzg0IDIwOEMzODQgMjEzLjUxOCAzODMuMjQyIDIxOC44MiAzODIuMTQ1IDIyNEgzMzZDMjkxLjg4OSAyMjQgMjU2IDI1OS44ODkgMjU2IDMwNFMyOTEuODg5IDM4NCAzMzYgMzg0SDQ5NkM1NDAuMTExIDM4NCA1NzYgMzQ4LjExMSA1NzYgMzA0UzU0MC4xMTEgMjI0IDQ5NiAyMjRINDQ2LjQ0NUM0NDcuMTE3IDIxOC43MTEgNDQ4IDIxMy40ODIgNDQ4IDIwOEM0NDggMTkxLjA3OCA0NDQuNTQ1IDE3NS4wODIgNDM5LjE4NCAxNjBINDk2QzU3NS41MjkgMTYwIDY0MCAyMjQuNDcxIDY0MCAzMDRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTAgMjA4QzAgMTI4LjQ3MSA2NC40NzEgNjQgMTQ0IDY0SDMwNEMzODMuNTI5IDY0IDQ0OCAxMjguNDcxIDQ0OCAyMDhTMzgzLjUyOSAzNTIgMzA0IDM1MkgyNzIuNDA4QzI2Mi4yNTYgMzM4LjU4OCAyNTYgMzIyLjA4IDI1NiAzMDRDMjU2IDI5OC40ODIgMjU2Ljc1OCAyOTMuMTggMjU3Ljg1NSAyODhIMzA0QzM0OC4xMTEgMjg4IDM4NCAyNTIuMTExIDM4NCAyMDhTMzQ4LjExMSAxMjggMzA0IDEyOEgxNDRDOTkuODg5IDEyOCA2NCAxNjMuODg5IDY0IDIwOFM5OS44ODkgMjg4IDE0NCAyODhIMTkzLjU1NUMxOTIuODgzIDI5My4yODkgMTkyIDI5OC41MTggMTkyIDMwNEMxOTIgMzIwLjkyMiAxOTUuNDU1IDMzNi45MTggMjAwLjgxNiAzNTJIMTQ0QzY0LjQ3MSAzNTIgMCAyODcuNTI5IDAgMjA4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LinkHorizontal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M640 304C640 383.529 575.529 448 496 448H336C256.471 448 192 383.529 192 304S256.471 160 336 160H367.592C377.744 173.412 384 189.92 384 208C384 213.518 383.242 218.82 382.145 224H336C291.889 224 256 259.889 256 304S291.889 384 336 384H496C540.111 384 576 348.111 576 304S540.111 224 496 224H446.445C447.117 218.711 448 213.482 448 208C448 191.078 444.545 175.082 439.184 160H496C575.529 160 640 224.471 640 304Z" />
            <path d="M0 208C0 128.471 64.471 64 144 64H304C383.529 64 448 128.471 448 208S383.529 352 304 352H272.408C262.256 338.588 256 322.08 256 304C256 298.482 256.758 293.18 257.855 288H304C348.111 288 384 252.111 384 208S348.111 128 304 128H144C99.889 128 64 163.889 64 208S99.889 288 144 288H193.555C192.883 293.289 192 298.518 192 304C192 320.922 195.455 336.918 200.816 352H144C64.471 352 0 287.529 0 208Z" />
        </Icon>
    </>
}
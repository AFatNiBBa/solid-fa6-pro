
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hospital-user` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hospital-user?s=duotone hospital-user}
 * @preview ![hospital-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1MiAzNTIuNTlWNDguMDI5QzM1MiAyMS41MTkgMzMwLjUxIDAuMDI5IDMwNCAwLjAyOUg0OEMyMS40OSAwLjAyOSAwIDIxLjUxOSAwIDQ4LjAyOVY0ODAuMDI5QzAgNDk3LjcwMiAxNC4zMjcgNTEyLjAyOSAzMiA1MTIuMDI5SDI5Ni45MDJDMjkxLjM4OSA1MDIuNTc4IDI4OCA0OTEuNzM4IDI4OCA0ODAuMDI5QzI4OCA0MjcuOTA0IDMxMy4zMDMgMzgxLjgyIDM1MiAzNTIuNTlaTTE0NCA0MDAuMDI5QzE0NCA0MDguODY1IDEzNi44MzYgNDE2LjAyOSAxMjggNDE2LjAyOUg5NkM4Ny4xNjQgNDE2LjAyOSA4MCA0MDguODY1IDgwIDQwMC4wMjlWMzY4LjAyOUM4MCAzNTkuMTkxIDg3LjE2NCAzNTIuMDI5IDk2IDM1Mi4wMjlIMTI4QzEzNi44MzYgMzUyLjAyOSAxNDQgMzU5LjE5MSAxNDQgMzY4LjAyOVY0MDAuMDI5Wk0xNDQgMzA0LjAyOUMxNDQgMzEyLjg2NSAxMzYuODM2IDMyMC4wMjkgMTI4IDMyMC4wMjlIOTZDODcuMTY0IDMyMC4wMjkgODAgMzEyLjg2NSA4MCAzMDQuMDI5VjI3Mi4wMjlDODAgMjYzLjE5MSA4Ny4xNjQgMjU2LjAyOSA5NiAyNTYuMDI5SDEyOEMxMzYuODM2IDI1Ni4wMjkgMTQ0IDI2My4xOTEgMTQ0IDI3Mi4wMjlWMzA0LjAyOVpNMjAxLjYwMiAxODMuNzA5QzIwMS42MDIgMTg4LjMwMiAxOTcuODc1IDE5Mi4wMjkgMTkzLjI4MSAxOTIuMDI5SDE1OC43MTlDMTU0LjEyNSAxOTIuMDI5IDE1MC4zOTggMTg4LjMwMiAxNTAuMzk4IDE4My43MDlWMTUzLjYzMUgxMjAuMzJDMTE1LjcyNyAxNTMuNjMxIDExMiAxNDkuOTA0IDExMiAxNDUuMzFWMTEwLjc0OEMxMTIgMTA2LjE1NCAxMTUuNzI3IDEwMi40MjcgMTIwLjMyIDEwMi40MjdIMTUwLjM5OFY3Mi4zNDlDMTUwLjM5OCA2Ny43NTYgMTU0LjEyNSA2NC4wMjkgMTU4LjcxOSA2NC4wMjlIMTkzLjI4MUMxOTcuODc1IDY0LjAyOSAyMDEuNjAyIDY3Ljc1NiAyMDEuNjAyIDcyLjM0OVYxMDIuNDI3SDIzMS42OEMyMzYuMjczIDEwMi40MjcgMjQwIDEwNi4xNTQgMjQwIDExMC43NDhWMTQ1LjMxQzI0MCAxNDkuOTA0IDIzNi4yNzMgMTUzLjYzMSAyMzEuNjggMTUzLjYzMUgyMDEuNjAyVjE4My43MDlaTTI3MiA0MDAuMDI5QzI3MiA0MDguODY1IDI2NC44MzYgNDE2LjAyOSAyNTYgNDE2LjAyOUgyMjRDMjE1LjE2NCA0MTYuMDI5IDIwOCA0MDguODY1IDIwOCA0MDAuMDI5VjM2OC4wMjlDMjA4IDM1OS4xOTEgMjE1LjE2NCAzNTIuMDI5IDIyNCAzNTIuMDI5SDI1NkMyNjQuODM2IDM1Mi4wMjkgMjcyIDM1OS4xOTEgMjcyIDM2OC4wMjlWNDAwLjAyOVpNMjcyIDMwNC4wMjlDMjcyIDMxMi44NjUgMjY0LjgzNiAzMjAuMDI5IDI1NiAzMjAuMDI5SDIyNEMyMTUuMTY0IDMyMC4wMjkgMjA4IDMxMi44NjUgMjA4IDMwNC4wMjlWMjcyLjAyOUMyMDggMjYzLjE5MSAyMTUuMTY0IDI1Ni4wMjkgMjI0IDI1Ni4wMjlIMjU2QzI2NC44MzYgMjU2LjAyOSAyNzIgMjYzLjE5MSAyNzIgMjcyLjAyOVYzMDQuMDI5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00ODAgMzIwLjAyOUM1MzMuMDIgMzIwLjAyOSA1NzYgMjc3LjA0OSA1NzYgMjI0LjAyOVM1MzMuMDIgMTI4LjAyOSA0ODAgMTI4LjAyOVMzODQgMTcxLjAxIDM4NCAyMjQuMDI5UzQyNi45OCAzMjAuMDI5IDQ4MCAzMjAuMDI5Wk01MTIgMzUyLjAyOUg0NDhDMzc3LjMwNyAzNTIuMDI5IDMyMCA0MDkuMzM0IDMyMCA0ODAuMDI5QzMyMCA0OTcuNzAxIDMzNC4zMjYgNTEyLjAyOSAzNTIgNTEyLjAyOUg2MDhDNjI1LjY3NCA1MTIuMDI5IDY0MCA0OTcuNzAxIDY0MCA0ODAuMDI5QzY0MCA0MDkuMzM0IDU4Mi42OTMgMzUyLjAyOSA1MTIgMzUyLjAyOVpNMjMxLjY4IDEwMi40MjhIMjAxLjYwMlY3Mi4zNUMyMDEuNjAyIDY3Ljc1NiAxOTcuODc1IDY0LjAyOSAxOTMuMjgxIDY0LjAyOUgxNTguNzE5QzE1NC4xMjUgNjQuMDI5IDE1MC4zOTggNjcuNzU2IDE1MC4zOTggNzIuMzVWMTAyLjQyOEgxMjAuMzJDMTE1LjcyNyAxMDIuNDI4IDExMiAxMDYuMTU0IDExMiAxMTAuNzQ4VjE0NS4zMTFDMTEyIDE0OS45MDQgMTE1LjcyNyAxNTMuNjMxIDEyMC4zMiAxNTMuNjMxSDE1MC4zOThWMTgzLjcwOUMxNTAuMzk4IDE4OC4zMDMgMTU0LjEyNSAxOTIuMDI5IDE1OC43MTkgMTkyLjAyOUgxOTMuMjgxQzE5Ny44NzUgMTkyLjAyOSAyMDEuNjAyIDE4OC4zMDMgMjAxLjYwMiAxODMuNzA5VjE1My42MzFIMjMxLjY4QzIzNi4yNzMgMTUzLjYzMSAyNDAgMTQ5LjkwNCAyNDAgMTQ1LjMxMVYxMTAuNzQ4QzI0MCAxMDYuMTU0IDIzNi4yNzMgMTAyLjQyOCAyMzEuNjggMTAyLjQyOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function HospitalUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M352 352.59V48.029C352 21.519 330.51 0.029 304 0.029H48C21.49 0.029 0 21.519 0 48.029V480.029C0 497.702 14.327 512.029 32 512.029H296.902C291.389 502.578 288 491.738 288 480.029C288 427.904 313.303 381.82 352 352.59ZM144 400.029C144 408.865 136.836 416.029 128 416.029H96C87.164 416.029 80 408.865 80 400.029V368.029C80 359.191 87.164 352.029 96 352.029H128C136.836 352.029 144 359.191 144 368.029V400.029ZM144 304.029C144 312.865 136.836 320.029 128 320.029H96C87.164 320.029 80 312.865 80 304.029V272.029C80 263.191 87.164 256.029 96 256.029H128C136.836 256.029 144 263.191 144 272.029V304.029ZM201.602 183.709C201.602 188.302 197.875 192.029 193.281 192.029H158.719C154.125 192.029 150.398 188.302 150.398 183.709V153.631H120.32C115.727 153.631 112 149.904 112 145.31V110.748C112 106.154 115.727 102.427 120.32 102.427H150.398V72.349C150.398 67.756 154.125 64.029 158.719 64.029H193.281C197.875 64.029 201.602 67.756 201.602 72.349V102.427H231.68C236.273 102.427 240 106.154 240 110.748V145.31C240 149.904 236.273 153.631 231.68 153.631H201.602V183.709ZM272 400.029C272 408.865 264.836 416.029 256 416.029H224C215.164 416.029 208 408.865 208 400.029V368.029C208 359.191 215.164 352.029 224 352.029H256C264.836 352.029 272 359.191 272 368.029V400.029ZM272 304.029C272 312.865 264.836 320.029 256 320.029H224C215.164 320.029 208 312.865 208 304.029V272.029C208 263.191 215.164 256.029 224 256.029H256C264.836 256.029 272 263.191 272 272.029V304.029Z" />
            <path d="M480 320.029C533.02 320.029 576 277.049 576 224.029S533.02 128.029 480 128.029S384 171.01 384 224.029S426.98 320.029 480 320.029ZM512 352.029H448C377.307 352.029 320 409.334 320 480.029C320 497.701 334.326 512.029 352 512.029H608C625.674 512.029 640 497.701 640 480.029C640 409.334 582.693 352.029 512 352.029ZM231.68 102.428H201.602V72.35C201.602 67.756 197.875 64.029 193.281 64.029H158.719C154.125 64.029 150.398 67.756 150.398 72.35V102.428H120.32C115.727 102.428 112 106.154 112 110.748V145.311C112 149.904 115.727 153.631 120.32 153.631H150.398V183.709C150.398 188.303 154.125 192.029 158.719 192.029H193.281C197.875 192.029 201.602 188.303 201.602 183.709V153.631H231.68C236.273 153.631 240 149.904 240 145.311V110.748C240 106.154 236.273 102.428 231.68 102.428Z" />
        </Icon>
    </>
}
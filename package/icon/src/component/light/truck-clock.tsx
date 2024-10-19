
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `truck-clock` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/truck-clock?s=light truck-clock}
 * @preview ![truck-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDggNjRDMTQ2LjE0NSA2NCA5NiAxMTQuMTQ1IDk2IDE3NlMxNDYuMTQ1IDI4OCAyMDggMjg4UzMyMCAyMzcuODU1IDMyMCAxNzZTMjY5Ljg1NSA2NCAyMDggNjRaTTIwOCAyNTZDMTYzLjg4OSAyNTYgMTI4IDIyMC4xMTEgMTI4IDE3NkMxMjggMTMxLjg4NyAxNjMuODg5IDk2IDIwOCA5NlMyODggMTMxLjg4NyAyODggMTc2QzI4OCAyMjAuMTExIDI1Mi4xMTEgMjU2IDIwOCAyNTZaTTI0MCAxNjBIMjI0VjEyOEMyMjQgMTE5LjE1NiAyMTYuODQ0IDExMiAyMDggMTEyUzE5MiAxMTkuMTU2IDE5MiAxMjhWMTc2QzE5MiAxODQuODQ0IDE5OS4xNTYgMTkyIDIwOCAxOTJIMjQwQzI0OC44NDQgMTkyIDI1NiAxODQuODQ0IDI1NiAxNzZTMjQ4Ljg0NCAxNjAgMjQwIDE2MFpNNjI0IDM4NEg2MDhWMjQ3LjY3MkM2MDggMjI4LjU5NCA2MDEuMTU2IDIxMC4xMDkgNTg4Ljc1IDE5NS42MjVMNTE3LjczNCAxMTIuNzY2QzUwOC41OTQgMTAyLjEwOSA0OTUuMzEyIDk2IDQ4MS4yODEgOTZINDE2VjY0QzQxNiAyOC42NTQgMzg3LjM0NiAwIDM1MiAwSDY0QzI4LjY1NCAwIDAgMjguNjU0IDAgNjRWMzUyQzAgMzg3LjM0NiAyOC42NTQgNDE2IDY0IDQxNkM2NCA0NjguOTM4IDEwNy4wNjIgNTEyIDE2MCA1MTJTMjU2IDQ2OC45MzggMjU2IDQxNkgzODRDMzg0IDQ2OC45MzggNDI3LjA2MiA1MTIgNDgwIDUxMlM1NzYgNDY4LjkzOCA1NzYgNDE2SDYyNEM2MzIuODQ0IDQxNiA2NDAgNDA4Ljg0NCA2NDAgNDAwUzYzMi44NDQgMzg0IDYyNCAzODRaTTQxNiAxMjhINDgxLjI4MUM0ODUuOTY5IDEyOCA0OTAuMzkxIDEzMC4wMzEgNDkzLjQyMiAxMzMuNTc4TDU2NC40NTMgMjE2LjQzOEM1NjYuNDYzIDIxOC43ODkgNTY4LjE4IDIyMS4zNCA1NjkuNjg4IDIyNEg0MTZWMTI4Wk0xNjAgNDgwQzEyNC43MDMgNDgwIDk2IDQ1MS4yOTcgOTYgNDE2UzEyNC43MDMgMzUyIDE2MCAzNTJTMjI0IDM4MC43MDMgMjI0IDQxNlMxOTUuMjk3IDQ4MCAxNjAgNDgwWk00ODAgNDgwQzQ0NC43MDMgNDgwIDQxNiA0NTEuMjk3IDQxNiA0MTZTNDQ0LjcwMyAzNTIgNDgwIDM1MlM1NDQgMzgwLjcwMyA1NDQgNDE2UzUxNS4yOTcgNDgwIDQ4MCA0ODBaTTU3NiAzODRINTcwLjRDNTU3LjE4IDM0Ni43NzMgNTIxLjcwNSAzMjAgNDgwIDMyMFM0MDIuODIgMzQ2Ljc3MyAzODkuNiAzODRIMjUwLjRDMjM3LjE4IDM0Ni43NzMgMjAxLjcwNSAzMjAgMTYwIDMyMFM4Mi44MiAzNDYuNzczIDY5LjYgMzg0SDY0QzQ2LjMyNiAzODQgMzIgMzY5LjY3NCAzMiAzNTJWNjRDMzIgNDYuMzI2IDQ2LjMyNiAzMiA2NCAzMkgzNTJDMzY5LjY3NCAzMiAzODQgNDYuMzI2IDM4NCA2NFYyODhDMzg0IDI5Ni44MzYgMzkxLjE2NCAzMDQgNDAwIDMwNFM0MTYgMjk2LjgzNiA0MTYgMjg4VjI1Nkg1NzZWMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TruckClock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M208 64C146.145 64 96 114.145 96 176S146.145 288 208 288S320 237.855 320 176S269.855 64 208 64ZM208 256C163.889 256 128 220.111 128 176C128 131.887 163.889 96 208 96S288 131.887 288 176C288 220.111 252.111 256 208 256ZM240 160H224V128C224 119.156 216.844 112 208 112S192 119.156 192 128V176C192 184.844 199.156 192 208 192H240C248.844 192 256 184.844 256 176S248.844 160 240 160ZM624 384H608V247.672C608 228.594 601.156 210.109 588.75 195.625L517.734 112.766C508.594 102.109 495.312 96 481.281 96H416V64C416 28.654 387.346 0 352 0H64C28.654 0 0 28.654 0 64V352C0 387.346 28.654 416 64 416C64 468.938 107.062 512 160 512S256 468.938 256 416H384C384 468.938 427.062 512 480 512S576 468.938 576 416H624C632.844 416 640 408.844 640 400S632.844 384 624 384ZM416 128H481.281C485.969 128 490.391 130.031 493.422 133.578L564.453 216.438C566.463 218.789 568.18 221.34 569.688 224H416V128ZM160 480C124.703 480 96 451.297 96 416S124.703 352 160 352S224 380.703 224 416S195.297 480 160 480ZM480 480C444.703 480 416 451.297 416 416S444.703 352 480 352S544 380.703 544 416S515.297 480 480 480ZM576 384H570.4C557.18 346.773 521.705 320 480 320S402.82 346.773 389.6 384H250.4C237.18 346.773 201.705 320 160 320S82.82 346.773 69.6 384H64C46.326 384 32 369.674 32 352V64C32 46.326 46.326 32 64 32H352C369.674 32 384 46.326 384 64V288C384 296.836 391.164 304 400 304S416 296.836 416 288V256H576V384Z" />
        </Icon>
    </>
}
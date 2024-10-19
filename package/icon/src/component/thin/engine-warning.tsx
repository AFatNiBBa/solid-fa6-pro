
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `engine-warning` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/engine-warning?s=thin engine-warning}
 * @preview ![engine-warning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDggMTkySDU5MkM1NzQuMzQ0IDE5MiA1NjAgMjA2LjM1OSA1NjAgMjI0VjI1Nkg1MTJWMjA4QzUxMiAyMDMuMTQxIDUwOS43ODEgMTk4LjU0NyA1MDUuOTk5IDE5NS41TDQzNC43ODEgMTM4LjU0N0M0MjYuMzEyIDEzMS43NSA0MTUuNjU2IDEyOCA0MDQuNzgxIDEyOEgyOTZWODBIMzkyQzM5Ni40MTggODAgNDAwIDc2LjQxOCA0MDAgNzJTMzk2LjQxOCA2NCAzOTIgNjRIMTg0QzE3OS41ODIgNjQgMTc2IDY3LjU4MiAxNzYgNzJTMTc5LjU4MiA4MCAxODQgODBIMjgwVjEyOEgxMTJDODUuNTMxIDEyOCA2NCAxNDkuNTMxIDY0IDE3NlYyNDhIMTZWMTM2QzE2IDEzMS41ODIgMTIuNDE4IDEyOCA4IDEyOFMwIDEzMS41ODIgMCAxMzZWMzc2QzAgMzgwLjQxOCAzLjU4MiAzODQgOCAzODRTMTYgMzgwLjQxOCAxNiAzNzZWMjY0SDY0VjMzNkM2NCAzNjIuNDY5IDg1LjUzMSAzODQgMTEyIDM4NEgxODUuMzc1TDIzNS4zMTMgNDMzLjkzOEMyNDQuMjUgNDQyLjg3NSAyNTYuNjI1IDQ0OCAyNjkuMjUgNDQ4SDQ2NEM0OTAuNDY5IDQ0OCA1MTIgNDI2LjQ2OSA1MTIgNDAwVjM4NEg1NjBWNDE2QzU2MCA0MzMuNjQxIDU3NC4zNDQgNDQ4IDU5MiA0NDhINjA4QzYyNS42NTYgNDQ4IDY0MCA0MzMuNjQxIDY0MCA0MTZWMjI0QzY0MCAyMDYuMzU5IDYyNS42NTYgMTkyIDYwOCAxOTJaTTQ5NiA0MDBDNDk2IDQxNy42NDUgNDgxLjY0NSA0MzIgNDY0IDQzMkgyNjkuMjVDMjYwLjgzIDQzMiAyNTIuNTg0IDQyOC41ODIgMjQ2LjYyNyA0MjIuNjIzTDE5Ni42ODkgMzcyLjY4NkwxOTIuMDAyIDM2OEgxMTJDOTQuMzU1IDM2OCA4MCAzNTMuNjQ1IDgwIDMzNlYxNzZDODAgMTU4LjM1NSA5NC4zNTUgMTQ0IDExMiAxNDRINDA0Ljc4MUM0MTIuMDIzIDE0NCA0MTkuMTIxIDE0Ni40OTQgNDI0Ljc4OSAxNTEuMDQzTDQ5NiAyMDhWNDAwWk02MjQgNDE2QzYyNCA0MjQuODIyIDYxNi44MjIgNDMyIDYwOCA0MzJINTkyQzU4My4xNzggNDMyIDU3NiA0MjQuODIyIDU3NiA0MTZWMzY4SDUxMlYyNzJINTc2VjIyNEM1NzYgMjE1LjE3OCA1ODMuMTc4IDIwOCA1OTIgMjA4SDYwOEM2MTYuODIyIDIwOCA2MjQgMjE1LjE3OCA2MjQgMjI0VjQxNlpNMjg3LjkzOCAzMDRDMjkyLjM0NCAzMDQgMjk1LjkzOCAzMDAuNDA2IDI5NS45MzggMjk2VjE4NEMyOTUuOTM4IDE3OS41OTQgMjkyLjM0NCAxNzYgMjg3LjkzOCAxNzZTMjc5LjkzOCAxNzkuNTk0IDI3OS45MzggMTg0VjI5NkMyNzkuOTM4IDMwMC40MDYgMjgzLjUzMSAzMDQgMjg3LjkzOCAzMDRaTTI4OCAzMzYuMDAyQzI3OS4xNzggMzM2LjAwMiAyNzIgMzQzLjE4MiAyNzIgMzUyLjAwMlMyNzkuMTc4IDM2OC4wMDIgMjg4IDM2OC4wMDJTMzA0IDM2MC44MjIgMzA0IDM1Mi4wMDJTMjk2LjgyMiAzMzYuMDAyIDI4OCAzMzYuMDAyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function EngineWarning(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M608 192H592C574.344 192 560 206.359 560 224V256H512V208C512 203.141 509.781 198.547 505.999 195.5L434.781 138.547C426.312 131.75 415.656 128 404.781 128H296V80H392C396.418 80 400 76.418 400 72S396.418 64 392 64H184C179.582 64 176 67.582 176 72S179.582 80 184 80H280V128H112C85.531 128 64 149.531 64 176V248H16V136C16 131.582 12.418 128 8 128S0 131.582 0 136V376C0 380.418 3.582 384 8 384S16 380.418 16 376V264H64V336C64 362.469 85.531 384 112 384H185.375L235.313 433.938C244.25 442.875 256.625 448 269.25 448H464C490.469 448 512 426.469 512 400V384H560V416C560 433.641 574.344 448 592 448H608C625.656 448 640 433.641 640 416V224C640 206.359 625.656 192 608 192ZM496 400C496 417.645 481.645 432 464 432H269.25C260.83 432 252.584 428.582 246.627 422.623L196.689 372.686L192.002 368H112C94.355 368 80 353.645 80 336V176C80 158.355 94.355 144 112 144H404.781C412.023 144 419.121 146.494 424.789 151.043L496 208V400ZM624 416C624 424.822 616.822 432 608 432H592C583.178 432 576 424.822 576 416V368H512V272H576V224C576 215.178 583.178 208 592 208H608C616.822 208 624 215.178 624 224V416ZM287.938 304C292.344 304 295.938 300.406 295.938 296V184C295.938 179.594 292.344 176 287.938 176S279.938 179.594 279.938 184V296C279.938 300.406 283.531 304 287.938 304ZM288 336.002C279.178 336.002 272 343.182 272 352.002S279.178 368.002 288 368.002S304 360.822 304 352.002S296.822 336.002 288 336.002Z" />
        </Icon>
    </>
}